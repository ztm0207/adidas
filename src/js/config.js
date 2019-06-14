require.config({
    baseUrl: '/',
    paths: {
      jquery: 'libs/jquery/jquery-3.2.1.min',
      header: 'js/model/header',
      footer: 'js/model/footer',
      url: 'js/model/url',
      template:'libs/art-template/template-web',
      etalage:'libs/mirror/jquery.etalage.min',
      iconfont:'libs/font/iconfont',
      bootstrap:'libs/bootstrap/bootstrap.min',
      fly:'libs/jquery-plugins/jquery.fly',
      cookie: 'libs/jquery-plugins/jquery.cookie',
      rem:'libs/font/rem',
      swiper:'libs/swiper/js/swiper.min',
    },
    shim: {
      etalage: {
        deps: ['jquery']
      },
      fly: {
        deps: ['jquery']
      },
      bootstrap:{
        deps: ['jquery']
      }
    }
  })