// 一个页面对应一个js，这个js里要依赖别的模块
require(['./config'], () => {
    // 引入config以后就有短名称了
    require(['header', 'footer'], (header) => {
      // 写首页逻辑
      class Index {
        constructor () {
  
        }
  
        swiper () {
          // 轮播图方法
        }
  
        hot () {
          // 热卖商品
        }
  
      }
  
      new Index()
  
    })
  })