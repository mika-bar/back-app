import {Schema,Document,model} from 'mongoose';
import * as jwt from 'jsonwebtoken';

interface IGithubSearch extends Document{

}

const githubSearchSchema = new Schema ({
    repositoryName: {
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    }
})

githubSearchSchema.statics.findByUserId= async (userId:string) => {
    const searches = await GithubSearch.find({userId});
    if (!searches){
        throw new Error('User searches are not available! ')
    }
    return searches;
}


const GithubSearch = model<IGithubSearch>('GithubSearch',githubSearchSchema);

export { GithubSearch };