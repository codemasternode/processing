import { IResponse } from '.'
import { Document } from 'mongoose'

export interface IResponseModel extends IResponse, Document {
    comparePassword(candidatePassword: string): Promise<boolean | never>
}