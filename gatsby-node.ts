import {optimiseImages} from "./lib/optimiseImgs"

// Optimise images after Gatsby bootstrap process
exports.onPostBootstrap = async () => {
    await optimiseImages();
}