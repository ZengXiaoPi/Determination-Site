import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '方便快捷',
    description: (
      <>
        本站所有同人作品均采用直链方式提供下载，简单快捷。
        相对比提供的某某网盘，本站链接能做到满速下载。
      </>
    ),
  },
  {
    title: '不盈利，不占有',
    description: (
      <>
        本站全部页面的内容使用CC0 1.0公共领域贡献协议。
        这也代表我们会将所有的内容贡献给社区。
      </>
    ),
  },
  {
    title: '社区支持',
    description: (
      <>
        让我们感谢社区作者制作的同人游戏，感谢他们的付出。
        同时感谢对本项目赞助的所有人。
      </>
    ),
  },
];

function Feature({title, description}) {
    return (
      <div className={clsx('col col--4')}>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  export default function HomepageFeatures() {
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    );
  }
