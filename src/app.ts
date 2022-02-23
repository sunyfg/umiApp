// @ts-nocheck

// 服务端渲染扩展 ctx 参数
// 在自身应用中：
export const ssr = {
    modifyGetInitialPropsCtx: async (ctx) => {
      ctx.title = 'params title';
      return ctx;
    }
}