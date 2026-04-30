---
title: Purple Mux
summary: 웹 기반 터미널 + Claude Code 통합 환경. 실시간 AI 상태 모니터링과 업무 도구 통합을 지원합니다.
status: 진행 중
category: opensource
tags: [Terminal, Claude Code, Web UI, Tailscale]
approach: 기본 터미널을 웹 기반으로 대체하여, AI 작업 모니터링과 업무 도구를 하나의 인터페이스로 통합하는 접근
repo: https://github.com/subicura/purplemux
owner:
  name: 김충섭
  avatar: /avatars/kim-chungseob.png
  blog: https://subicura.com/purplemux/ko/
contributors: []
---

## 풀고 있는 문제

Claude Code를 터미널에서 사용하다 보면 몇 가지 불편함이 생깁니다.

1. **상태 파악이 어렵다** — Claude가 지금 뭘 하고 있는지, 얼마나 진행됐는지 터미널 출력만으로는 한눈에 보기 어렵습니다
2. **여러 도구를 오간다** — 코드 작업 중에 Asana를 확인하고, 문서를 찾고, 다시 터미널로 돌아오는 컨텍스트 스위칭이 반복됩니다
3. **원격 작업이 번거롭다** — 별도 PC에서 돌리고 있는 작업을 확인하려면 SSH 접속이 필요합니다

## 접근 방식

"**터미널을 웹으로 옮기고, 필요한 것들을 붙인다**"

### 웹 기반 터미널

기본 터미널을 웹 브라우저에서 실행합니다. 별도 설치 없이 브라우저만 열면 터미널 환경을 사용할 수 있습니다.

### Claude Code 실시간 모니터링

Claude Code의 작업 상태를 실시간으로 시각화합니다. 현재 어떤 파일을 읽고 있는지, 어떤 도구를 호출하고 있는지, 진행 상황이 한눈에 보입니다.

### 업무 도구 통합

터미널이 기본 작업 환경이 된다면, 자주 사용하는 도구들을 메뉴로 붙일 수 있습니다. Asana 태스크 확인, 내부 문서 검색 등을 터미널을 벗어나지 않고 처리하는 것이 목표입니다.

### 원격 접근

Tailscale을 활용하면 집이나 별도 PC에서 돌리고 있는 작업에 원격으로 접근할 수 있습니다. VPN 설정 없이 브라우저로 바로 연결됩니다.

## 현재 상태

베타 테스트 진행 중입니다. 관심 있으신 분은 테스트 참여를 환영합니다.
