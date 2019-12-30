"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const auth_1 = require("../middleware/auth");
const favourite_1 = require("../models/favourite");
const router = express.Router();
exports.favouriteRouter = router;
//save user's favourite pokemon
router.post('/favourites', auth_1.auth, async (req, res) => {
    const favourite = new favourite_1.Favourite({ pokemonName: req.body.pokemonName, userId: req.user._id });
    try {
        await favourite.save();
        res.status(200).send(favourite);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
//show user's favourites
router.get('/favourites', auth_1.auth, async (req, res) => {
    try {
        const favourites = await favourite_1.Favourite.schema.statics.findByUserId(req.user._id);
        res.status(200).send(favourites);
    }
    catch (e) {
        res.send(e);
    }
});
//get user's specific favourite
router.get('/favourites/search', auth_1.auth, async (req, res) => {
    try {
        console.log("name:", req.query.name);
        const favourite = await favourite_1.Favourite.findOne({ pokemonName: req.query.name });
        if (!favourite) {
            throw new Error('no such favourite!');
        }
        res.status(200).send(favourite);
    }
    catch (e) {
        res.status(404).send({ error: e.message });
    }
});
// delete one of the user's favourites
router.delete('/favourites', auth_1.auth, async (req, res) => {
    try {
        const favourite = await favourite_1.Favourite.findOne({ pokemonName: req.Query.params.name });
        await favourite.remove();
        res.send(favourite);
    }
    catch (e) {
        res.status(500).send();
    }
});
//# sourceMappingURL=favourite.js.map