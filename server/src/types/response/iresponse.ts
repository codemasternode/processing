import { Document } from 'mongoose'

interface IResponse extends Document {
    email: string;
    password: string;
}

interface IResponseDocument extends IResponse {
    comparePassword(password: string): boolean;
}

export { IResponse, IResponseDocument }