import { Request, Response, NextFunction } from 'express'
import { ProjectService } from '../../../services'

const projectService = new ProjectService()

export async function getProject(req: Request, res: Response, next: NextFunction) {

}