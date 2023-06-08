import {optimiseImages} from "./src/utils/optimiseImgs"

// Optimise images after Gatsby bootstrap process is done
exports.onPostBootstrap = async () => {
    await optimiseImages();
}