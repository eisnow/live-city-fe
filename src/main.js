import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
// import VueResource from 'vue-resource';
import VueLayers from 'vuelayers';

import Routers from './router';
import Util from './libs/util';
import App from './app.vue';

import 'iview/dist/styles/iview.css';
import 'vuelayers/lib/style.css';

// Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueLayers, {
// global data projection, see https://vuelayers.github.io/#/quickstart?id=global-data-projection
  dataProjection: 'EPSG:4326'
});

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
