import express from 'express';
import { User } from '../models/user';

// const router = new express.Router() 
// check bug: won't approve the "new" keyword!!
const router = express.Router()

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        // const token = await user.generateAuthToken()
        // res.status(201).send({ user, token })
        res.status(201).send({ user})

    } catch (e) {
        res.status(400).send(e)
    }
})


export { router as userRouter} ;

