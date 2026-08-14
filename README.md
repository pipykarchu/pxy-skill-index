# PXY 产品经理技能索引

产品经理 AI 技能的在线目录、功能说明与下载站。

## 在线访问

👉 **https://pipykarchu.github.io/pxy-skill-index/**

## 功能

| 功能 | 说明 |
|------|------|
| 技能搜索 | 按名称、场景、平台、关键词搜索 296 个技能 |
| 功能说明 | 每个技能展示"能做什么""什么时候用""不负责什么""可以怎么说" |
| 版本与更新时间 | 列表显示版本号 + 最后更新日期 |
| 下载量统计 | 实时从 GitHub Release API 获取累计下载次数 |
| 工作流推荐 | 8 个预设工作流（产品定义→交付→发布完整链路） |
| 加密下载 | 外部免密下载公开包；内部密码下载完整包 |
| 多视图筛选 | PXY 推荐 / PM 常用 / 运营 / 全局 / Git 市场 |
| 场景分类 | 9 大场景标签过滤 |
| 平台适配 | Codex / Claude / Hermes 三端安装状态 |

## 数据来源

本站由 `pipykarchu/work` 仓库的 `skills-management/` 自动生成：

```
pipykarchu/work (源码仓) → 配置全局模型技能核心.ps1 → 生成 index.html → push 到本仓库 → GitHub Pages 发布
```

**不要直接修改本仓库的文件**——所有内容会被下次同步覆盖。

## 文件结构

```
index.html              # 索引站主页（单文件 SPA）
catalog-public.json     # 公开技能目录（JSON）
downloads/
├── skills/            # 单技能 ZIP 包（外部免密）
├── workflows/         # 工作流定义 JSON
├── families/          # 技能家族打包（已废弃）
├── internal/          # 加密合集包（需密码）
└── manifest.json      # 下载清单
```

## 更新频率

每次技能源码有变更后手动同步（双击 `同步技能站.cmd`），通常每日 1-3 次。

## 相关仓库

| 仓库 | 用途 |
|------|------|
| [pipykarchu/work](https://github.com/pipykarchu/work) | 技能源码 + 生成脚本 + 项目代码 |
| [pipykarchu/pxy-skill-index](https://github.com/pipykarchu/pxy-skill-index) | 本仓库（索引站静态文件） |
