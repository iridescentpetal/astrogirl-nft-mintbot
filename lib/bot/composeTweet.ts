import { TwitterApi } from "twitter-api-v2";

async function composeTweet(twitterClient: TwitterApi, tokenId: string, mediaId: string) {
    await twitterClient.v2.tweet({
        text: 'Hello world! Testing testing.',
        media: {
            media_ids: [mediaId],
        },
    });
}

export default composeTweet;