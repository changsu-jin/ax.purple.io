---
title: MeetNote
summary: 로컬에서 동작하는 회의 녹음 자동 전사 및 AI 요약 Obsidian 플러그인. 외부 서비스 없이 완전한 오프라인 환경에서 실행됩니다.
status: 운영 중
category: opensource
tags: [Obsidian, Whisper, Speaker Diarization, Claude, Python, TypeScript]
repo: https://github.com/changsu-jin/meetnote
approach: Whisper + pyannote-audio를 로컬에서 실행하여 비용 없이 실시간 회의록을 생성하는 접근
owner:
  name: 진창수
  avatar: /avatars/jin-changsu.png
  blog: https://42class.com
contributors:
  - name: 이재헌
  - name: 박진표
---

## 풀고 있는 문제

회의록 작성은 모든 조직의 반복 업무입니다. 클라우드 기반 서비스는 비용과 보안 문제가 있고, 녹음 파일을 수동으로 정리하는 것은 시간이 많이 듭니다. 회의 내용을 자동으로 전사하고, 화자를 구분하며, 핵심 내용을 요약해주는 도구가 필요합니다.

## 접근 방식

"**클라우드 없이, 내 컴퓨터에서 완결한다**"

- Whisper large-v3-turbo로 5초 단위 실시간 전사
- pyannote-audio 3.1로 화자 분리 및 자동 GPU 감지
- 화자 임베딩 DB로 누적 학습 기반 화자 매핑
- Claude CLI 또는 Ollama로 자동 요약 및 액션 아이템 추출
- AES 암호화, 자동 삭제, 감사 로깅으로 보안 확보
- SMTP 이메일 발송으로 회의록 자동 공유

## 지원 환경

| 플랫폼 | GPU | 60분 회의 처리 시간 |
|--------|-----|-------------------|
| macOS (Apple Silicon) | MPS/MLX | ~5분 |
| Linux + NVIDIA | CUDA | ~5분 |
| Windows + NVIDIA | CUDA (WSL2) | ~5분 |
| macOS (Intel) / Linux | CPU | ~40분 |
