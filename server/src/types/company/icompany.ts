import { Document } from 'mongoose'
import { ICompanyUser, ICompanyProject } from '.'

interface ICompany extends Document {
    companyName: string;
    companyAdminEmail: string;
    maxNumberOfUser: number;
    maxNumberOfProjects: number;
    name: string;
    lastname: string;
    logo: string;
    users: ICompanyUser[],
    projects: ICompanyProject[],
}

interface ICompanyModel extends ICompany { }

export { ICompany, ICompanyModel }