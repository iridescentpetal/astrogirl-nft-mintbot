import { TwitterApi } from "twitter-api-v2";

function createTwitterClient() {
    return new TwitterApi(process.env.TWITTER_API_BEARER_TOKEN);
}

async function composeTweet(twitterClient: TwitterApi, tokenId: string) {
    await twitterClient.v2.tweet({
        text: 'Hello world! Testing testing.'
    });
    twitterClient.v1.uploadMedia(process.env.HOME_DIRECTORY + `/tmp/img/girl.png`);
}

async function uploadMedia(twitterClient: TwitterApi) {
    await twitterClient.v1.uploadMedia(process.env.HOME_DIRECTORY + `/tmp/img/girl.png`);
}