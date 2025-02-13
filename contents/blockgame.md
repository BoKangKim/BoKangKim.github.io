---
emoji: "🕹"
title: "게임 개발: 2048 블록 게임 개발 후기"
description: "Cocos-2dx엔진을 이용한 게임 개발"
date: "2021-11-10"
tag: [C++, Cocos-2dx]
---

## Cocos-2dx

저는 게임 개발에 관심이 있어서 언리얼엔진을 공부를 하고 싶었지만 아직 실력이 부족해 정보를 찾던 와중에 [CLASS101](https://class101.net/products/604e14e83aa1a2000e442589)이라는 강의 사이트에서 Cocos-2dx에 대해 알려주는 강의를 보게되었고 관심이 생겨서 알아보았습니다.

Cocos 엔진은 C++ 기반 엔진이어서 C#을 사용하는 Unity 보다 퍼포먼스가 좋으며 언리얼 보다 비교적 쉬워서 접근성이 좋은 장점이 있는 것을 알게 되었고, 게임 개발을 직접 해보고 싶어 시작하게 되었습니다.

## 2048 블록 게임

첫번째 강의는 개발환경 설정과 Cocos엔진의 간단한 사용법이었습니다. 그리고 두번째 강의부터 본격적인 게임 개발에 대한 강의를 듣게 되었습니다.

첫번째 게임 개발은 간단한 Three-Match 게임이었습니다. 강의에서 Cocos엔진의 활용법, C++ 활용 뿐만 아니라 게임에 필요한 계산까지 배웠습니다.

강의를 보고 저도 혼자서 게임을 저만의 방식으로 만들어보고 싶어졌습니다. 그래서 널리 알려져있고 블록을 이용한 게임이어서 시작하게 되었습니다.

## 알고리즘적으로 고민을 한 부분

코드 중에서 블록들을 움직인 후에 랜덤으로 두 개의 블록을 생성해 주는 코드가 있었습니다. 고민을 해보다가 일단은 간단하고 직관적으로 해보자라는 생각이 들어서, 두 개의 블록을 한번에
생성 후 여러가지 조건을 만족할 때까지 랜덤값을 생성하는 방식으로 작성 하였었습니다.

하지만 이러한 방식은 블록들이 점점 많이지고 조건들을 만족할 수 있는 경우의 수가 적어저서 두 개의 블록을 만드는데 시간이 오래 걸린다는 것을 알게 되어서 여러 가지 시도를 해보았습니다

처음 방식은 게임 좌표안에서 조건을 만족하면 블록을 생성하는 것이었는데 첫 번째 시도를 한 것은 처음에 두 개의 블록을 생성한 후 이 블록을 기준으로 판단을 하는 것이었습니다.

#### 이전 방식은 게임 좌표를 전체를 탐색하는 것이었지만 이미 생성한 두개의 블록을 기준으로 3X3 좌표들만 검색을 하여 성능을 높이는 것이었습니다. 하지만 이 방법은 생각보다 게임 좌표를 많이 벗어나게 되었습니다.

#### 두 번째로는 게임 좌표를 반으로 나누어서 판단을 하는 것입니다. 게임 좌표는 총 6X6 좌표입니다. 이 좌표를 3X6 으로 나누어서 변수를 찍는 것이었습니다. 이 방법도 탐색하는 범위가 줄어들어 성능은 좋아졌지만 반으로 나눈 게임 좌표 중 한 곳이 블록으로 차게 되면은 에러가 발생 하였습니다.

#### 마지막으로 결정한 방법은 두 개의 변수로 한번에 판단하는 것이 아닌 하나의 블록부터 찍어준 후 나머지 하나의 블록을 판단하는 것이었습니다. 이 방법은 블록을 따로 따로 판단하여 만족해야 하는 조건을 줄여서 처음 방식보다는 빠르게 진행되도록 하였습니다.

먼저 해본 방법들 보다는 성능은 떨어지지만 여러번 테스트를 해보았을 때 에러가 뜨는 경우가 거의 없어서 이 방법을 사용하기로 하였습니다.

-   아직 성능이 좋지 못하여 좋은 최적화는 아니었지만 앞으로 계속 고민하며 최적화를 진행 할 예정입니다.

## 게임을 만들어 보며 느낀점

1. C++에 대하여

-   C++에 대해 문법, 활용 등을 공부하였지만 개발을 하며 아직 부족하다는 것을 많이 느꼈습니다. 개발을 할 때에 문법뿐만이 아니라 C++ 언어에 대한 이해도를 높여야겠다고 생각했습니다.

2. 개발에 필요한 지식

-   2048 게임을 만들며 여러가지 예외처리와 좌표를 수학적으로 계산하여 변환하는 과정에서 많은 어려움을 겪었습니다. 그래서 C++ 문법과 엔진에 대한 이해도 뿐만이 아니라
    여러가지 사고능력을 필요하다고 느끼고 앞으로 여러가지 개발을 경험해보며 실력을 키워야겠다고 생각하였습니다.

3. 게임 개발에 관하여

-   게임 개발자가 되는 것에 대하여 저에게 맞는 길인지 많은 고민을 하였었습니다. 하지만 이번에 직접 게임 개발을 해보며 많은 어려움도 있었지만 그래도 게임 개발을 하며 시간 가는줄 모르고
    재미있게 개발을 하였습니다. 그래서 앞으로 천천히 배워가며 여러 게임 개발에 도전해 보려고 합니다.

## 결과 화면

<div class="img-txt-wrap">
    <div class="img-wrap">
        <img width="300"  src="https://user-images.githubusercontent.com/83346490/141237812-a22f0a6d-666a-4c2d-906d-384358256455.png"/>
    </div>
    <div class="img-wrap">
        <img width="300" src="https://user-images.githubusercontent.com/83346490/141237680-75f6656e-1733-41a4-8556-a91715d87b03.png"/>
    </div>
    <div class="img-wrap">
        <img width="300" src="https://user-images.githubusercontent.com/83346490/141237854-defe9051-b556-47c6-9ea9-502f6b059ba8.png"/>
    </div>
</div>
