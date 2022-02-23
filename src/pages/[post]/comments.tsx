import React from 'react';
import { IRouteComponentProps } from 'umi';

const PostComments: React.FC<IRouteComponentProps> = (props) => {
  return (
    <div>
      <h1>PostComments</h1>
      {/* @ts-ignore */}
      <h3>{props.match.params.post}</h3>
    </div>
  );
}

export default PostComments;
