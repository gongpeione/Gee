import { ExifImage } from 'exif';
import Exif from 'exif';
import fs from 'fs';
import path from 'path';
import getAllFiles from './getAllFiles';
import _ from 'lodash';

export default async function getPhotosData() {
  const photoFolder = path.resolve('./public/photos');
  const photos = await getAllFiles(photoFolder);

  return Promise.all(photos.map(async photo => {
    const exif = await new Promise<Exif.ExifData>(resolve => {
      new ExifImage( photo, function (error, exifData) {
        if (error) {
          console.log('Exif Error: ', error);
        } else {
          resolve(exifData);
        }
      });
    });

    return {
      url: photo.replace(path.resolve('./public/'), ''),
      exifData: {
        image: exif.image,
        exif: _.omit(exif.exif, ['ExifVersion', 'FileSource', 'SceneType']),
        // gps: exif.gps
      }
    }
  }));
}
