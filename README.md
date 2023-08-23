# 프론트엔드 프리온보딩 인턴십 8월 

## 성명 
- 박상준

## 프로젝트 실행 방법 
- git clone https://github.com/owen970517/wanted-pre-onboarding-frontend.git
- npm install
- npm start

## 데모 영상 
- https://owen970517.github.io/wanted-pre-onboarding-frontend/

## 사용한 기술 및 라이브러리
- React
- TypeScript
    - 코드를 실행하기 전에 미리 에러를 확인할 수 있어 에러 해결하는 데 좋음.
    - 미리 타입을 지정해놓고, 그 타입에 맞는 자동 완성을 사용할 수 있기 때문에 코드를 작성하는데 편함
- axios
    - 데이터를 json 형태로 전달해주기 때문에 json으로 변환 해서 사용해야 하는 필요가 없어짐 
    - 자동 문자열 변환해주기 떄문에, data 전달 시 json.stringify()를 사용할 필요가 없어져 코드가 줄어듬 
- React-Router-dom
    - header 기능을 구현하기 위해 사용
- styled-components
    - css 파일을 만들어 사용하지 않아도 되서 좋음
    - className을 일일히 설정해야하는 번거로움을 줄일 수 있음 
    - 파일을 이동해가며 코드를 수정하지 않아도 되서 좋음 
- context api
    - props 전달로 지저분했던 코드를 개선하기 위해 사용

## 개선한 부분 

- 컴포넌트 분리 
- context api로 props drilling 해결


## 개선할 부분 

- 나름 코드의 양을 줄이고, 보기 좋게 만들어 보려고 했지만 다른 분들에 비해 많이 부족함을 느낄 수 있었다.
- 비슷한 컴포넌트가 있을 떄 (ex signin,signup의 form) 재사용할 수 있도록 개선.
- custom hooks을 사용해보기

## 토론해봤으면 좋은 부분

- css 라이브러리 어떤 것을 사용하는 것이 좋을까? (ex styled-components , sass 등)
- todo 프로젝트에서 context api 와 reducer를 사용하는 것이 좋은가?




