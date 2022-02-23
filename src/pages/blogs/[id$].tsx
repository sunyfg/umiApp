// @ts-nocheck
import React from 'react';
import { IRouteComponentProps, Link } from 'umi';

const Blogs: React.FC<IRouteComponentProps> = (props) => {
  return (
    <div>
      <h1>Page Blogs</h1>
      <h3>当前博客ID: {props.match.params.id}</h3>
      <Link to={`/blogs/${Math.random().toFixed(3) * 1000}`}>下一个</Link>
    </div>
  );
}

export default Blogs;
