import Link from 'next/link';
import Layout from '../components/Layout';

const AboutPage = () => (
  <Layout>
    <h1>About</h1>
    <p>This is the about page</p>
    <h3>Privacy Policy</h3>
    <a>
      We collect zero personal data. There's not even analytics on this website. There's no database for this website.
      It's statically generated using Vercel and will eventually stop being hosted.
    </a>
    <p>
      <Link href='/'>
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
