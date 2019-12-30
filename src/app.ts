 import * as express from 'express';
import './db/mongoose';
import { userRouter } from './routers/user';
import { githubSearchRouter } from './routers/githubSearch';
import { favouriteRouter } from './routers/favourite';
import * as cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())
app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(userRouter)
app.use(githubSearchRouter)
app.use(favouriteRouter)

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});