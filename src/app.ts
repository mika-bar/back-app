 import * as express from 'express';
import './db/mongoose';
import {userRouter} from './routers/user';


const app = express();
const port = 3000;

app.use(express.json())
app.use(userRouter)


app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});