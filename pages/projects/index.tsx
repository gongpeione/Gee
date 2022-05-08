import Head from 'next/head';
import { useMemo, useState } from 'react';
import Layout from '../../components/layout';
import './projects.module.css';

type TProject = {
  title: string,
  description: string,
  link: string,
  logo?: string,
  github?: string
};

const projects: Record<string, TProject[]> = {
	"Front-End": [
		{
			"title": "GMD",
			"description": "一个简单的MarkDown解析器",
			"link": "https://github.com/gongpeione/GMD",
			"logo": "logo/gmd.svg"
		},
		{
			"title": "GeeRouter",
			"description": "轻量前端路由",
			"link": "https://gee-org.github.io/GeeRouter/example",
			"logo": "logo/geerouter.svg",
			"github": "https://github.com/gongpeione/GeeRouter"
		},
		{
			"title": "RightMenu",
			"description": "简易自定义右键菜单",
			"link": "https://gongpeione.github.io/rightMenu",
			"logo": "logo/rightmenu.svg",
			"github": "https://github.com/gongpeione/rightMenu"
		},
		{
			"title": "IFE 2017",
			"description": "百度前端学院 IFE 2017",
			"link": "https://gongpeione.github.io/ife2017",
			"github": "https://gongpeione.github.io/ife2017"
		},
		{
			"title": "Oh My Canvas",
			"description": "一些 canvas 练习",
			"link": "https://gongpeione.github.io/oh-my-canvas/dist/",
			"github": "https://github.com/gongpeione/oh-my-canvas"
		},
		{
			"title": "GeeBlog",
			"description": "基于 Vue 和 Github API 的博客",
			"link": "https://code.geeku.net",
			"github": "https://github.com/gongpeione/geblog"
		},
		{
			"title": "Quick-JS-OCR",
			"description": "基于百度 OCR 的易用的在线 OCR",
			"link": "https://gongpeione.github.io/quick-js-ocr/example/",
			"github": "https://github.com/gongpeione/quick-js-ocr"
		},
		{
			"title": "Emoji Table",
			"description": "方便查阅 Emoji",
			"link": "https://gongpeione.github.io/emoji-table/index.html",
			"github": "https://github.com/gongpeione/emoji-table"
		},
		{
			"title": "WBImg2WB",
			"description": "根据微博图片地址推算上传图片的用户",
			"link": "https://gongpeione.github.io/wbimg2wb/index.html",
			"github": "https://github.com/gongpeione/wbimg2wb"
		}
	],
	"Back-End": [
		{
			"title": "IFE 2016 Spring Spider",
			"description": "百度前端学院 2016 春爬虫，包括已爬完的数据库",
			"link": "https://github.com/gongpeione/ife_2016_spring_spider"
		}
	],
	"Don't Starve Together": [
		{
			"title": "DST-Docker",
			"description": "用Docker搭建饥荒联机版服务器",
			"link": "https://github.com/gongpeione/dst-server-docker",
			"github": "https://github.com/gongpeione/dst-server-docker"
		},
		{
			"title": "HoundAttack",
			"description": "一个适用于饥荒联机版的猎狗袭击提醒Mod",
			"link": "https://github.com/gongpeione/HoundAttack",
			"github": "https://github.com/gongpeione/HoundAttack",
			"logo": "logo/houndattack.png"
		}
	]
}

export default function Post() {
  const [keyword, setKeyword] = useState('');

  const listFiltered = useMemo(() => {
    if (!keyword) {
      return projects;
    }

    type TProjectType = keyof typeof projects;
    const filtered: Record<TProjectType, TProject[]> = {} as any;
    Object.keys(projects).forEach((key) => {
      filtered[key as TProjectType] = projects[key as TProjectType].filter(item => {
        return item.title && item.title.toLowerCase().indexOf(keyword.toLowerCase()) >= 0
          || item.description && item.description.toLowerCase().indexOf(keyword.toLowerCase()) >= 0
      });
    });

    return filtered;
  }, [keyword]);

  return <div>
    <Head>
      <title>作品集</title>
    </Head>

    <header>
      <h1>作品集</h1>
    </header>

    <main>
      <div className="search">
          <div className="cover">
              <div className="icon">
                  <svg viewBox="22 22 38 37" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M44.2532456,42.7586414 L44.6273756,43.1327714 L57.6172812,56.122677 L58,56.5053958 L57.2345625,57.2708333 L56.8518437,56.8881146 L43.861938,43.8982089 L43.5204738,43.5567447 C41.3446954,45.7233241 38.3443634,47.0625 35.03125,47.0625 C28.3865741,47.0625 23,41.6759259 23,35.03125 C23,28.3865741 28.3865741,23 35.03125,23 C41.6759259,23 47.0625,28.3865741 47.0625,35.03125 C47.0625,37.9730787 46.0066559,40.6683019 44.2532456,42.7586414 Z" id="Combined-Shape" stroke="#A3AFB6" strokeWidth="2" strokeLinecap="square" fill="none"></path>
                  </svg>
              </div>
              <input type="text" id="s" placeholder="Search project" v-model="searchStr" />
          </div>
      </div>
      {Object.entries(listFiltered).map(([category, projects]) => {
        return (
          <section key={category}>
            <h2>{category}</h2>
            <ul>
              {projects.map(({ title, description, link, logo, github }) => {
                return (
                  <li onClick={() => 1} key={title}>
                    <div className="cover">
                        <div className="pic">
                          <img src="item.logo || 'geeku.svg'" alt="" />
                        </div>
                        <div className="detail">
                          <a href="item.link" target="_blank" title="item.title">
                            <h3 className="noPop">{title}</h3>
                          </a>
                          <p title="item.description">{description}</p>
                        </div>
                        <div className="github" v-if="item.github">
                          <a href="item.github" target="_blank"><img src="github.svg" alt="" className="noPop" /></a>
                        </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </section>
        )
      })}
    </main>
  </div>;
}
