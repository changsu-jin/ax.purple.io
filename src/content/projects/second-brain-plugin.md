---
title: SecondBrain
summary: Git 동기화와 Claude AI 분석을 결합한 Obsidian 플러그인. 원클릭 볼트 백업과 AI 기반 문서 분석을 지원합니다.
status: 운영 중
category: opensource
tags: [Obsidian, Git, Claude, TypeScript]
repo: https://github.com/subicura/second-brain-plugin
approach: Git 자동 동기화와 Claude 프롬프트 템플릿을 결합하여 지식 관리 워크플로우를 간소화하는 접근
owner:
  name: 김충섭
  avatar: /avatars/kim-chungseob.png
  blog: https://subicura.com
contributors: []
---

## 풀고 있는 문제

Obsidian 볼트를 여러 기기에서 동기화하려면 별도의 설정이 필요하고, 축적된 문서에서 인사이트를 추출하려면 수동 작업이 많습니다. 동기화와 AI 분석을 하나의 워크플로우로 통합해야 합니다.

## 접근 방식

"**백업은 자동으로, 분석은 AI로**"

- 원클릭 Git 동기화 (commit → pull → push)
- 설정 가능한 자동 동기화 간격 (기본 5분)
- 최대 3단계 깊이의 멀티 레포지토리 자동 감지
- 충돌 시 원격 버전 보존 + 로컬 변경분 타임스탬프 복사본 저장
- Claude CLI 기반 문서 분석 (프롬프트 템플릿 시스템)
- 데스크톱은 시스템 Git, 모바일은 isomorphic-git으로 크로스 플랫폼 지원
