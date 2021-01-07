import { Schema, model, Types } from 'mongoose'
import { enumConvert } from '../services'
import { EMimeType, IResponseModel } from '../types'

const responseSchema: Schema = new Schema({
    status: {
        type: Number,
        enum: [
            100, 101, 102,
            200, 201, 202, 203, 204, 205, 206, 207, 208, 226,
            300, 301, 302, 303, 304, 305, 306, 307, 308, 400,
            401, 402, 403, 404, 405, 406, 407, 408, 409, 410,
            411, 412, 413, 414, 415, 416, 417, 418, 419, 420,
            421, 422, 423, 424, 426, 428, 429, 431, 444, 451,
            499,
        ]
    },
    mimeType: {
        type: String,
        enum: enumConvert(EMimeType)
    },
    "application/json": {
        type: Object
    }
}, {
    strict: true,
    timestamps: true
})

const ResponseModel = model<IResponseModel>("response", responseSchema)

export default ResponseModel