# flexisble sticky
established by Vue 3 + Typescript + Vite

### Install 
```
npm install flexible-sticky -S
```
### Quick Start
```
import { createApp } from 'vue'
import FlexibleSticky from 'flexible-sticky'
const app =createApp(App)
app.use(FlexibleSticky)
app.mount('#app')

// use
<FlexibleSticky :fix-top="10">需要吸顶的内容</FlexibleSticky>
```
### 

### Attributes
1. styles：可修改组件的样式，默认`{}`
2. baseTop：调节组件距离窗口顶部，会触发吸顶的位置，默认`0`
3. fixedTop：吸顶后距离窗口顶部的位置，默认`0`
4. zIndex：组件层级设置，可在页面存在多sticky时设置层级关系，默认`999`

### TODO
1. 引入`postion:sticky`，注意浏览器兼容问题
2. 实现任意位置滚动吸顶，支持更多的位置参数
3. 可随意拖拽变换位置



