import Link from 'next/link'
import Layout from '../components/Layout'

const imgStyle = {
  width: 200,
}

const Stella = () => (
  <Layout>
    <h1>Dog photos</h1>
    <p>These are photos of Stella</p>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <img style={imgStyle} src="img/stella1.png" />
      <img style={imgStyle} src="img/stella2.png" />
      <img style={imgStyle} src="img/stella3.png" />
      <img style={imgStyle} src="img/stella4.png" />
    </div>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default Stella
