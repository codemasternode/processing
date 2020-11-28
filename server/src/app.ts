import express from 'express';
import 'dotenv/config';

const app: express.Application = express();
const PORT: string | undefined = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT || '5000', () => {
    console.log(`Server is running on port ${PORT || 5000}`);
});

export default app;
