---
emoji: "🧐"
title: "학업: 데이터 베이스 기말 팀프로젝트-2"
description: "영화 토론 게시판-Crawling"
date: "2021-11-07"
tag: [TypeScript, JavaScript, Node.Js]
---

## Crawling을 사용한 이유

진행 중인 프로젝트는 [영화진흥위원회](http://www.kobis.or.kr/kobisopenapi/homepg/main/main.do)에서 제공하는 openAPI에서 주간 박스오피스 데이터를 사용합니다.

그런데 메인화면과 영화 상세정보에서 사용해야 하는 포스터는 API에서 제공하지 않습니다. 그래서 찾아본 결과로 API에서 제공하는 movieCd 값으로 해당 영화정보의 URL을 받아올 수 있는 것을 확인하였습니다

(https://kobis.or.kr/kobis/business/mast/mvie/searchMovieList.do?dtTp=movie&dtCd=20218052)

위의 URL 형식처럼 dtCd= 의 값에 API에서 받아온 movieCd으로 입력을 하면 해당 영화 상세정보 페이지로 이동하여 포스터를 크롤링이 가능하여 사용하게 되었습니다..

## axios 와 Puppeteer

처음에는 axios 와 cheerio를 이용하여 Crawling을 계획 하였었습니다. 하지만 영화 상제정보페이지에 접속시 몇초 후에 제가 원하는 데이터 값이 페이지에 표시 되었습니다. 그래서 cheerio 대신 Puppeteer를 주로 사용하여 Crawling을 하였습니다.

```typescript
    const browser = await puppeteer.launch({
        headless: true,
    });

    const newDataArr = sourceDataArr.map(async (sourceData) => {
        const targetURL = img_url + sourceData.movieCd;
        const page = await browser.newPage();
        await page.goto(targetURL);
        await page.waitForSelector(
            "#ui-id-1 > div > div.item_tab.basic > div.ovf.info.info1 > a"
        );
        const $ = load(await page.content());
        const newData: NewMovieData = {
            ...sourceData,
            img:
                "https://kobis.or.kr/" +
                $(
                    "#ui-id-1 > div > div.item_tab.basic > div.ovf.info.info1 > a"
                ).attr("href"),
        };
        page.close();
        return newData;
    });

});

```

## JavaScript에서 데이터 받기

크롤링을 하여 얻은 이미지 데이터를 API에서 받은 json 형식의 데이터와 합쳐서 로컬 서버에 띄워줍니다.

그 후 JavaScript에서 로컬 서버에 접근하여 해당 데이터를 받은 후 메인페이지에 데이터를 보낸 후 메인페이지에서 볼 수 있도록 하였습니다.

```javascript
fetch(url)
    .then((Response) => Response.json())
    .then((dataArr) => {
        const contents = dataArr.map((data) => {
            const title = data.movieNm;
            const img = data.img;
            console.log(img);
            });
```

## 메인페이지 화면

<img src="https://user-images.githubusercontent.com/83346490/140653137-23be9335-263a-43ef-812e-c17590c9e66f.png" class="img large"/>

### 🤝참고 자료

-   https://github.com/HyeokjaeLee/korea-webtoon-api

-   https://hyeokjaelee.github.io/nodejs-crawling/
