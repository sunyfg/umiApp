// @ts-nocheck
import React from 'react';
import { IRouteComponentProps, Helmet } from 'umi';

const Users: React.FC<IRouteComponentProps> = (props) => {
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>用户中心</title>
            </Helmet>
            <div>
                <h1>Page Users</h1>
                <h3>{props.match.params.id}</h3>
            </div>
        </>
    );
}


export default Users;
