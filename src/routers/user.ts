import * as express from 'express';
import { User } from '../models/user';
import { auth } from '../middleware/auth';

const router = express.Router()


//create user(signup)- post
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
router.get('/users/me', auth, async (req: any, res) => { res.send(req.user) })



//update user- patch
router.patch('/users/me', auth, async (req: any, res) => {
    const updates = Object.keys(req.body)
    const userFields = ['firstName', 'lastName', 'userName', 'password']
    const isUpdateValid = updates.every((update) => userFields.includes(update))
    if (!isUpdateValid) {
        return res.status(400).send({ error: 'not allowed updates' })
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)

    } catch (e) {
        res.status(400).send(e)

    }
})


//delete user- delete 
router.delete('/users/me', auth, async (req: any, res) => {
    try {
        await req.user.remove()
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})


//login- post
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.schema.statics.findByCredentials(req.body.userName, req.body.password)
        console.log(user)
        const token = await user.generateAuthToken()
        console.log(token)
        res.status(200).send({ user, token })
    } catch (e) {
        res.status(400).send({ error: e.message })
    }
})

// logout- post
router.post('/users/logout', auth, async (req: any, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token: any) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})



export { router as userRouter };

