import Image from "next/image";
import { ThenArg } from "..";
import Layout from "../../components/layout";
import getPhotosData from "../../lib/photos";

export async function getStaticProps() {
  const allPhotosData = await getPhotosData();

  return {
    props: {
      allPhotosData,
    },
  };
}

export default function Post(
  props: ThenArg<ReturnType<typeof getStaticProps>>["props"],
) {
  const equipment: Record<string, {
    brand: string,
    model: string
  }[]> = {
    '本体': [
      {
        brand: 'Sony',
        model: 'A6000'
      },
      {
        brand: 'Apple',
        model: 'iPhone 12 pro'
      }
    ],
    '镜头': [
      {
        brand: 'Sigma',
        model: '30 1.4'
      }
    ]
  };

  type TProjectType = keyof typeof equipment;

  return (
    <main>
      <section>
        <h3>设备</h3>
        {Object.keys(equipment).map((key) => {
          const list = equipment[key as TProjectType];
          return (
            <div key={key}>
              <h4>{key}</h4>
              <ul>
                {list.map(item => <li key={item.model}>{item.brand} {item.model}</li>)}
              </ul>
            </div>
          )
        })}
      </section>
      <ul>
        {props.allPhotosData.map((photo) => {
          const { url, exifData } = photo;
          const { image, exif } = exifData;
          const { Make, Model, ModifyDate } = image;
          const { FNumber, ISO, LensModel, ShutterSpeedValue, ExifImageWidth, ExifImageHeight } = exif;
          return (
            <li key={photo.url}>
              <Image src={photo.url} alt="s" width={ExifImageWidth} height={ExifImageHeight} />
              <div className="meta">
                <p>
                  {Make} {Model} {LensModel} {ModifyDate}
                </p>
                <p>
                  {FNumber} {ShutterSpeedValue && `1/${Math.ceil(2 ** ShutterSpeedValue)}`} {ISO}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
  // return <pre>{JSON.stringify(props, null, 2)}</pre>;
}
