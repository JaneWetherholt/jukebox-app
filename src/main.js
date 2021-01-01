import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import AlbumsView from './components/AlbumsView'
import HomeView from './components/HomeView'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/Albums',
      name: 'Albums',
      component: AlbumsView,
      // props: true
      props: {
        albums: [
          {
            id: 1,
            title: "Purple Rain",
            artist: "Prince"
          },
          {
            id: 2,
            title: "Welcome to the Jungle",
            artist: "Guns 'N' Roses" 
          },
          {
            id: 3,
            title: "Hopes and Fears",
            artist: "Keane"
          },
          {
            id: 4,
            title: "Fetch the Boltcutters",
            artist: "Fiona Apple"
          },
          {
            id: 5,
            title: "Back in Black",
            artist: "AC/DC"
          },
          {
            id: 6,
            title: "The Crane Wife",
            artist: "The Decemberists" 
          },
          {
            id: 7,
            title: "Sound & Color",
            artist: "Alabama Shakes"
          },
          {
            id: 8,
            title: "Strange Trails",
            artist: "Lord Huron"
          },
          {
            id: 9,
            title: "Hamilton: An American Musical",
            artist: "Original Broadway Cast"
          },
          {
            id: 10,
            title: "Talking is Hard",
            artist: "Walk The Moon" 
          },
          {
            id: 11,
            title: "Random Access Memories",
            artist: "Daft Punk"
          },
          {
            id: 12,
            title: "DAMN.",
            artist: "Kendrick Lamar"
          }
        ]
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: HomeView,
      default: true
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
