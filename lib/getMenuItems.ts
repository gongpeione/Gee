import * as path from 'path';
import * as fs from 'fs';
import type { TMenuItem } from '../pages/index';

export default async function getMenuItems (menuItems: TMenuItem) {
    return menuItems.map((item) => {
        const iconPath = path.join('./public/', item.icon);
        console.log({ iconPath });
        const iconContent = fs.readFileSync(iconPath, { encoding: 'utf-8' });

        return {
          ...item,
          iconString: iconContent
        }
    });
}
