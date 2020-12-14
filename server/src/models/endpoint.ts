import { Schema, model, Types } from 'mongoose'
import { enumConvert } from '../services'
import { IEndpointModel, EMethodType, EAuthorizationType, EMimeType } from '../types'

const endpointSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true,
        enum: enumConvert(EMethodType)
    },
    description: {
        type: String,
        maxlength: 10000
    },
    parameters: [
        {
            key: {
                type: String,
                required: true
            },
            exampleValue: {
                type: String
            },
            description: {
                type: String
            }
        }
    ],
    authorization: {
        type: String,
        enum: enumConvert(EAuthorizationType)
    },
    headers: [
        {
            key: {
                type: String
            },
            exampleValue: {
                type: String,
                required: true
            },
            description: {
                type: String
            }
        }
    ],
    responses: [
        {
            type: Types.ObjectId,
            ref: "response"
        }
    ],
    mimeType: {
        type: String,
        enum: enumConvert(EMimeType),
        required: true,
    },
    "application/json": {
        type: Object
    },
    "multipart/form-data": {
        type: Object,
    },
    createdBy: {
        type: Types.ObjectId,
        ref: 'user',
        required: true
    }
}, {
    strict: true,
    timestamps: true
})

const EndpointModel = model<IEndpointModel>("endpoint", endpointSchema)

export default EndpointModel