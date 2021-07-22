1. 用Vue 3 + Typescript + Vite方式构建的
```
npm init vite@latest
npm create vite
```
2. 直接将app改成vue组件了，在`main.ts`中增加`install`方法并把组件暴露出去
3. 库模式打包：修改`vite.config.ts`配置,`npm run build`打包，参考（https://cn.vitejs.dev/guide/build.html#multi-page-app）
4. 发布npm
    - npm login
    - npm publish
