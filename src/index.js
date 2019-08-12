import Vue from 'vue';
import AwaDoc from './AwaDoc.vue';
import Nav from './components/Nav.vue';
import Block from './components/Block.vue';
import Header from './components/Header.vue';
import Content from './components/Content.vue';
import Container from './components/Container.vue';
import Simulator from './components/Simulator.vue';
import DemoBlock from './components/DemoBlock.vue';
import DemoSection from './components/DemoSection.vue';

const components = [
  Nav,
  Header,
  AwaDoc,
  Block,
  Content,
  Container,
  Simulator,
  DemoBlock,
  DemoSection
];

export default function install(Vue) {
  components.map(Component => {
    Vue.component(Component.name, Vue.extend(Component));
  });
}

export {
  Nav,
  Header,
  AwaDoc,
  Block,
  Content,
  Container,
  Simulator,
  DemoBlock,
  DemoSection
};
