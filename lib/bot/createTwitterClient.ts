import { TwitterApi } from "twitter-api-v2";

function createTwitterClient() {
    return new TwitterApi(process.env.TWITTER_API_BEARER_TOKEN);
}

export default createTwitterClient;