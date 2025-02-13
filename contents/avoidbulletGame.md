---
emoji: "🕹"
title: "게임 개발: Avoid Bullet 게임 개발 후기"
description: "Cocos-2dx 물리 엔진의 사용"
date: "2021-11-16"
tag: [C++, Cocos-2dx]
---

## Cocos-2dx의 물리 엔진

이전에 개발하였던 2048 게임에서는 cocos2d를 사용하였지만 물리 엔진을 직접적으로 사용하지는 않았었습니다.

하지만 이번 게임을 개발하기 위해서는 물리엔진이 필요하여 사용해 보았습니다.

탄과 유저의 충돌 판단과 탄을 발사하는 적 개체에 컴포넌트를 추가하는데 엔진을 사용하였습니다.

```javascript
    auto world = getPhysicsWorld();
	if (DEBUG_MODE) world->setDebugDrawMask(PhysicsWorld::DEBUGDRAW_ALL);
	world->setGravity(Vec2::ZERO);

	player = Player::create();
	player->setPosition(Vec2(1280/2, 720/2));
	addChild(player);
```

## Avoid Bullet 게임

아직 물리 엔진을 직접적으로 사용해보지 않아서, 물리 엔진을 활용하여 만들 수 있는 게임을 고민하다가, 예전 곰플레이어에서 이스터에그로 플레이 가능하였던 닷지가 생각나였습니다.

간단한 충돌처리를 하는데에 물리 엔진을 적용 할 수 있어서 개발을 시작하게 되었습니다.

화면 중심에서 탄이 나오는 닷지와는 달리 제가 만든 게임은 사각형의 각각 모서리에서 탄이 나오는 게임 입니다. 홈화면에서 난이도를 설정할 수 있으며 난이도가 올라갈수록 탄이 나오는 주기
탄의 속도가 빨라지며 한번에 나오는 탄의 갯수가 많아지는 것으로 난이도를 조정하였습니다.

## 개발을 진행하며 고려하였던 점

-   물리 엔진을 사용하여 충돌 판단을 할 때 탄을 발사 하는 개체는 탄에 맞으면 안되고 탄끼리도 충돌을 하면 안되었습니다. 이러한 문제를 해결하기 위하여 각각의 객체들에게 충돌 마스크를
    부여 하고 and, or 연산을 이용하여 충돌해야 하는 개체 충돌을 하면 안되는 개체를 판단하였습니다.

```javascript
// 1(2)
#define PLAYER_MASK 0x00000001
// 0(2)
#define ENEMY_MASK 0x00000000
// 1(2);
#define ENEMY_BULLET_MASK 0x00000001
```

-   정식 doc를 보니 탄이 발사되는 각도 정할 때 일반적인 각도가 아닌 Radian으로 변환하여서 변수를 넣어줘야 하였습니다. 그래서 간단한 비례식을 이용하여서 각도를 Radian으로 변환 시켜주는
    코드를 만들어 준 후 사용하였습니다.

```javascript
#define PI 3.14159265358
#define GET_RAD(X) (X*(PI/180.0))
```

## AvoidBullet을 개발하며 느꼈던 점

-   물리 엔진을 사용할 때 정식 문서를 찾아 보며 코드의 문법 뿐만이 아닌 수학, 과학 지식이 필요하다는 것을 다시 느끼게 되었습니다.

-   물리 엔진을 이해하고 사용하면은 제가 만들고자 하는 게임을 더욱 원활하게 만들 수 있고 퀄리티가 올라갈 것이라고 생각하였습니다.

-   이번에 실수로 player 가 죽을 때 player의 값을 nullptr로 변경하지 않고 개체를 삭제하여서 치명적인 오류가 있었습니다. 그래서 다음 부터는 포인터를 사용할 때 개체를 삭제를 해야할 때
    더 꼼꼼히 살펴 봐야겠다고 생각하였습니다.

## 결과 화면

<div class="img-txt-wrap">
    <div class="img-wrap">
        <img width="300"  src="https://user-images.githubusercontent.com/83346490/141977004-51dd928d-9452-4a5e-81a8-670d9380d3c9.png"/>
    </div>
    <div class="img-wrap">
        <img width="300" src="https://user-images.githubusercontent.com/83346490/141977067-6c16daee-3267-4a3e-9507-4107272927d5.png"/>
    </div>
    <div class="img-wrap">
        <img width="300" src="https://user-images.githubusercontent.com/83346490/141977102-d4680eaa-61bd-427c-989a-c9def09a54d8.png"/>
    </div>
</div>
