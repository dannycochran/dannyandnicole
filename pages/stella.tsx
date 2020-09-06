import { PhotosByUsername } from 'instagram-web-api';
import { useState, useEffect, CSSProperties } from 'react';
import { CircularProgress } from '@material-ui/core';
import Layout from '../components/Layout';

const galleryStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
};

const imgStyle = {
  width: 260,
  height: 260,
  margin: 10,
};

const pageSize = 20;

const Stella = () => {
  const [data, setData] = useState<PhotosByUsername>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(true);
  const [afterCursor, setAfterCursor] = useState(1);
  const photos = data?.user?.edge_owner_to_timeline_media?.edges ?? [];

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/photos?first=${pageSize}&afterCursor=${afterCursor}`);
        const { data: photosData, error: photosError } = (await response.json()) as {
          data?: PhotosByUsername;
          error?: string;
        };
        if (photosError) {
          setError(photosError);
        } else {
          setData(photosData);
          setError(undefined);
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    })();
  }, [afterCursor]);

  return (
    <Layout>
      <h1>Dog photos</h1>
      <p>These are photos of Stella</p>
      <div style={galleryStyle}>
        {(() => {
          if (loading) {
            return <CircularProgress className='loader' />;
          }

          if (error) {
            return <p>{error}</p>;
          }

          return photos.map((edge) => {
            const { node } = edge;

            if (node.video_url) {
              return (
                <video controls style={imgStyle} key={node.id}>
                  <source src={node.video_url} />
                </video>
              );
            }
            return <img style={imgStyle} key={node.id} src={node.thumbnail_src} />;
          });
        })()}
      </div>
    </Layout>
  );
};

export default Stella;
