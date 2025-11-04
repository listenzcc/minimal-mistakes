---
title: "Startup abc"
categories:
  - Blog
tags:
  - Web
  - Jekyll
  - Startup
---
Startup for the blog system.

## Startup

Hello, there.
I am building my own blog system with jekyll.
The jekyll theme is [minimal-mistakes][mm-url].
The development is quite simple following the document.

Since I am Chinese, but the Input method drives me crazy with equations and control symbols like \[ \] 【】.
I would like to write in English and translate it back one-by-one paragraph with AI.
(Or inverse in some cases).
I hope we can work together well.

The layout is the first thing when you visit, the classic one column layout is used to present the content.
On the right side, there lies a table of content (sticky on the top of screen).
The left-side bar is still not used. I plan to use it when there are more blogs.
As the same as the top bar, I will use them for searching and navigation.

The other issue that affects the layout is the font and font size.
For the startup, I am using **PT Serif** for global-font-family and **PT Sans Narrow** for header-font-family.
Neither too large nor small I want it to be.
Actually, I believe ten to fifty words per line is good.

## Quote block

Following is the quote block example:

> The Quick Brown Fox Jumps Over the Lazy Dog.
> The Quick Brown Fox Jumps Over the Lazy Dog.
> The Quick Brown Fox Jumps Over the Lazy Dog.
> The Quick Brown Fox Jumps Over the Lazy Dog.

The paragraph following the quote block.

## Article head

The **.md** files are the content of my blogs.
Every file has its head in the format of **.yml**
Three aspects are required in the article header.
They are useful to organize my articles.

- title: (str) The title of the article.
- categories: (list) The categories, the place of the work.
- tags: (list) The search tag of the work.

| 特性         | Categories（分类）                          | Tags（标签）                             |
| ------------ | ------------------------------------------- | ---------------------------------------- |
| **层级结构** | 通常是**层级化**的，可以有父子关系          | 通常是**扁平化**的，没有层级关系         |
| **数量限制** | 一般数量较少，每个帖子通常属于**1-3个分类** | 数量可以很多，一个帖子可以有**多个标签** |
| **语义含义** | 表示内容的**主要主题或章节**                | 表示内容的**具体关键词或属性**           |
| **使用场景** | 博客的主要板块、教程的不同章节、产品类别    | 具体技术、关键词、内容属性               |
| **组织结构** | 构建网站的**整体骨架**                      | 提供详细的**检索维度**                   |
| **典型示例** | `[技术, 编程]`                              | `[jekyll, 静态网站, 教程]`               |

Other stuffs for presentation, I leave them in the `_config.yml` file.
As a result, the head code of this article and the global setup is

```yml
# file: 2025-11-03-start-abc.md
---
title: "Startup abc"
categories:
  - Blog
tags:
  - Web
  - Jekyll
  - Startup
---

# file: _config.yml
defaults:
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      share: true
      related: true
      toc: true
      toc_sticky: true

  - scope:
      path: "assets/posts"
    values:
      text: true
```

## HTML embedding

It also allows to embed HTML block into the blog.
(Although it is a direct violation of `MD033/no-inline-html: Inline HTML [Element: script]markdownlintMD033`, but it works fine.)

<div id="embeddedDiv">
<script defer="defer" src="{{ site.baseurl }}/assets/posts/Blog/example.js"></script>
</div>

## Equation test

I guess, currently,
the math equation supporting is provided by the [jekyll-spaceship][jss-url].
(But I am not so sure.)
There are two kinds of typical usages:

- Inline equation $\alpha=3$.

- Block equation
  $$e^{j \omega} = \cos \omega + j \cdot \sin \omega$$

They are both working fine on my local server.

```shell
jekyll server
```

[mm-url]: https://github.com/mmistakes/minimal-mistakes
[jss-url]: https://github.com/jeffreytse/jekyll-spaceship
