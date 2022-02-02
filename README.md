<h1>집꾸미기 사진 & 가구정보 컴포넌트 클론</h1>

## 🚀 배포 (netlify)
🔗 https://silly-hamilton-470ffc.netlify.app/

<br>

## 🪄 프로젝트 실행 방법
1. git clone하여 프로젝트를 내려받습니다.
    ```bash
    git clone https://github.com/krungy/ggumim_clone.git
    ```
2. 패키지를 설치합니다.
    ```bash
    yarn install
    ```
3. 프로젝트 root 디렉토리에 `.env` 파일을 생성하고 API_POINT를 추가합니다.
    ```bash
    REACT_APP_API_POINT=<발급받은 API>
    ```
4. 프로젝트를 실행합니다.
    ```bash
    yarn start
    ```

<br>

## 🧰 기술 스택 및 구현 사항
<!-- ![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 

## 📚 전체 구현사항
- 상품등록 어드민 페이지를 구현합니다.

### ⏰ 노출 및 판매기간 설정_고동현
- [x] 제한 없음 (default): 기본 선택되게 설정함
- [x] 달력 및 시간 지정은 DateTimePicker(MUI)를 사용해서 만듦
- [x] 노출 기간이 만료된 경우에도 입력한 노출 기간 데이터 계속 표시
- [x] 시작 DATE INPUT이 선택되면 만료 DATE INPUT은 시작 DATE INPUT보다 과거의 시간을 선택되지 못하게 함.

### 📝 상품 기본 정보_박정훈
#### 카테고리
- [x] 체크박스 선택을 통해 해당 상품에 카테고리를 지정할 수 있음
- [x] 체크박스 지정 해제 또는 선택된 카테고리 X 버튼을 통해 카테 고리 지정을 해제할 수 있음
- [x] 복수의 카테고리 지정 가능

#### 필터태그
- [x] 필터태그 검색창 포커스시, 필터태그에 등록되어 있는 모든 필터 태그가 제공
- [x] 필터태그 검색 시, ‘자’를 기준 텍스트 일치값순으로 검색결과 제공
- [x] 검색 결과가 없는 경우 ‘검색 결과 없음’ 안내
- [x] 검색한 필터태그 TAP시, 해당 필터태그 지정됨
- [x] 지정된 태그는 검색창 아래에 표시
- [x] 지정된 태그 [X] 버튼 TAP시, 지정해제됨


### 🗂 상품 옵션_최효정
- [x] 상품 등록 시, 필수로 옵션 1개 이상을 등록으로 제어함
- [x] 옵션은 옵션 세트 추가를 통해 등록할 수 있음(옵션세트 = 이미지 + 옵션)
- [x] 옵션 세트 추가 화면 표시 구현
- [x] “추가 옵션 상품 등록” 버튼 TAP 시, 추가옵션 등록 SELL 추가됨
- [x] 옵션은 옵션 세트내에서 1개이상 생성할 수 있음
- [x] 할인율 기능 구현


### 🥩 상품 소개 이미지 & 구매자 추천 이미지_이소진
- [x] 업로드 컴포넌트 구현
- [x] 여러 파일 업로드 / 단일 파일 업로드를 구분하여 구현
- [x] 업로드 컴포넌트를 이용한 이미지 파일명 추출 & 상태 관리
- [x] 복수의 업로드된 파일명 개별 삭제 기능 구현
- [x] Domain 단위의 컴포넌트를 통해 재사용성 고려

### 🏷 상품 정보 고시_이소진
- [x] 정보 고시의 추가 / 제거 기능 구현
- [x] 정보 고시 추가 시, index 숫서로 생성 순서 구현
- [x] 정보 고시 기본 input 데이터 고정
- [x] 정보 고시 항목 추가 / 제거 기능 구현

### 🚚 상품 배송 설정_고동현
- [x] 사용자 배송일 출발일 지정, 방문 수령 토글 버튼 활성화 시, 선주문 예약 배송 비활성화 상태로 전환
- [x] 선 주문 예약 배송 지정 토글 활성화 시, 사용자 배송 출발일 지정 및 방문수령 일괄 비활성화 상태로 전환
- [x] 주문 시간: MUI의 DatePicker를 이용해서 각각의 날짜 선택 시 value를 가져오고, 그 value에 따라 기간을 설정하게 만듦
- [x] 주문 시간 종료 시, 선주문 예약 배송 비활성화
- [x] 새벽 / 일반 배송 출고일: 주문 시간 이전의 날짜를 선택할 수 없게 만듦
- [x] 새벽 / 일반 배송 출고일에 잘못된 시간 입력 시 ALERT 발생 

### ✨ 상품 혜택 허용 설정 & 기타 설정_고동현
- [x] 토글을 이용해서 상품 혜택 및 기타 설정 제작
- [x] 마일리지 ON default, 감사 카드 제공 OFF default 토글

<br> -->

## 📂 디렉토리 구조
<!-- 
```bash
.
├── assets
├── class
├── components
│   ├── base
│   │   ├── Button
│   │   ├── CheckBox
│   │   ├── ContentContainer
│   │   ├── ContentItem
│   │   ├── DateInput
│   │   ├── Icon
│   │   ├── Input
│   │   ├── RadioBox
│   │   ├── Toggle
│   │   └── Upload
│   └── domain
│       ├── Benefit
│       ├── Delivery
│       │   ├── DateInputContainer
│       │   └── DeliveryAlert
│       ├── ImageUploadContainer
│       ├── ImageUploadSection
│       ├── Layout
│       │   ├── NavBar
│       │   └── NavButton
│       ├── OptionSelector
│       │   ├── AdditionalItem
│       │   ├── OptionItem
│       │   └── ProductItem
│       ├── Others
│       ├── Period
│       │   └── RadioList
│       ├── ProductBaseInfo
│       │   ├── FIlterTag
│       │   └── SelectedTags
│       └── ProductInformationNotice
│           └── InformationContentContainer
├── hooks
├── styles
└── utils
```
 -->
