/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createApp } from 'vue'
import App from './App.vue'


function renderApp(props = {}) {
    const { container } = props

    createApp(App).mount(container ? container.querySelector('#app') : '#app')

  }
  if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
  } else {
    renderApp()
  }
  
  export async function bootstrap() {
    console.log('react app bootstraped')
  }
  
  /**
   * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
   */
  export async function mount(props) {
      console.log("app - help");
    renderApp(props)
  }
  
  /**
   * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
   */
  export async function unmount(props) {
  
  }