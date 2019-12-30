"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const githubSearchSchema = new mongoose_1.Schema({
    repositoryName: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});
githubSearchSchema.statics.findByUserId = async (userId) => {
    const searches = await GithubSearch.find({ userId });
    if (!searches) {
        throw new Error('User searches are not available! ');
    }
    return searches;
};
const GithubSearch = mongoose_1.model('GithubSearch', githubSearchSchema);
exports.GithubSearch = GithubSearch;
//# sourceMappingURL=githubSearch.js.map