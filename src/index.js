import HelloWorld from './components/HelloWorld.vue';

const Plugin = (Vue, params = {}) => {
  Vue.component('hello-world', HelloWorld);
};

export default Plugin;
