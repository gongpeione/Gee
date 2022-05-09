import * as fs from 'fs-extra';
import * as path from 'path';

/**
 * 遍历目录下所有文件
 * @param dir
 * @param fileList
 * @returns
 */
export default function getAllFiles(dir: string) {
  const files = fs.readdirSync(dir);
  const fileList = [] as string[];

  for (const file of files) {
    if (['.git'].includes(file)) {
      continue;
    }

    const stat = fs.statSync(path.join(dir, file));

    if (stat.isDirectory()) {
      const list = getAllFiles(path.join(dir, file));
      fileList.push(...list);
    } else {
      fileList.push(path.join(dir, file));
    }
  }

  return fileList;
}
