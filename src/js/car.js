require(['./config'], () => {
    // 引入config以后就有短名称了
    require(['template','header', 'footer','bootstrap','rem'], (template,header) => {
      // 写首页逻辑
      class Car{
        constructor () {
          this.renderHot();
          this.sum;
        }
        renderHot () {
          let carList=JSON.parse(localStorage.getItem('cart'))
          //console.log(carList)
          // 第一个参数是模板的id，第二个参数是这个模板里面需要的数据
          let html = template('list-template', {
            list: carList
          })
          $("#list-container").html(html)
          this.ondelete();
          this. onamend();
          this.oncheckAll();
          this.noeachvalu();
        }
        ondelete(){
          let _this=this
          $("#left-detail-div button").on("click", function(){
            let numId=Number($(this).parent().parent().attr('productId'))
            let carList=JSON.parse(localStorage.getItem('cart'))
            let i=-1;
            let isExist=carList.some((cart,index)=>{
              i=index;
              return cart.id == numId
            })
            carList.splice(i,1)
            localStorage.setItem("cart",JSON.stringify(carList));
            $(this).parent().parent().remove();
            header.addcarList();
            _this.Allspan()
          })
          
        }
        onamend(){
          $("#left-detail-div select").on("click", function(){
          let num=Number($(this).val());
         // console.log(num)
          let numId=Number($(this).parent().parent().attr('productId'))
          let carList=JSON.parse(localStorage.getItem('cart'))
          let i=-1;
          let isExist=carList.some((cart,index)=>{
            i=index;
            return cart.id == numId
          })
          carList[i].num=num
          localStorage.setItem("cart",JSON.stringify(carList))
          header.addcarList();
          })
        }
        oncheckAll(){
          let _this=this;
          let sum=0;
          $("#maxcheckbox").click(function() {
            if($("#maxcheckbox")[0].checked){
              $('#left-detail-div input').each((index, item)=>{
                item.checked = true
              })
              _this.eachvalue();  
            }else{
              $('#left-detail-div input').each((index, item)=>{
                item.checked = false
                $("#car-main-right-p2").html(0) 
              })
            }
        })
        $('#left-detail-div input').click(function() {
          _this.hvalue()
            let  key = 0
          $('#left-detail-div input').each((index, item)=>{
            if(item.checked==true){
              key +=1
              
            }
          })
          if(key===$('#left-detail-div input').length){
            $("#maxcheckbox")[0].checked= true
          }else{
            $("#maxcheckbox")[0].checked= false
          }
        })
        }
        hvalue() {
         let b=0;
         let _this=this;
          $('#left-detail-div input').each((index, item)=>{
            if(item.checked==true){
                b+=Number($(item).next().next().next().children("#left-detail-d-span").text())
              $("#car-main-right-p2").html(b)
              
              $($(item).next().next().next().children("#left-detail-select")).on('change',function(){
                let sum = $(this).val()*$(this).prev().text()
                $(this).next().html((sum).toFixed(1))
                _this.Allspan()
              })
            }
          })
        }
        Allspan(){
          let b=0
          $('#left-detail-div input').each((index, item)=>{
            if(item.checked==true){
                b+=Number($(item).next().next().next().children("#left-detail-d-span").text())
              $("#car-main-right-p2").html(b)
              
            }
          })
        }
        eachvalue(){
            let maxsum=0;
            let n=0
            let m=0
            //给每个选择框一个点击事件
            if($("#maxcheckbox")[0].checked){
              //寻找已存在值赋予总价
              $('#left-detail-div #left-detail-d-span').each((index, item)=>{
                maxsum+=Number($(item).text())
              })
              $("#car-main-right-p2").html((maxsum).toFixed(1)) 
              
            $('#left-detail-div #left-detail-select').on('change',function(){
            let sum = $(this).val()*$(this).prev().text()
            $(this).next().html((sum).toFixed(1))
            maxsum=0;

            $('#left-detail-div #left-detail-d-span').each((index, item)=>{
              maxsum+=Number($(item).text())
            })
            $("#car-main-right-p2").html((maxsum).toFixed(1)) 
          
          }) 
        }
      }
      
        noeachvalu(){
          $('#left-detail-div #left-detail-select').each((index, item)=>{
            let sum = $(item).val()*$(item).prev().text()
            $(item).next().html((sum).toFixed(1))
          })
            }
      }
    
      new Car()
    })
  })