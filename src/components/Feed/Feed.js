// @flow strict
import React from 'react';
import moment from 'moment';
import { Link, withPrefix } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
          <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
          </time>
          <span className={styles['feed__item-meta-divider']} />
          <span className={styles['feed__item-meta-category']}>
            <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
          </span>
        </div>
        <h2 className={styles['feed__item-title']}>
          <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>

        { edge.node.frontmatter.tags && 
          <div style={{ fontSize: 14, color: '#aaa' }}>
            [{edge.node.frontmatter.tags.map((tag, idx) => <span style={{ marginRight: 3, marginLeft: 3 }}>{tag}{(idx < edge.node.frontmatter.tags.length-1) && <>,</>}</span>)}]
          </div>
        }

        <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>

        { edge.node.frontmatter.socialImage &&
          <img
            src={withPrefix(edge.node.frontmatter.socialImage)}
            className={styles['feed__item-social-image']}
          />
        }

        {/* <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>Read</Link> */}
      </div>
    ))}
  </div>
);

export default Feed;
