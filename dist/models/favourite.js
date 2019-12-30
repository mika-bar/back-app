"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const favourite = new mongoose_1.Schema({
    pokemonName: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});
favourite.statics.findByUserId = async (userId) => {
    const favourites = await Favourite.find({ userId });
    if (!favourites) {
        throw new Error("User favourites are not available! ");
    }
    return favourites;
};
const Favourite = mongoose_1.model('Favourite', favourite);
exports.Favourite = Favourite;
//# sourceMappingURL=favourite.js.map