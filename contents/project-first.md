---
emoji: "🧐"
title: "학업: 데이터 베이스 기말 팀프로젝트-1"
description: "데이터 베이스를 이용한 영화 토론 게시판"
date: "2021-11-06"
tag: [html, JavaScript, Node.Js]
---

## 영화 토론 게시판을 주제로 선택한 이유

데이터 베이스 과목에서 My Sql 데이터와 여러 데이터를 이용하여 웹 또는 앱을 개발하는 것으로 기말 평가를 하게 되었습니다.

저희는 차별성 보다 구현 가능성에 포커스를 두었습니다.

그래서 여러 주제 중 오픈 API도 있고 구현 가능성이 높아 보이는 영화 토론 게시판을 선택하게 되었습니다.

## HTML을 이용한 개발 계획

기말 평가에서 프론트엔드는 점수에 크게 영향을 받지 않아 BootStrab을 이용하여 직관적이고 간단하게 구현할 예정입니다.

## JavaScript를 이용한 개발 계획

-   ### 회원 가입 구현

    회원 가입을 할 때에 아이디, 패스워드, 이름, 생년월일로 가입을 하게 되고, 그에 알맞는 유효성 검사를 추가하여 회원가입을 구현할 예정입니다.

-   ### 로그인 구현

    회원 가입을 하면 My Sql에서 추가 하여 데이터를 관리하고 로그인 할 때 알맞은 데이터를 불러온 후 탐색하여 아이디와 패스워드가 일치할 시 로그인이 가능하도록 구현할 예정입니다.

## Nodejs를 이용한 개발 계획

로컬 서버를 이용하여 영화진흥원에서 제공하는 오픈 api에서 데이터를 받아온 후 프론트에 넘겨줄 예정입니다.

하지만 영화 포스터를 제공하지 않아서 포스터는 웹 크롤링을 통하여 포스터 데이터를 받아 올 것입니다.

## 현재 진행 상황

-   ### html

    현재 메인페이지, 로그인 페이지, 회원가입 페이지 까지 구현한 상태 입니다.

-   ### javascript

    로컬서버에서 넘겨주는 영화 타이틀 데이터를 이용하여 화면에 띄워주는 것 까지 구현하였습니다.

```javascript
const movie_count = 10;
const url = "http://localhost:3000/test-data";

fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
        console.log(url);
        for (var i = 0; i < movie_count; i++) {
            var element = document.getElementById("movieTitle" + String(i + 1));
            element.innerText = data.weeklyBoxOfficeList[i].movieNm;
            console.log(data.weeklyBoxOfficeList[i].movieNm);
            console.log(data.weeklyBoxOfficeList[i].movieCd);
            getData = data.weeklyBoxOfficeList[i].movieCd;
        }
    });
```

-   ### nodejs

    로컬 서버를 연 후 영화진흥원에서 제공하는 api를 이용하여 영화 정보 데이터를 뿌려주는 것까지 구현 하였습니다.

-   #### [도움을 받은 블로그](https://hyeokjaelee.github.io/typescript-express/)
-   #### [도움을 받은 블로그](https://hyeokjaelee.github.io/nodejs-crawling/)

```typescript
    (async () => {
    const html = await axios.get(data_url);
    test_data = html.data.boxOfficeResult;
    //console.log(html.data.boxOfficeResult.weeklyBoxOfficeList);
    })();

    exp.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    exp.use(cors());
    exp.get("/test-data", (req, res) => {
    res.json(test_data);
});

```
