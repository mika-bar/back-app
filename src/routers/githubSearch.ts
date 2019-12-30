import * as express from 'express';
import { auth } from '../middleware/auth';
import { GithubSearch } from '../models/githubSearch';

const router = express.Router();

//save user repository search name
router.post('/githubSearches', auth, async (req: any, res) => {
    const githubSearch = new GithubSearch({ repositoryName: req.body.repositoryName, userId: req.user._id });
    try {
        await githubSearch.save();
        res.status(200).send(githubSearch);

    } catch (e) {
        res.status(400).send(e);
    }
})

//show user history
router.get('/githubSearches/me', auth, async (req: any, res) => {
    try {
        const searches = await GithubSearch.schema.statics.findByUserId(req.user._id);
        res.status(200).send(searches);

    } catch (e) {
        res.send(e)
    }
})

export { router as githubSearchRouter };
