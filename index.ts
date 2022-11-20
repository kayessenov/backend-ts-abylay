import express, { Request, Response, NextFunction} from 'express'

const app = express();
const port = 3005;

app.listen(port, () => {
    console.log(`Server started http://localhost:${port}`)
})

