---
title: "Startup abc"
date: 2025-11-03
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

The jekyll theme is [minimal-mistakes][mm-url].

## Article head

Three aspects are required in the article header yml

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

## Equation test

One certain thing,
the math equation supporting is provided by the [jekyll-spaceship][jss-url].

Inline equation $\alpha=3$.

Block equation
$$e^{j \omega} = \cos \omega + j \cdot \sin \omega$$

It is fine on my local now. $\blacksquare$

[mm-url]: https://github.com/mmistakes/minimal-mistakes
[jss-url]: https://github.com/jeffreytse/jekyll-spaceship
