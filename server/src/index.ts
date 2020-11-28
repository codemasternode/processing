import express from 'express';
import loaders from './loaders'
import config from './config'

(async () => {
    const app = await loaders()

    app.listen(config.node.PORT, () => {
        console.log(`Server is listening on port ${config.node.PORT}`)
    });
})()


