// 一个页面对应一个js，这个js里要依赖别的模块
require(['./config'], () => {
    // 引入config以后就有短名称了
    require(['template','url','swiper','header', 'footer','bootstrap','rem'], (template,url,Swiper,header) => {
      // 写首页逻辑
      class Index {
        constructor () {
          this.hot();
        }
        hot () {
          // 负责渲染热销模块
          $.get(url.baseUrl + '/index/host', resp => {
            console.log(resp.indexId)
              this.rapArra(resp.indexId);
              
          })
        }
        rapArra(Arra){
          // 第一个参数是模板的id，第二个参数是这个模板里面需要的数据
          let html = template('list-template', {
            list: Arra
          })
          $("#list-container").html(html)
          this.swiper ();
        }
        swiper () {
            var mySwiper = new Swiper ('.swiper-container', {
              autoplay: true,
              speed: 1500,
              loop: true, // 循环模式选项
              
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              }

            }) 
        }
      }
  
      new Index()
  
    })
  })