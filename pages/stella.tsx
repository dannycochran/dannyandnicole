import Link from 'next/link';
import { PhotosByUsername } from 'instagram-web-api';
import Layout from '../components/Layout';
import { getPhotos } from './api/photos';

const imgStyle = {
  width: 400,
  margin: 10,
};

interface StellaProps {
  data: PhotosByUsername;
}

const Stella = (props: StellaProps) => {
  const { data } = props;
  const photos = data?.user?.edge_owner_to_timeline_media?.edges ?? [];

  return (
    <Layout>
      <h1>Dog photos</h1>
      <p>These are photos of Stella</p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        {photos.map((photo) => {
          const { node } = photo;

          if (node.video_url) {
            return (
              <video controls style={imgStyle}>
                <source src={node.video_url} />
              </video>
            );
          }
          return <img style={imgStyle} key={node.id} src={node.thumbnail_src} />;
        })}
      </div>
      <p>
        <Link href='/'>
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export default Stella;

export const getServerSideProps = async (): Promise<{ props: StellaProps }> => {
  const data = await getPhotos();
  return {
    props: {
      data,
    },
  };
};
