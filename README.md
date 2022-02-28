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
![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/emotion-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 

<br>

## 📚 전체 구현사항
- [x] 사진과 가구에 대한 정보는 API를 통해서 호출
- [x] 가구 정보가 있는 곳에 돋보기 모양의 버튼을 표시
- [x] 돋보기를 클릭하면 상품정보 tool tip 출력되면서 돋보기모양이 닫기 버튼으로 변경
- [x] 닫기 버튼을 클릭하면 tool tip을 없애고 돋보기 버튼으로 변경
- [x] tool tip은 하나만 노출. tool tip이 노출되고 있는 상태에서 다른 가구를 선택하면 노출되고 있 던 tool tip은 닫히고 새로 클릭한 가구 tool tip만 노출
- [x] 하단에 있는 상품목록에서 해당 가구가 선택되었으면 tool tip 출력

<br>

## 📂 디렉토리 구조

```bash
.
├── assets
│   ├── colors
│   └── image
├── common
│   └── api
├── components
│   ├── base
│   │   ├── Image
│   │   ├── ProductItem
│   │   ├── Toggle
│   │   └── Tooltip
│   └── domain
│       ├── Carousel
│       └── ToggleTooltip
├── context
└── styles
```
