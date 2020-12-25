import { Document } from 'mongoose'
import { EMimeType } from '../shared'

interface IResponse extends Document {
    status: number;
    mimeType: EMimeType;
    "application/json": unknown;
}

interface IResponseDocument extends IResponse {
    comparePassword(password: string): boolean;
}

export { IResponse, IResponseDocument } 