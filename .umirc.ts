import { defineConfig } from 'umi';

const outputPath = 'dist/';

const env = process.env.NODE_ENV;
const path = env === 'development' ? 'http://127.0.0.1:8000/' : `/${outputPath}`;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  outputPath: outputPath,
  publicPath: path,
  // 开启 antd
  antd: {
    dark: true,
    compact: true,
  },
  // 开启 antd pro 布局
  layout: {
    name: '',
    // logo: ''  
  },
  // 开启按需加载
  // dynamicImport: {},
  // 开启国际化
  locale: {
    default: 'zh-CN',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  // 配置路由
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  // 开启快速刷新
  fastRefresh: {},
  // 开启服务端渲染 ssr，umi dev 即 SSR 预览
  ssr: {},
  // 开启预渲染功能，在 umi build 构建时会编译出渲染后的 HTML
  // exportStatic: {},
  // 
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    // 设置 alias
    // memo.resolve.alias.set('foo', '/tmp/a/b/foo');

    // // 删除 umi 内置插件
    // memo.plugins.delete('progress');
    // memo.plugins.delete('friendly-error');
    // memo.plugins.delete('copy');
  },
});
