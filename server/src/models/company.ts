import { Schema, model, Types } from 'mongoose'
import { ICompanyModel } from '../types'

function validateEmail(email: string): boolean {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return emailRegex.test(email)
}

const companySchema: Schema = new Schema({
    companyName: {
        type: String,
        required: [true, "Company Name is required"],
        minlength: 3,
        maxlength: 50,
        unique: true,
        index: true
    },
    description: {
        type: String,
        maxlength: 10000
    },
    companyAdminEmail: {
        type: String,
        required: [true, "Email is required"],
        validate: [validateEmail, "Please fill a valid email address"],
        unique: true
    },
    maxNumberOfUser: {
        type: Number,
        min: 1,
        max: 30,
        required: true,
        default: 1
    },
    maxNumberOfProjects: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
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
    projects: [
        {
            type: Types.ObjectId,
            ref: 'project'
        }
    ],
}, {
    strict: true,
    timestamps: true
})

const CompanyModel = model<ICompanyModel>("company", companySchema)

export default CompanyModel