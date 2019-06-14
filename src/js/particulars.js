require(['./config'], () => {
    // 引入config以后就有短名称了
    require(['template','url','header', 'footer','etalage','iconfont','fly'], (template,url,header) => {
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
          // 第一个参数是模板的id，第二个参数是这个模板里面需要的数据
          let html = template('list-template', {
            list: Arra[0]
          })
          $("#list-container").html(html)
          $(document).ready(function($){
            $('#example3').etalage({
                thumb_image_width: 446,
                thumb_image_height: 400,
                source_image_width:892,
                source_image_height: 800,
                zoom_area_width: 500,
                zoom_area_height: 500,
                zoom_area_distance: 5,
                small_thumbs: 4,
                smallthumb_inactive_opacity: 0.3,
                smallthumbs_position: 'left',
                show_icon: false,
                autoplay: false,
                keyboard: false,
                zoom_easing: false
            })
        });
        this.addCar(Arra[0]);
        }
        addCar(Arra){
          $("#car-btn").on('click',()=>{
            Arra={
              ...Arra,
              num:Number($(select1).val())
            }
            let carList=localStorage.getItem('cart')
            if(carList){
              carList=JSON.parse(carList)
              let i=-1;
              let isExist=carList.some((cart,index)=>{
                i=index;
                return cart.id == Arra.id
              })
              if(isExist){
                carList[i].num+=Arra.num
              }else{
                carList.push(Arra)
              }
              localStorage.setItem("cart",JSON.stringify(carList))
            }else{
              localStorage.setItem("cart",JSON.stringify([Arra]))
            }
            
          $('<img src="../imgs/wsd.gif" style="width:20px;height:30px">').fly({
            start: $("#car-btn").offset(),
            end: $("#cart-num").offset(),
            onEnd: function(){
              this.destroy()
              let num = Number($("#cart-num").html())
              num +=Arra.num
              $("#cart-num").html(num)
            } 
          })
          })
        }
      }
      new Particulars()
    })
  })