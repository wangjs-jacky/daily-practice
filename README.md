# README

这个项目只是收集并学习一些css小样式小技巧。

### Neumorphism-UI

Neumorphism(或者叫Neo-skeuomorphism)是一种拟物的设计风格。

**效果图**：

<center><img src="https://wjs-tik.oss-cn-shanghai.aliyuncs.com/img/image-20210121213219927.png" alt="image-20210121213219927" style="zoom:67%;" /></center>

**:star:Get Point**：

- 核心css属性：`box-shadow`

  有个神奇的网站已经做好了该风格的样例，只需拖动即可实时生成代码：https://neumorphism.io/#e0e0e0

  <img src="https://wjs-tik.oss-cn-shanghai.aliyuncs.com/img/image-20210121213552845.png" style="zoom: 33%;" />

- `flex`布局还是有些不熟练，搞不清楚`flex-basis`的作用

- `transition`的使用：

  1、transition-property 设置过渡的属性，比如：width height background-color
  2、transition-duration 设置过渡的时间，比如：1s 500ms
  3、transition-timing-function 设置过渡的运动方式，常用有 linear(匀速)|ease(缓冲运动)
  4、transition-delay 设置动画的延迟
  5、transition: property duration timing-function delay 同时设置四个属性

