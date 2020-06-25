import Vue from "vue";
import VueRouter from "vue-router";
import AppMain from "@/app/components/content.component.html";
// START PAGES
import HomePage from "@/app/pages/home.page.html"
import AboutPage from "@/app/pages/about.page.html"
import GalleryPage from "@/app/pages/gallery.page.html"
import ContactPage from "@/app/pages/contact.page.html"
import ProductPage from "@/app/pages/product.page.html"
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
                
              ]
            },
          ]
        }
    ]
})


var app = new Vue({
    el: "#app",
    router: router,
    data() {
      return {
        base_url: path => ROOT_PATH + "/" + (path || ""),

        asset: path => process.env.ASSETS +"/"+ path,
        paginationCreator: totalItem => {
          let counter = 1
          let pager = [1]
          if(totalItem > 6) {
              for (let index = 1; index < totalItem; index++) {
                  if(index != 0 && (index % 6 == 0)) {
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
