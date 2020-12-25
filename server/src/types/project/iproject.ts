import { Document, Types } from 'mongoose'

interface IProject extends Document {
    name: string;
    description?: string;
    logo?: string;
    users: Types.ObjectId[];
    endpoints: Types.ObjectId[]
}

interface IProjectModel extends IProject { }

export { IProject, IProjectModel }