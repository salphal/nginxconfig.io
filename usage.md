## 构建 Docker

1. 打包

2. 构建完后在 ./dist/css 创建 reset.css

> 这里需要根据打包后的 类名进行替换

```css

.Layout__StyledLayout-sc-76d3dea7-0.iEdVrU {
    padding: 24px;
}

.HeaderStyles__StyledHeader-sc-2183282b-0.iRpprC,
.Sectionstyles__StyledSection-sc-4l5hhw-0.nQErm {
    display: none;
}


```

3. 构建


```shell

docker build -t nginx-config:1.0 .


```
