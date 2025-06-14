# 인터넷 기초[04] 과제2 - 나만의 인공지능 서비스

## 개요
 - 서비스 명 : **야구 구단 추천 AI**
 - 서비스 설명 : 사용자로부터 <b>응원 스타일, 선호 지역, 팀 성향, 좋아하는 색상(선택)</b>을 입력받으면, 야구 구단 추천 AI는 사용자가 제출한 폼을 바탕으로 적합한 구단을 추천해 준다. 구단 추천 뿐만 아니라, 해당 구단을 추천하는 이유와 희망적인 응원 문구도 함께 출력한다.
 - <b>예시)</b><br>
   : LG 트윈스를 추천합니다!  수도권 연고에 빨간색을 메인 컬러로 사용하며, 최근 탄탄한 마운드를 바탕으로 꾸준히 상위권을 유지하고 있습니다.  열정적인 응원으로 유명한 팀이기도 하죠.<br>
     LG 트윈스는 젊은 피와 베테랑의 조화로 짜릿한 경기를 선사합니다.  강력한 투수진과 끈끈한 팀워크로 승리를 향해 나아가는 LG 트윈스를 응원하세요!<br>
     응원 메시지:  LG 트윈스!  불타는 열정으로 승리의 깃발을 높이 휘날리자!  2025년, 함께 승리의 순간을 만들어 갑시다! 
 - 서비스 접속 주소 : [https://idiothost.github.io/team_recommend/](https://idiothost.github.io/team_recommend)


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
