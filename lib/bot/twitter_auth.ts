import { OAuth } from "oauth";

function preconditionCheck() {
  if (!process.env.TWITTER_API_KEY || !process.env.TWITTER_API_SECRET_KEY) {
    console.error(
      "Please set the required env vars TWITTER_API_KEY, TWITTER_API_SECRET_KEY."
    );
    return process.exit(1);
  }
}

async function authTwitterBot(username = "ags_nft_mintbot") {
  preconditionCheck();
  var oauth = new OAuth(
    "https://api.twitter.com/oauth/request_token",
    "https://api.twitter.com/oauth/access_token",
    process.env.TWITTER_CONSUMER_KEY,
    process.env.TWITTER_CONSUMER_SECRET,
    "1.0A",
    null,
    "HMAC-SHA1"
  );
  return oauth;
}

export default authTwitterBot;
