import Vue from 'vue'
import App from './App'
import AwaDoc from '../../src/index'
import router from './router/index.js'

Vue.use(AwaDoc);
console.log(AwaDoc)
new Vue ({
    el: "#app",
    components: { App },
    router,
    template: "<App/>"
})