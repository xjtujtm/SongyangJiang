# 江松阳 · Songyang Jiang

**简体中文** | [English](README.en.md)

江松阳的个人主页，托管于 GitHub Pages。网页支持中英文即时切换，并自动保存语言偏好。

> **声明**：本项目的网站代码（`index.html`、`assets/`）由 **DeepSeek V4.1 Flash** 生成。

## 目录结构

```
index.html          # 主页（中英文同页，JS 切换）
assets/
  style.css         # 样式
  script.js         # 语言切换逻辑
  photo.jpg         # 证件照
```

## 本地预览

直接打开 `index.html`，或启动本地服务器：

```powershell
python -m http.server 8000
```

然后访问 http://localhost:8000

## 部署（GitHub Pages）

1. 将仓库设为 **public**（Settings → General → Danger Zone），并推送 `main` 分支。
2. 进入 **Settings → Pages**。
3. 在 **Build and deployment → Source** 选择 **Deploy from a branch**。
4. 选择分支 **main**、文件夹 **/ (root)**，保存。
5. 站点地址：`https://xjtujtm.github.io/SongyangJiang/`。

## 修改内容

所有文字都在 `index.html` 中。每个可翻译元素同时携带 `data-zh` 与 `data-en` 两个属性：

```html
<h3 data-zh="高压大功率高频变压器优化设计方法研究"
    data-en="Optimization Design Methods for HVHPHF Transformers">
  高压大功率高频变压器优化设计方法研究
</h3>
```

各区块：

- **关于** → `#about`
- **教育背景** → `#education`
- **研究领域** → `#research`
- **代表性著作** → `#works`
- **发表文章** → `#publications`
- **发明专利** → `#patents`

准备就绪后，把上述区块中的占位内容替换为真实内容即可。

## 致谢

- 页面代码由 **DeepSeek V4.1 Flash** 生成。
