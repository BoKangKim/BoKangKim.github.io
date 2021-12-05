---
emoji: "🧐"
title: "학업: 데이터 베이스 기말 팀프로젝트-3"
description: "회원가입 구현"
date: "2021-12-04"
tag: [TypeScript, JavaScript, Node.Js]
---

## 회원가입 유효성 검사

사용자가 회원가입을 위해 정보를 입력한 후 버튼을 눌러서 데이터베이스에 데이터를 전송하기 전에 저희가 정한 규칙을 만족시키지 못하면
알림창과 함께 데이터를 전송 시키지 못하도록 유효성 검사를 구현 하였습니다.

#### 조건

-   UserID : 15자 이하 숫자시작 불가 소문자만 가능
-   NickName : 15자 이하 특수문자 및 공백 사용불가
-   PassWord : 7자이상 20자 이하

```javascript
var pattern_chk1 = /[`~!@#$%^&*|\\\`\"\/?]/gi;
var pattern_chk2 = /[0-9]/;
var pattern_chk3 = /[A-Z]/;

if (
    UserName.length <= 0 ||
    UserName.length > 15 ||
    pattern_chk3.test(UserName) ||
    pattern_chk1.test(UserName)
) {
    alert("아이디는 15자이하 소문자 알파벳만 가능합니다.");
    return;
} else if (pattern_chk2.test(UserName.charAt(0))) {
    alert("아이디는 숫자로 시작할 수 없습니다.");
    return;
} else if (NickName.length <= 0 || NickName.length >= 15) {
    alert("닉네임은 1글자 이상 15글자 이하로 입력해 주세요");
    return;
} else if (pattern_chk1.test(NickName)) {
    alert("닉네임에 특수문자는 들어갈 수 없습니다.");
    return;
} else if (NickName.search(/\s/) != -1) {
    alert("닉네임에 공백은 들어갈 수 없습니다.");
    return;
} else if (PassWord.length < 7 || PassWord.length > 20) {
    alert("패스워드는 7자 이상 20자 이하로 작성하여 주십시오");
    return;
}
```

## POST 와 fetch를 이용한 데이터 전송

유효성 검사를 한 후 유저가 입력한 정보가 이상이 없으면 데이터를 전송해야 합니다.

각각 input의 value 값을 받아온 후 객체 형식으로 합쳐줍니다. 그리고 POST 요청으로 local 서버로 데이터를 전송 하는 작업을 하였습니다.

POST 요청은 fetch로 구현 하였습니다.

```javascript
fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
});
```

## 전송한 데이터 받은 후 데이터베이스에 저장

Front에서 전송한 데이터를 받은 후 MySql에서 만든 데이터베이스로 입력을 해주는 작업을 하였습니다.

Backend 역시 기존 데이터를 사용할 때 사용한 get을 하는 것이 아닌 POST로 데이터를 받은 후 데이터베이스 구문으로 입력해 주었습니다.

```typescript
exp.use(express.urlencoded({ extended: true }));
exp.use(express.json());

exp.post("/", function (req, res) {
    connection.query(
        `INSERT INTO user(User_ID,PASSWORD,NICKNAME) VALUES ('${req.body.User_ID}'
            ,'${req.body.PASSWORD}','${req.body.NICKNAME}')`,
        (err: Error) => {
            if (err) throw err;
        }
    );
});
```

## 회원가입 테스트 후 MySQL User 테이블 결과

<img src="https://user-images.githubusercontent.com/83346490/144743597-e19901c4-b85d-404a-beb4-4b8a02dbadd0.png" class="img middle"/>
