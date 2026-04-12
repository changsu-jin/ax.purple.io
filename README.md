# Purple AX — ax.purple.io

purpleio AX TF의 공개 사이트. 프로젝트 컨셉과 기술 블로그를 공유합니다.

## 링크

| 사이트 | URL |
|--------|-----|
| **공개 사이트** (이 레포) | [ax.purple.io](https://ax.purple.io) |
| **내부 포털** | GitLab Pages (내부) |
| **회사 사이트** | [purple.io](https://purple.io) |
| **Quick Win** | [quickwin.purple.io](https://quickwin.purple.io) |

## 프로젝트

### 오픈소스

| 프로젝트 | 설명 | 레포 |
|----------|------|------|
| MeetNote | 로컬 회의록 자동화 Obsidian 플러그인 | [GitHub](https://github.com/changsu-jin/meetnote) |
| SecondBrain | Git 동기화 + Claude AI Obsidian 플러그인 | [GitHub](https://github.com/subicura/second-brain-plugin) |

### 내부 프로젝트

| 프로젝트 | 설명 |
|----------|------|
| Purple Skills | 전사 AI 에이전트 스킬 표준화 |
| Purple Gauge | 성능테스트 셀프서비스 플랫폼 |
| Purple Hub | 운영 도메인 지식 허브 |
| Chatbot (가칭) | 운영 문의 대응 자동화 |
| E2E (가칭) | No-Code E2E 테스트 자동화 |
| Purple Mux | 웹 기반 터미널 + Claude Code 통합 |
| Talos (가칭) | AI 기반 개발 자동화 파이프라인 |

## 디렉토리 구조

```
ax.purple.io/
├── src/
│   ├── pages/              # 페이지 (/, /projects, /blog)
│   ├── components/         # Avatar 등 공통 컴포넌트
│   ├── layouts/            # Base 레이아웃
│   ├── content/
│   │   ├── projects/       # 프로젝트 마크다운
│   │   └── blog/           # 블로그 마크다운
│   └── styles/             # Tailwind + 커스텀 테마
├── public/avatars/          # 멤버 아바타 이미지
└── astro.config.mjs
```

## 콘텐츠 추가

### 프로젝트 추가

`src/content/projects/{slug}.md` 파일 생성:

```yaml
---
title: 프로젝트 이름
summary: 한 줄 설명
status: 진행 중
category: internal  # internal | opensource
tags: [태그1, 태그2]
owner:
  name: 이름
  avatar: /avatars/파일명.png
---

본문 (마크다운)
```

### 블로그 추가

`src/content/blog/{slug}.md` 파일 생성:

```yaml
---
title: "글 제목"
description: "한 줄 설명"
date: 2026-04-13
author: "작성자"
tags: [태그1]
---

본문 (마크다운)
```

## 개발

```bash
npm install
npm run dev      # http://localhost:4322
npm run build    # dist/ 빌드
```

## 기술 스택

Astro 6 + Tailwind CSS 4 + Typography + Sitemap
