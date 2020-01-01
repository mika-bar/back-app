import {Schema,Document,model} from 'mongoose';

interface IFavourite extends Document {
    pokemonName:string;
    userId:string;

}

const favourite = new Schema ({
    pokemonName: {
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    }
})

favourite.statics.findByUserId = async (userId:string) => {
    const favourites= await Favourite.find({userId});
    if(!favourites){
        throw new Error("User favourites are not available! ")
    }
    return favourites;
}

const Favourite = model<IFavourite>('Favourite', favourite);

export { Favourite };