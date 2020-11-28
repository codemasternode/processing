import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

export default async ({
  app,
}: {
  app: express.Application
}): Promise<express.Application> => {
  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: false }))
  return app
}
