import { TwitterApi } from "twitter-api-v2";

async function uploadMedia(twitterClient: TwitterApi) {
    const mediaId = await twitterClient.v1.uploadMedia(process.env.HOME_DIRECTORY + `/tmp/img/girl.png`);
    return mediaId;
}

export default uploadMedia;