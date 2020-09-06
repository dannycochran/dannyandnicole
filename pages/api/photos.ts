import Instagram, { PhotosByUsername } from 'instagram-web-api';
import { NextApiRequest, NextApiResponse } from 'next';

const { INSTAGRAM_LOGIN, INSTAGRAM_PASSWORD } = process.env;
const client = new Instagram({
  username: INSTAGRAM_LOGIN!,
  password: INSTAGRAM_PASSWORD!,
});

export interface NetworkError {
  message: string;
  statusCode: number;
}

export const getPhotos = async (first: number = 10, after?: string): Promise<PhotosByUsername | NetworkError> => {
  try {
    await client.login();

    return client.getPhotosByUsername({
      username: 'stellar.pupper',
      first,
      after,
    });
  } catch (err) {
    /* eslint-disable-next-line no-console */
    console.error('Failed to get photos:', err.message);
    return err;
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { first, after } = req.query;
  const response = await getPhotos(Number(first as string), after as string);
  if (response instanceof Error) {
    res.setHeader('Cache-Control', 's-maxage=0, stale-while-revalidate');
    res.statusCode = (response as NetworkError).statusCode;
    res.json({ error: response.message });
    return;
  }
  res.setHeader('Cache-Control', 's-maxage=60000, stale-while-revalidate');
  res.json({ data: response });
};

export default handler;
