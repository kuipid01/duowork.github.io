import {optimiseImages} from "./lib/optimiseImgs.js"

// Optimise images after Gatsby bootstrap process
exports.onPostBootstrap = async () => {
    await optimiseImages();
}