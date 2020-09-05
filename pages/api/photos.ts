import Instagram from 'instagram-web-api';
import { NextApiRequest, NextApiResponse } from 'next';

const { INSTAGRAM_LOGIN, INSTAGRAM_PASSWORD } = process.env;
const client = new Instagram({
  username: INSTAGRAM_LOGIN!,
  password: INSTAGRAM_PASSWORD!,
});

export const getPhotos = async (after?: string) => {
  await client.login();

  return client.getPhotosByUsername({
    username: 'stellar.pupper',
    first: 10,
    after: after as string,
  });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { after } = req.query;
  const data = await getPhotos(after as string);
  res.json({ data });
};

export default handler;
