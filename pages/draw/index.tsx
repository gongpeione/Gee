import Image from 'next/image';
// import Layout from '../../components/layout';
import getDrawsData from '../../lib/draws';

export async function getStaticProps() {
  const allPicData = await getDrawsData();

  return {
    props: {
      allPicData,
    },
  };
}

export default function Post(
  props: Awaited<ReturnType<typeof getStaticProps>>["props"],
) {
  return <div>
    <ul>
      {props.allPicData.reverse().map(pic => (<li key={pic.url}><Image src={pic.url} alt="" width={200} height={200}></Image></li>))}
    </ul>
  </div>;
}
