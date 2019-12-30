"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const auth_1 = require("../middleware/auth");
const githubSearch_1 = require("../models/githubSearch");
const router = express.Router();
exports.githubSearchRouter = router;
//save user repository search name
router.post('/githubSearches', auth_1.auth, async (req, res) => {
    const githubSearch = new githubSearch_1.GithubSearch({ repositoryName: req.body.repositoryName, userId: req.user._id });
    try {
        await githubSearch.save();
        res.status(200).send(githubSearch);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
//show user history
router.get('/githubSearches/me', auth_1.auth, async (req, res) => {
    try {
        const searches = await githubSearch_1.GithubSearch.schema.statics.findByUserId(req.user._id);
        res.status(200).send(searches);
    }
    catch (e) {
        res.send(e);
    }
});
//# sourceMappingURL=githubSearch.js.map