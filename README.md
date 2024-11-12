# Poke Dex

## 요구사항
-------------------
### 브랜치

main 브랜치는 어떤 브랜치여도 좋음
<br>
1. props-driling 브랜치
2. context 브랜치 : Context-API 사용한 버전
3. (`선택`) redux-toolkits 브랜치 : Redux-Toolkit 사용한 버전

### 스타일링

styled-components 사용<br>
[모바일, 데스크탑] 반응형 레이아웃

<br>

### 페이지 라우팅

react-router-dom 이용, useNavigate 혹은 Link로 페이지 간 이동 구현

<br>

**페이지 구성**

1. Home[`‘/’` 라우터는 `Home.jsx`] : "포켓몬 도감 시작하기" 버튼 -> Dex 페이지로<br>
2. Dex[`/dex`] : 포켓몬 카드 클릭 -> 포켓몬 디테일 페이지<br>
3. 상세보기 페이지

<br>

### 도감 페이지(Dex) 구성

세가지 주요 컴포넌트로 페이지 구성 : Dashboard,  PokemonList, PokemonCard

```
Dashboard : 선택한 포켓몬이 뜨는 보드
PokemonList : 데이터를 이용하여 포켓몬 카드 리스트를 생성
PokemonCard : 포켓몬 카드를 생성
```
<br>

리스트 표시 : PokemonList는 포켓몬 데이터인 MOCK_DATA를 받아 PokemonCard를 표시한다.<br>
포켓몬 카드 : 이름, 이미지, 타입, (대시보드에)추가 버튼<br>
포켓몬 선택 : 포켓몬카드 추가 버튼 -> Dashboard에 포켓몬 추가<br>
최대 선택 수 제한 : 선택할 수 있는 포켓몬의 갯수에 제한을 둔다.<br>

```
		   제한을 초과하면 
		   alert
		   혹은 
		   (선택) UI Library 이용, Modal 또는 toast UI 요소로.

		    라이브러리 목록 : react-toastify, sweetalert2, sonner
```

<br>

### 디테일 페이지

포켓몬 상세정보 : 포켓몬 id를 path params로 받아와 MOCK_DATA에서 상세 정보 검색, 표시<br>
표시할 정보 : 이미지, 이름, 타입, 설명<br>
뒤로가기 버튼 : 이전 페이지로 돌아가는 버튼<br>
(`선택`) [추가/삭제 토글] 대시보드에 포켓몬을 추가/삭제할 수 있는 토글 버튼<br>
(`선택`) [상태관리] 디테일 페이지에서 뒤로 돌아가도 대시보드가 초기화되지 않는다

<br>

### 알림 기능

중복 선택 방지 : 중복 선택 시 "이미 선택된 포켓몬입니다"<br>
선택 수 제한 : 제한된 갯수 초과 시 "더 이상 선택할 수 없습니다"<br>
alert / 혹은 (선택) UI Library 이용, Modal 또는 toast UI 요소로.<br>

<br>

## 선택 요구사항 redux-toolkits 브랜치 자세히

Redux Toolkit으로 리팩터링하기<br>
포켓몬 선택 상태, 추가/삭제 기능을 Redux 상태로 관리<br>
상태 구독과 액션 디스패치 적용: useSelector, useDispatch 활용 -> Context API를 Redux로 대체

<br><br>

## 구현사항
----------
필수 요구사항과 선택 요구사항의 기능을 모두 구현하였습니다.<br>
UI Library로는 `sweetalert2`를 사용하였습니다.<br>
**포켓몬 중복 선택이 불가능**하기 때문에 필수 요구사항 중 중복 선택 경고창은 띄울 필요가 없었습니다. 그러므로 해당 기능은 존재하지 않습니다.

<br><br>

## 페이지와 레이아웃
----------

### 페이지 구성
1. Home[`‘/’` 라우터는 `Home.jsx`] : 홈페이지
2. Dex[`/dex`] : 도감 페이지
3. Details[`/details/:pokemonId`] : 포켓몬 상세 정보 페이지

<br>

### 레이아웃

<br>

#### 홈
<img src='https://github.com/user-attachments/assets/f1273ef3-fdab-476f-94c6-72c59cc219cd' width='60%'>

로고 이미지와 도감 페이지로 가는 버튼이 있습니다

<br>

#### 도감
<img src='https://github.com/user-attachments/assets/ae3305db-dd70-49bc-ad7f-979b697fa7c1' width='60%'>

선택한 포켓몬을 볼 수 있는 슬롯, 포켓몬 카드 리스트를 보여주는 보드가 있습니다.<br>
포켓몬 카드에 표시되는 정보 중 타입에는 배경색을 넣어 가시성과 가독성을 높였습니다.

<br>

#### 상세
<img src='https://github.com/user-attachments/assets/4b129d5e-3e7d-4c9f-a76e-2e75e6971e2d' width='60%'>

포켓몬의 상세정보를 볼 수 있습니다.<br>
돌아가기 버튼과 포켓몬을 슬롯에 추가하는 버튼이 있습니다.

<br><br>

### 그 외 기능

<br>

#### 저장한 포켓몬 기억하기
<img src='https://github.com/user-attachments/assets/fa707e22-a110-4d75-8591-86b3b21c73f8' width='60%'>
도감 페이지와 상세 페이지를 오갈 때 저장해둔 포켓몬이 사라지지 않습니다.

<br><br>

#### 반응형 레이아웃
모든 페이지에 반응형 레이아웃이 적용되어 있습니다.

**홈**

<img src='https://github.com/user-attachments/assets/57652e60-6dd7-408d-96e3-2df7b02ca154' width='60%'>

<br>

**도감**

<img src='https://github.com/user-attachments/assets/82768765-0b0d-4f8d-8265-52f7f1092558' width='60%'>

<br>

**상세**

<img src='https://github.com/user-attachments/assets/a26ef45c-3e0f-4ab9-ad5f-84d71be5db00' width='60%'>

