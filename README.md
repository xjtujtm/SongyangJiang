# Songyang Jiang · 江松阳

Personal homepage of Songyang Jiang (江松阳), hosted on GitHub Pages.

个人主页，支持中英文切换，内容自动保存语言偏好。

## Structure

```
index.html          # Homepage (Chinese/English in one page, toggled by JS)
assets/
  style.css         # Styles
  script.js         # Language switching logic
  photo.jpg         # ID photo
```

## Local preview

Open `index.html` directly, or serve the folder:

```powershell
python -m http.server 8000
```

Then visit http://localhost:8000

## Deployment (GitHub Pages)

1. Make the repository **public** (Settings → General → Danger Zone), then
   push the `main` branch.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/ (root)**, then save.
5. The site will be available at `https://xjtujtm.github.io/SongyangJiang/`.

## Editing content

All text lives in `index.html`. Each translatable element carries both
languages via `data-zh` and `data-en` attributes, e.g.:

```html
<h3 data-zh="高压大功率高频变压器优化设计方法研究"
    data-en="Optimization Design Methods for HVHPHF Transformers">
  高压大功率高频变压器优化设计方法研究
</h3>
```

Sections:

- **教育背景 / Education** → `#education`
- **关于 / About** → `#about`
- **研究领域 / Research Areas** → `#research`
- **代表性著作 / Representative Works** → `#works`
- **发表文章 / Publications** → `#publications`
- **发明专利 / Patents** → `#patents`

Replace the placeholder blocks in these sections with real content when ready.
