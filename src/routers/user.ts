import * as express from 'express';
import { User } from '../models/user';
import { auth } from '../middleware/auth';

const router = express.Router()


//create user- post
router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })

    } catch (e) {
        res.status(400).send(e)
    }
})

//read user- get 
router.get('/users/me', auth, async (req:any,res) => {res.send(req.user)})



//update user- patch




//delete user- delete 





//login- post





// logout- post








export { router as userRouter} ;

