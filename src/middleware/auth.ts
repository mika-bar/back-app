import * as jwt from 'jsonwebtoken';
import { User } from '../models/user';


const auth = async (req:any, res:any, next:any) => {
    try {
        const token = req.header('Authorization').replace('Bearer', '')
        console.log(token)
        const decoded= jwt.verify(token, 'backendapp')
        console.log("gfdsssgds")

        console.log((<any>decoded)._id)
        const user = await User.findOne({ _id: (<any>decoded)._id, 'tokens.token': token })
        // const user = await User.findOne({'tokens.token': token })
       

        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()

    } catch(e){
        // res.status(401).send({error: 'not authenticated!'})
        res.status(401).send({error: e.message})
    }
  

}

export { auth } ; 

