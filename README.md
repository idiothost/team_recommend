# 인터넷 기초[04] 과제2 - 나만의 인공지능 서비스

## 개요
 - 서비스 명 : **야구 구단 추천 AI**
 - 서비스 설명 : 사용자로부터 **응원 스타일, 선호 지역, 팀 성향, 좋아하는 색상(선택)**을 입력받으면, <span style="background-color:rgb(182,0,80)">덕성 오늘의 운세</span>는 그날의 운세를 사용자에게 알려준다. 특히, 마지막에 희망을 주는 한 줄 격언을 함께 보내준다.
 - 서비스 접속 주소 : [https://hayunjong2025.github.io/duksung-fortune](https://hayunjong2025.github.io/duksung-fortune)


## 서비스 구성 요소(1) - Gemini API
- <span style="background-color:rgb(182,0,80)">덕성 오늘의 운세</span>가 답변하는 하루의 운세는 구글의 LMM 모델인 Gemini의 API를 활용해 생성한다.
- 활용 모델 : [Gemini-2.0-flash](https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/2-0-flash?hl=ko)
- 시스템 프롬프트 주안점
  - 운세를 말해주는 인공지능에게 오랜 경력을 가진 사주팔자 전문가라고 역할을 부여했다.
  - 답변은 너무 길지 않도록 제한했고
  - 마지막에는 한 줄 격언을 추가하도록 지정했다.

## 서비스 구성 요소(2) - 프론트엔드
- <span style="background-color:rgb(182,0,80)">덕성 오늘의 운세</span> 서비스 페이지는 HTML, CSS, JavaScript를 사용하여 간단하게 구성하였다.
- CSS 스타일 시트는 [style.css](style.css)파일로 따로 분리하였다.
- 귀여운 덕성여자대학교 덕새 캐릭터 이미지를 OpenAI Sora를 이용하여 생성하였다.<br>
<img src="./images/main.webp" width="200px" height="200px">



## 서비스 구성 요소(3) - 백엔드
- 구글 Gemini API 호출을 위한 API 키가 노출되지 않도록, 프론트엔드의 요청을 받아서 Gemini API를 호출해주는 간단한 API 백엔드를 구성하였다.
- 해당 백엔드 로직은 서버리스(Severless) 함수 기능을 제공하는 Vercel에 배포했다.
- 코드 및 구현 내용은 [https://github.com/hayunjon2025/duksung-fortune-api](https://github.com/hayunjon2025/duksung-fortune-api)를 참고한다.
