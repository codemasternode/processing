import { Document, Types } from 'mongoose'
import { EAuthorizationType } from './eauthorization-type'
import { EMethodType } from '.'
import { EMimeType, IKeyValue, MultiPartFormDataTypes } from '../shared'

interface IEndpoint extends Document {
    name: string;
    url: string;
    method: EMethodType,
    descrition?: string;
    authorization?: EAuthorizationType;
    parameters: IKeyValue[];
    headers: IKeyValue[];
    responses: Types.ObjectId[];
    mimeType: EMimeType;
    "application/json": unknown;
    "multipart/form-data": {
        [key: string]: {
            type: MultiPartFormDataTypes,
            description?: string;
            exampleValue?: string;
        }
    };
    createdBy: string;
    created_at: Date;
    updated_at: Date;
}

interface IEndpointModel extends IEndpoint { }

export { IEndpoint, IEndpointModel }