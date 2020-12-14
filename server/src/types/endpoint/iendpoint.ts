import { Document } from 'mongoose'
import { EAuthorizationType } from './eauthorization-type'
import { EMethodType } from '.'
import { EMimeType, IKeyValue } from '../shared'

interface IEndpoint extends Document {
    name: string;
    url: string;
    method: EMethodType,
    descrition?: string;
    authorization?: EAuthorizationType;
    parameters: IKeyValue[];
    headers: IKeyValue[];
    responses: string[];
    mimeType: EMimeType;
    "application/json": object;
    "multipart/form-data": object;
    createdBy: string;
    created_at: Date;
    updated_at: Date;
}

interface IEndpointModel extends IEndpoint { }

export { IEndpoint, IEndpointModel }