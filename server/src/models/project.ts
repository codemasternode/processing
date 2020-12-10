import { Schema, model, Types } from 'mongoose'
import { IProjectModel } from '../types'

const projectSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        maxlength: 500
    },
    logo: {
        type: String
    },
    users: [
        {
            type: Types.ObjectId,
            ref: "user"
        }
    ],
    endpoints: [
        {
            type: Types.ObjectId,
            ref: "endpoint"
        }
    ],
}, {
    strict: true,
    timestamps: true
})

const ProjectModel = model<IProjectModel>("project", projectSchema)

export default ProjectModel