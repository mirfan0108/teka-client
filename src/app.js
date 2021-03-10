import Vue from "vue";
import VueRouter from "vue-router";
import AppMain from "@/app/components/content.component.html";
import VueAnalytics from "vue-analytics"
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
          return inches.toFixed(1)
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
            // fraction = fraction.toFixed(1)
            var len = fraction.toString().length - 2;
            var denominator = Math.pow(10, len);
            var numerator = fraction * denominator;
            var divisor = gcd(numerator, denominator);   
            numerator /= divisor;                         
            denominator /= divisor;  
            var modRes = numerator % denominator
            let tempNumerator
            if(denominator > 1) {
              if( numerator > denominator && Math.floor(modRes) > 0) {
                tempNumerator = (Math.floor(numerator) - Math.floor(modRes)) / Math.floor(denominator)
                
                return Math.floor(tempNumerator) > 0 ? `${Math.floor(tempNumerator)}  ${Math.floor(modRes)}/${Math.floor(denominator)}` : `${Math.floor(modRes)}/${Math.floor(denominator)}`
              } else {
                return Math.floor(numerator) + '/' + Math.floor(denominator)
              }
            } else {
              return Math.floor(numerator)
            }     
          } else {
            console.log('fraction da => ', fraction)
            return 0
          }
                 
        },
        activeLink: "home"
      };
    },
    
  });

  