require(['./config'], () => {
    // 引入config以后就有短名称了
    require(['template','url','header', 'footer'], (template,url,header) => {
      // 写首页逻辑
      class Particulars{
        constructor () {
          this.hot();
        }
        hot () {
          // 负责渲染热销模块
          $.get(url.baseUrl + '/particulars/host', resp => {
            if(resp.code === 200) {
              this.rapArra(resp.particu.particuArray);
            }
          })
        }
        rapArra(Arra){
          
        }
      }
      new Particulars()
    })
  })