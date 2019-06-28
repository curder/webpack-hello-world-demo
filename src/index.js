import HelloWorld from './components/HelloWorld.vue';

const Plugin = {
  install(Vue, params = {}) {
    Vue.component('hello-world', HelloWorld);
  }
};

export default Plugin;
