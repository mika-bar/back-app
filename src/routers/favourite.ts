import * as express from 'express';
import { auth } from '../middleware/auth';
import { Favourite } from '../models/favourite';
import { Query } from 'mongoose';

const router = express.Router();

//save user's favourite pokemon
router.post('/favourites', auth, async(req:any, res) => {
    const favourite = new Favourite ({pokemonName: req.body.name, userId: req.user._id});
    try{
        await favourite.save();
        res.status(200).send(favourite);

    } catch (e){
        res.status(400).send(e);
    }
})

//show user's favourites
router.get('/favourites', auth, async (req:any, res)=>{
    try{
        const favourites= await Favourite.schema.statics.findByUserId(req.user._id);
        res.status(200).send(favourites);

    } catch(e) {
        res.send(e);
    }
})

//get user's specific favourite
router.get('/favourites/search' ,auth, async (req, res) => {
    try{
        // console.log("name:", req.query.name)
        const favourite = await Favourite.findOne({ pokemonName: req.query.name });
        
        if(!favourite){
            throw new Error('no such favourite!');
        }
        res.status(200).send(favourite);

    } catch(e){
        res.status(404).send({error: e.message});
    }

})

// delete one of the user's favourites
router.delete('/favourites', auth, async (req:any,res)=>{
    try{
        const favourite = await Favourite.findOne({pokemonName:req.query.name});
        await favourite.remove();
        res.send(favourite);
    } catch(e){
        res.status(500).send();
    }
})


export { router as favouriteRouter };

