// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { IgApiClient } from 'instagram-private-api';

const { IG_USERNAME, IG_PASSWORD } = process.env;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const ig = new IgApiClient();
  ig.state.generateDevice(IG_USERNAME as string);
  console.log('process.env.NODE_ENV', process.env.NODE_ENV, process.env.IG_PROXY);
  if (process.env.NODE_ENV === 'development') {
    ig.state.proxyUrl = process.env.IG_PROXY as string;
  }
  await ig.simulate.preLoginFlow();
  const loggedInUser = await ig.account.login(IG_USERNAME as string, IG_PASSWORD as string);
  // The same as preLoginFlow()
  // Optionally wrap it to process.nextTick so we dont need to wait ending of this bunch of requests
  process.nextTick(async () => await ig.simulate.postLoginFlow());
  // Create UserFeed instance to get loggedInUser's posts
  const userFeed = ig.feed.user(loggedInUser.pk);
  const myPostsFirstPage = await userFeed.items();
  // All the feeds are auto-paginated, so you just need to call .items() sequentially to get next page
  // const myPostsSecondPage = await userFeed.items();

  res.status(200).json(myPostsFirstPage);
}
