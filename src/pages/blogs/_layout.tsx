import React from 'react';
import { IRouteComponentProps } from 'umi';

const UsersLayout: React.FC<IRouteComponentProps> = (props) => {
  
  return (
    <div>
      <h1>Blogs Header</h1>
      {props.children}
    </div>
  );
}

export default UsersLayout;
