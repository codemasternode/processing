import { Error } from 'mongoose'
import { UserModel } from '../models'
import { InternalError, IUser, IUserResponse, MongoDBValidationError, AuthenticationError, NotFoundError } from '../types'
import { IUserRequest } from '../types/user/iuser-request'
import { JWTAuthentication } from '.'
import { Cache } from './index'

export class UserService {

    cache: Cache;

    constructor() {
        this.cache = new Cache(86400)
    }
    async SignUp(user: IUserRequest): Promise<IUserResponse | never> {
        try {
            const savedUser = await UserModel.create(user)

            const response: IUserResponse = {
                ...savedUser.toJSON()
            }
            delete response.password

            return response
        } catch (err) {
            if (err instanceof Error.ValidationError) {
                const errors = Object.keys(err.errors).map((field) => {
                    return {
                        [field]: err.errors[field].message
                    }
                })
                throw new MongoDBValidationError(errors)
            } else if (err.name === 'MongoError' && err.code === 11000) {
                throw new MongoDBValidationError({
                    message: "Email has to be unique"
                })
            }
            throw new InternalError({
                message: err.toString()
            })
        }
    }

    async SignIn(user: IUserRequest): Promise<string | never> {
        try {
            const document = await UserModel.findOne({
                email: user.email
            })
            if (!document) {
                throw new AuthenticationError({
                    message: "Email or password are invalid"
                })
            }

            const isPasswordMatch = await document?.comparePassword(user.password)
            if (!isPasswordMatch) {
                throw new AuthenticationError({
                    message: "Email or password are invalid"
                })
            }
            return await JWTAuthentication.createJWT({ email: user.email })
        } catch (err) {
            if (err.name === 'AuthenticationError') {
                throw err
            }
            throw new InternalError({
                message: err.toString()
            })
        }
    }

    async getUserProfileByEmail(email: string): Promise<IUser | never> {
        try {
            const user = await this.cache.get(email, async () => {
                const user = await UserModel.findOne({
                    email
                })

                return user
            })

            if (!user) {
                throw new NotFoundError({
                    message: `User with ${email} doesn't exist`
                })
            }

            return user as IUser
        } catch (err) {
            if (err.name === "NotFoundError") {
                throw err
            }
            throw new InternalError({
                message: err.toString()
            })
        }
    }

}