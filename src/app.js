import Vue from "vue";
import VueRouter from "vue-router";
import AppMain from "@/app/components/content.component.html";
// START PAGES
import HomePage from "@/app/pages/home.page.html"
import AboutPage from "@/app/pages/about.page.html"
import GalleryPage from "@/app/pages/gallery.page.html"
import ContactPage from "@/app/pages/contact.page.html"
import ProductPage from "@/app/pages/product.page.html"
import ProductDetailPage from "@/app/pages/product.detail.page.html"
import StartPage from "@/app/pages/starter.page.html"
import ProjectDetailPage from "@/app/pages/project.detail.page.html"
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
var app = new Vue({
    el: "#app",
    router: router,
    data() {
      return {
        base_url: path => ROOT_PATH + "/" + (path || ""),
        asset: path => process.env.ASSETS +"/"+ path,
        convertToInch: mm => {
          var inches = mm/2.54;
          return inches.toFixed(2)
        },
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
        activeLink: "home"
      };
    },
    
  });
