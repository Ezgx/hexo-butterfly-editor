module.exports = {
  dest: 'public',
  title: 'Butterfly主题美化教程',
  description: '让每个人轻松的自定义自己的博客',
  head: [
    ['link', { rel: 'icon', href: 'https://bu.dusays.com/2023/03/03/6401a795245ff.png' }],
    [
      'script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?0dd41b1b62d383747c5f3a7d4a4c6816";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ],
    ['script', {},`!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"Jo4DAwP6yTHf2uAz",ck:"Jo4DAwP6yTHf2uAz",hashMode:true});`
  ]
  ],
  themeConfig: {
    logo: 'https://bu.dusays.com/2023/03/03/6401a795245ff.png',
    sidebar: [
      ['/Introduction','简介'],
      '/create',
      '/loading',
      '/nav',
      '/home',
      '/post',
      '/aside',
      '/window',
      '/friendlink',
      '/footer',
      '/font',
      '/page',
      '/function',
      '/performance',
      '/efficiency',
      '/error'
    ],
    nav: [
      { text: '首页', link: '/' },
      { text: '项目Github', link: 'https://github.com/zhheo/hexo-butterfly-editor' }
    ],
    lastUpdated: '最近更新时间', // string | boolean
    smoothScroll: true,
    sidebarDepth: 2,
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return new Date(timestamp).toLocaleDateString();
        }
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://butterfly.zhheo.com'
      }
    ],
    ['vuepress-plugin-baidu-autopush']
  ]
}