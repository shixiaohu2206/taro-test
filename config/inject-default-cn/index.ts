/**
 * 优先获取缓存的appData进行渲染
 * @param page
 * @returns
 */

const getReplaceText = (page: string) => {
  return `
          let stashRootCN = [];
          
          try {
            let storageData = wx.getStorageSync('HOME_STASH_ROOT_CN');
            if (storageData && storageData.data) {
                stashRootCN = storageData.data
             }
             console.log('stashRootCN', stashRootCN)
           } catch (error) {
            console.warn('stashRoot getStorageSync error: ', error);
           };
          var inst = Page(createPageConfig(component, '${page}', {root:{cn: stashRootCN || []}}, config || {}))
          `;
};

module.exports = (ctx, options) => {
  const pagesConfig = options?.pages;

  if (pagesConfig?.length > 0) {
    ctx.modifyWebpackChain(({ chain }) => {
      chain.plugin("miniPlugin").tap((args) => {
        const loaderMeta = args[0].loaderMeta;
        args[0].loaderMeta = {
          ...loaderMeta,
          modifyInstantiate: (instantiatePage) => {
            let finallyText = instantiatePage;

            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            pagesConfig?.forEach((page: string) => {
              if (instantiatePage.includes(page)) {
                finallyText = getReplaceText(page);
              }
            });
            return finallyText;
          },
        };
        return args;
      });
    });
  }
};
