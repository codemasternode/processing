import { Document } from 'mongoose'

interface IEndpoint extends Document {

}

interface IEndpointModel extends IEndpoint { }

export { IEndpoint, IEndpointModel }