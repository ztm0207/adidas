define(['jquery','cookie'], () => {
    class Header {
      constructor () {
        this.container = $("#header")
        this.load().then(() => {
          // 操作header里面的DOM
          this.search();
          this.addcarList();
          this.register();
          $("#popup").html( $.cookie('name'))
          this.seek();
        })
      }
  
      load () {
        return new Promise(resolve => {
          // 由于header模块要在不同的页面使用，所以路径一定是绝对路径 /html/....
          this.container.load('/html/model/header.html', () => {
            // 异步加载完成
            resolve()
          })
        })
      }
      addcarList() {
        let carList=JSON.parse(localStorage.getItem('cart'))
        let sum=0;
        $.each(carList,function(e,val){
          sum+=val.num
        })
        $("#cart-num").html(sum)
      }
      search () {
        
      }
      register(){
        $("#popup").on("click", function(){
          $("#divnone").attr('style',"")
        })
        $("#landingspan").on("click", function(){
          $("#divnone").attr('style',"display: none")
        })
        this.onadd();
        this.onselect();
      }
      onadd(){
          $('#p-btn-add').on('click',function(){
          let text=$('#p-text-add').val(),pass=$('#p-pass-add').val();
          $.get('http://localhost/api/php/add.php',{name:text,password:pass},function(a){
            let i=JSON.parse(a)
            if(i.res_code==200){
              $("#nonep").attr('style',"display: block;")
              setTimeout (function(){$("#nonep").attr('style',"display: none;")
              $('#p-text-add').val("");
              $('#p-pass-add').val("");
            },2000)
            }
          })
        })
      }
      onselect(){
        $('#p-btn-re').on('click',function(){
          let text=$('#p-text-re').val(),pass=$('#p-pass-re').val();
          $.get('http://localhost/api/php/select.php',{name:text,password:pass},function(a){
            let i=JSON.parse(a)
            if(i.res_code==200){
              $("#nonepre").attr('style',"display: block;")
              setTimeout (function(){$("#nonepre").attr('style',"display: none;")
              $('#p-text-re').val("");
              $('#p-pass-re').val("");
            },2000)
              $.cookie('name',text,{path:"/",expires:10})
              $("#popup").html( $.cookie('name'))
            }
          })
        })
        
      }
      seek(){
        $("#icon-chazhao-i").on('click',function(){
          let a=$("#input-text-i").val()
          $('#ul-i').empty();
          $.getJSON(`https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${a}&cb=?`,resp=>{
            $('#ul-i').attr('style','display:block')
          $.each(resp.s,function(index,value){
            $('<li>').html(value).prependTo($('#ul-i')).attr('id','nameID').on('click',function(){
              $("#input-text-i").val($(this).html())
              $('#ul-i').attr('style','display:none')
              $('#ul-i').empty();
            })
            })
            $("#input-text-i").focus(function(){
              $('#ul-i').attr('style','display:none')
              $('#ul-i').empty();
            });
       });
         
        })
  
      }
    }
    return new Header()
  })