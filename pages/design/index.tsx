import Image from 'next/image';
import Layout from '../../components/layout';

export default function Design() {
  const designList: Record<string, {
    img: string;
    title: string
  }[]> = {
    'Logo': [{
      title: 'Logos',
      img: '/design/logo.png'
    }],
    'Webpage': [{
      title: 'Geeku',
      img: '/design/geeku.png',
    }, {
      title: 'Geeku Gallery',
      img: '/design/geekuGallery.png',
    }, {
      title: 'HZFE website version 2',
      img: '/design/hzfe-2.png',
    }, {
      title: 'HZFE website',
      img: '/design/hzfe.png',
    }, {
      title: 'PureBlog',
      img: '/design/pureBlog.png',
    }]
  };

  type TDesignType = keyof typeof designList;
  return <div>
    {Object.keys(designList).map((key) => {
      const list = designList[key as TDesignType];
      return (
        <div key={key}>
          <h4>{key}</h4>
          <ul>
            {list.map(item => <li key={item.img}><Image src={item.img} alt={item.title} width={500} height={300} /></li>)}
          </ul>
        </div>
      )
    })}
  </div>;
}
