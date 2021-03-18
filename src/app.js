import Vue from "vue";
import VueRouter from "vue-router";
import AppMain from "@/app/components/content.component.html";
import VueAnalytics from "vue-analytics"
import { create, all } from 'mathjs'

// create a mathjs instance with configuration
const config = {
  number: 'Fraction',
  matrix: 'Matrix',
  precision: 64,
}
const math = create(all, config)

// START PAGES
import HomePage from "@/app/pages/home.page.html"
import AboutPage from "@/app/pages/about.page.html"
import GalleryPage from "@/app/pages/gallery.page.html"
import ContactPage from "@/app/pages/contact.page.html"
import ProductPage from "@/app/pages/product.page.html"
import ProductDetailPage from "@/app/pages/product.detail.page.html"
import StartPage from "@/app/pages/starter.page.html"
import ProjectDetailPage from "@/app/pages/project.detail.page.html"

import TncPage from "@/app/pages/tnc.page.html"
import PrivacyPage from "@/app/pages/privacy.page.html"
import CataloguePage from "@/app/pages/catalogue.page.html"
import ResourcePage from "@/app/pages/resources.page.html"
import ProvenPage from "@/app/pages/proven.page.html"
// END PAGES

// START IMPORT
// END IMPORT

Vue.use(VueRouter);


const ROOT_PATH = "/";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
          path: ROOT_PATH,
          component: {
            template: "<router-view></router-view>"
          },
          children: [
            {
              path: "",
              component: AppMain,
              children: [
                {
                  path: "/",
                  name: 'home.page.html',
                  component: HomePage
                },
                {
                  path: "/about",
                  name: 'about.page.html',
                  component: AboutPage
                },
                {
                  path: "/gallery",
                  name: 'gallery.page.html',
                  component: GalleryPage
                },
                {
                  path: "/contact-us",
                  name: 'contact.page.html',
                  component: ContactPage
                },
                {
                  path: "/product",
                  name: 'product.page.html',
                  component: ProductPage
                },
                {
                  path: "/product/:id",
                  name: 'product.detail.page.html',
                  component: ProductDetailPage,
                  props: true
                },
                {
                  path: "/gallery/:id",
                  name: 'project.detail.page.html',
                  component: ProjectDetailPage,
                  props: true
                },
                {
                  path: "/term-n-condition",
                  name: 'tnc.page.html',
                  component: TncPage
                },
                {
                  path: "/privacy-policy",
                  name: 'pp.page.html',
                  component: PrivacyPage
                },
                {
                  path: "/catalogue",
                  name: 'catalogue.page.html',
                  component: CataloguePage
                },
                {
                  path: "/resource/:id",
                  name: 'resources.page.html',
                  component: ResourcePage,
                  props: true
                },
                {
                  path: "/proven/:id",
                  name: 'proven.detail.page.html',
                  component: ProvenPage,
                  props: true
                },
              ]
            },
          ]
        },
        {
          path: "/business",
          name: 'starter.page.html',
          component: StartPage
        },
    ]
})
const getFracString = (num,den) =>
  {
    var s="";
    num=num.toString();
    den=den.toString();
    var ulook=["\u2070","\u00B9","\u00B2","\u00B3","\u2074","\u2075","\u2076","\u2077","\u2078","\u2079"];
    var dlook=["\u2080","\u2081","\u2082","\u2083","\u2084","\u2085","\u2086","\u2087","\u2088","\u2089"];
    for(var i=0; i<num.length; i++)
        s+=ulook[num[i]];
    s+="/";
    for(var i=0; i<den.length; i++)
        s+=dlook[den[i]];         
    return s;
  }

const d2f = (x) => {
  var y = parseFloat(x);
  y = Math.round(y*64)/64;
  var absy=Math.abs(y);
  var yy=Math.floor(absy);
  var frac=roundresult(absy-yy);
  //if( x2<0 ) sign = sign2 = '-';
  var d = digits_after_period(absy);
  var den = Math.round(Math.pow(10,d));
  var num = Math.round(frac*den);
  var len=num.toString().length;
  var f=false;
  if( len>8 ) f=true;
  var g = gcd2(num,den,f);
  var num2 = Math.round(num/g);
  var den2 = Math.round(den/g);
  y = yy;
  y = y != 0 ? y : ''
  //if( num2!=0 ) y+=" "+num2+"/"+den2;
  console.log('n => frach => ', num2)
  if( num2!=0 ) y+=" "+getFracString(num2,den2);
  return(y);
}

const d2fPDF = (x) => {
  var y = parseFloat(x);
  y = Math.round(y*64)/64;
  var absy=Math.abs(y);
  var yy=Math.floor(absy);
  var frac=roundresult(absy-yy);
  //if( x2<0 ) sign = sign2 = '-';
  var d = digits_after_period(absy);
  var den = Math.round(Math.pow(10,d));
  var num = Math.round(frac*den);
  var len=num.toString().length;
  var f=false;
  if( len>8 ) f=true;
  var g = gcd2(num,den,f);
  var num2 = Math.round(num/g);
  var den2 = Math.round(den/g);
  y = yy;
  y = y != 0 ? y : ''
  //if( num2!=0 ) y+=" "+num2+"/"+den2;
  if( num2!=0 ) y+=" "+num2+"/"+den2 ;
  return(y);
}

router.beforeEach((to, from, next) => {
  to.name != 'starter.page.html' && !sessionStorage.getItem('__STARTER') ? next({ name: 'starter.page.html' }) : next()
})

Vue.use(VueAnalytics, {
  id: 'UA-69164208-4',
  router
})
var gcd = function(a, b) {
  if (b < 0.0000001) return a;                
  return gcd(b, Math.floor(a % b));           
};

var app = new Vue({
    el: "#app",
    router: router,
    data() {
      return {
        base_url: path => ROOT_PATH + "/" + (path || ""),
        asset: path => path ? process.env.ASSETS +"/"+ path : '#',
        catalogue: path => process.env.CATALOGUE + "/" + path,
        convertToInch: mm => {
          var inches = mm/25.4;
          console.log('mm => '+ mm +" | inch => "+inches.toFixed(4))
         
          return inches.toFixed(4)
        },
        convertToFeet: mm => {
          var feet = mm/304.8
          return parseInt(feet)
        },
        encrypt: str => { return btoa(str) },
        decrypt: text => { return atob(text)},
        lang: lang => sessionStorage.getItem('_LANG') ? sessionStorage.getItem('_LANG') : 2, 
        paginationCreator: totalItem => {
          let counter = 1
          let pager = [1]
          if(totalItem > 12) {
              for (let index = 1; index < totalItem; index++) {
                  if(index != 0 && (index % 12 == 0)) {
                      counter ++
                      pager.push(counter)
                  }
              }
          } 
          return pager
        },
        toFraction: fraction => {
          if(fraction > 0) {
            return d2f(fraction)
          } 
          return 0    
        },
        toFractionPDF: fraction => {
          if(fraction > 0) {
            return d2fPDF(fraction)
          } 
          return 0
        },
        activeLink: "home"
      };
    },
    
  });

  