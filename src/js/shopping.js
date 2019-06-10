require(['./config'], () => {
    // 引入config以后就有短名称了
    require(['template','url','header', 'footer'],(template,url,header) => {
      // 写首页逻辑
      class Shopping{
        constructor () {
          this.hot();
        }
        hot () {
          // 负责渲染热销模块
          $.get(url.baseUrl + '/Shopping/host', resp => {
            if(resp.code === 200) {
              this.renderHot(resp.shop)
            }
          })
        }
        renderHot (res) {
          // 第一个参数是模板的id，第二个参数是这个模板里面需要的数据
          let html = template('list-template', {
            list: res.particular
          })
          $("#list-container").html(html)
        }
      }
      
      new Shopping()
  
    })
  })