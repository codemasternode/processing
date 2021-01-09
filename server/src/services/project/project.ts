import CompanyModel from '../../models/company'

export class ProjectService {
    async getProjectsByCompany(companyEmail: string) {
        const projects = await CompanyModel.aggregate([
            {
                $match: {
                    companyEmail
                }
            },
            {
                $project: {
                    projects: 1
                }
            },
            {
                $unwind: "$projects"
            },
            {
                $lookup: {
                    from: "project",
                    localField: "_id",
                    foreignField: "projects._id",
                    as: "project"
                }
            }
        ])

        return projects
    }
}