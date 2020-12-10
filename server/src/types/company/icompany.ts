import { Document } from 'mongoose'

interface ICompany extends Document {
    companyName: string;
    companyAdminEmail: string;
    maxNumberOfUser: number;
    maxNumberOfProjects: number;
    name: string;
    lastname: string;
    logo: string;
    users: string[],
    projects: string[],
}

interface ICompanyModel extends ICompany { }

export { ICompany, ICompanyModel }