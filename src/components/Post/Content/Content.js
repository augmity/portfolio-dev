// @flow strict
import React from 'react';
import styles from './Content.module.scss';

type Props = {
  body: string,
  title: string,
  tags: string[],
};

const Content = ({ body, title, tags }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>

    { tags && 
      <div style={{ fontSize: 14, color: '#aaa', textAlign: 'center', marginBottom: 40 }}>
        [{tags.map((tag, idx) => <span style={{ marginRight: 3, marginLeft: 3 }}>{tag}{(idx < tags.length-1) && <>,</>}</span>)}]
      </div>
    }

    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
