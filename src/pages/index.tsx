// @ts-nocheck
import { IGetInitialProps, Helmet, Link } from 'umi';
import classnames from 'classnames';
import { Button } from 'antd';
import styles from './index.less';

const Home = (props) => {
  const { data } = props;

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>首页</title>
      </Helmet>
      <main>
        <h1 className={styles.title}>Home Page {data?.title}</h1>
        <Link className={classnames('font-sans text-blue-500')} to={'/page1'}>
          Page 1
        </Link>
        <Button className={classnames('hover:bg-red-400')} type="primary">
          按钮
        </Button>
        <div className={classnames('')}></div>
      </main>
    </>
  );
};

/**
 * 服务端渲染
 * 页面级数据获取
 * 每个页面可能有单独的数据预获取逻辑，这里我们会获取页面组件上的 getInitialProps 静态方法，执行后将结果注入到该页面组件的 props 中。
 * getInitialProps 中有几个固定参数：
 *     match： 与客户端页面 props 中的 match 保持一致，有当前路由的相关数据。
 *     isServer：是否为服务端在执行该方法。
 *     route：当前路由对象
 *     history：history 对象
 */
Home.getInitialProps = (async (ctx) => {
  if (ctx.isServer) {
    console.log('服务端执行 getInitialProps');
  }

  return Promise.resolve({
    data: {
      title: 'Hello World sun',
    },
  });
}) as IGetInitialProps;

export default Home;
