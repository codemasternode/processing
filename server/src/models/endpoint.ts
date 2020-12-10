import { Schema, model, Types } from 'mongoose'
import { enumConvert } from '../services'
import { IEndpointModel, EMethodType } from '../types'

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
    createdBy: {
        type: Types.ObjectId,
        ref: 'user'
    }
}, {
    strict: true,
    timestamps: true
})

const EndpointModel = model<IEndpointModel>("endpoint", endpointSchema)

export default EndpointModel