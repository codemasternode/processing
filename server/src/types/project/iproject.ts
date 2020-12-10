import { Document } from 'mongoose'

interface IProject extends Document {

}

interface IProjectModel extends IProject { }

export { IProject, IProjectModel }