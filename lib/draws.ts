import { ExifImage } from 'exif';
import Exif from 'exif';
import fs from 'fs';
import path from 'path';
import getAllFiles from './getAllFiles';
import _ from 'lodash';

export default async function getDrawsData() {
  const photoFolder = path.resolve('./public/draws');
  const photos = await getAllFiles(photoFolder);

  return Promise.all(photos.map(async photo => {
    return {
      url: photo.replace(path.resolve('./public/'), '')
    }
  }));
}
