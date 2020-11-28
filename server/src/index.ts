import express from 'express';
import config from './config'

const app = express();

app.set('env', config.app.env);
app.listen(config.node.PORT, () => {
    console.log(`Server is listening on port ${config.node.PORT}`)
});