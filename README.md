# Triple Assignment

## 🙋🏻‍♂️Applicant

**Jung Young Jun**

[![img](https://avatars.githubusercontent.com/u/83502672?v=4)](https://avatars.githubusercontent.com/u/83502672?v=4)

[github](https://github.com/dudwns0921)

## 🧑🏻‍💻 Tech stack

요구사항에 명시된 기술 스택들을 제외한 나머지는 단순히 UI 하나만을 구현하는 것이 아니라 트리플의 애플리케이션을 실제로 만든다는 관점에서 선택했습니다. 트리플과 같이 크고 복잡한 애플리케이션을 만들 때 고민해야 하는 부분은 결국 효율과 생산성이라고 생각했고, 이 둘에 초점을 맞추고 기술들을 선택했습니다. 

### `Front-end :`  

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>	

과제 요구사항에 맞게 사용했습니다.

<img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Typescipt-0074C2?style=flat-square&logo=Typescript&logoColor=white"/>  

#### styled-components

현재 웹 애플리케이션 스타일 구성 방식은 크게 CSS-in-JS와 CSS-in-CSS로 나누어집니다. 먼저 styled-components가 포함된 CSS-in-JS를 선택한 이유는 총 3가지 이유때문입니다.

- 네이밍

흔히들 CSS-in-CSS의 장점으로 클래스 이름의 중복이 일어날 위험성이 적고 네이밍 규칙이 간소화된다는 점을 듭니다. 하지만 요소들마다 클래스 네임을 정해줘야 한다는 점은 변하지 않습니다. 중복의 위험성이 적어졌을 뿐 이 하지만 CSS-in-JS의 경우에는 요소의 이름만 정해주고, 그 안에서는 SCSS 문법인 네스팅을 활용해 선택자를 이용해서 각 요소를 좀 더 효율적으로 스타일링할 수 있습니다. 

- 별도의 파일 관리

 곳에서 모든 것을 작성하지 않기 때문에 별도로 많은 CSS 파일을 만들어 관리해야 하는 단점이 있습니다. 실제로 소규모 프로젝트를 진행할 때, 수십 개의 달하는 css 파일들을 작성해야만 했습니다. 

최근에는 웹 애플리케이션을 여러 개의 재활용이 가능한 블록으로 분리해서 개발하는 컴포넌트 기반 개발 방법이 주류를 이루는 것으로 알고 있습니다. 이러한 주류 패러다임에도 이에 따라 

현재 가장 활발하게 사용되는 전처리기들은 아래와 같습니다.

- SCSS
- Less
- Stylus

이 중 styled-components를 선택한 이유는 가장 많은 레퍼런스를 보유하고 있다는 점 때문이었습니다. 전처리기는 배포 전에 컴파일을 실행하기 때문에 실제 애플리케이션의 성능에는 관여하지 않습니다. 따라서 성능을 기준으로 전처리기들을 비교하는 건 의미가 없습니다. 그리고 레퍼런스가 많다는 이슈가 발생했을 때 그에 대한 해결책을 더 빠르게 찾을 수 있다는 뜻이기 때문에 개발 생산성 측면에서 더 좋다고 생각했습니다.



less, st 개인의 작업 방식과 더불어 가장 많은 레퍼런스를 보유하고 있다는 점에서 선택하게 되었습니다. 그 이유는 전처리기는 배포 전에 컴파일을 진행하기 때문에 실제 성능에는 관여하지 않기 때문에 성능을 기준을 비교할 수 없기 때문입니다. 개인적으로는 SCSS의 문법을 사용할 수 있다는 점, props를 통한 

전처리기끼리는 비교하는 게 의미가 없기 떄문에 CSS-in-JS와 CSS-in-CSS 끼리의 비교가 이루어져야 합니다. 

현재 웹 애플리케이션 스타일 구성 방식은 크게 CSS-in-JS와 CSS-in-CSS로 나누어집니다. 먼저 이 중 styled-components가 포함된 CSS-in-JS를 선택한 이유는 개발 생산성 때문입니다. 전처리기 종류가 다양하지만 전처리기는 배포 전에 컴파일을 실행하기 때문에 실제 성능에는 관여하지 않으며 결국 생산성과 연관된 부분이라고 할 수 있다. 그렇기 때문에 전처리기끼리의 비교가 아니라 CSS-in-CSS와 CSS-in-JS를 비교하는 게 맞다고 생각한다.



네이밍 규칙이 간소화되지만 결국에 클래스 이름을 지어줘야 한다는 점에는 변함이 없습니다.

장점들이 있지만 개인 프로젝트를 하면서 느꼈던 점은 별도로 css 파일을 관리해야 한다는 것이 개발 생산성을 하락시킵니다. 먼저 모듈화를 위해 모든 클래스 네임을 작성해주어야 하며, 

별도로 많은 CSS 파일을 만들어 관리해야 하는 단점이 있습니다.

styled-component 사용한 이유는 SCSS 문법과 props 기능을 통해 CSS 유지 보수 편의성을 향상시킬 수 있기 때문입니다. 특히 Nesting을 사용하면 모든 엘리먼트의 이름을 다 지을 필요없이 구분이 필요한 엘리먼트만 이름을 정해주고 나머지는 선택자를 통해 스타일을 정의할 수 있기 때문에 효율적인 작업이 가능합니다. 특히나 개인적으로는 Nesting을 활용하면 클래스 이름을 생각할 필요 없이 선택자를 토앻 효율

사실 UI 한 부분만을 구현하는 것이라면 타입스크립트를 굳이 사용할 이유는 없다고 생각합니다. 하지만 이후 확장성을 생각한다면 타입스크립트로 프로젝트를 만드는 것이 훨씬 더 좋습니다. 

현재 프로젝트에서는 주로 prop type을 검사하기 위해 타입스크립트를 사용했습니다. 

#### `Environment :`

<img src="https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=Webpack&logoColor=white"/> <img src="https://img.shields.io/badge/Babel-F9DC3E?style=flat-square&logo=Babel&logoColor=white"/>







저는 번들러로는 웹팩을 선택했습니다. 앞에서도 이야기했지만 과제의 목적에만 집중한다면 복잡한 설정을 피하고 비교적 간단한 애플리케이션을 만들 수 있는 파셀을 선택하는 것이 가장 합리적이라고 생각합니다. 하지만 이는 그저 과제일뿐 트리플이라는 애플리케이션을 만든다는 관점에서 봤을 때는 웹팩을 사용하는 것이 맞다고 생각합니다. 트리플처럼 많은 서드 파티를 필요로 하는 복잡한 애플리케이션이라면 웹팩을 사용하는 것이 좋은데, 그 이유는 다음과 같습니다.

- 오래된 만큼 생태계가 풍부하고 안정성이 뛰어남
- 다른 번들러에 비해 뛰어난 개발 서버
  - 개발 중 변경사항을 자동으로 새로고침해주는 라이브 리로딩 기능 지원
  - 새로고침 없이 런타임에 브라우저의 모듈을 업데이트하는 핫 모듈 교체 기능 지원

<img src="https://img.shields.io/badge/Eslint-4B32C3?style=flat-square&logo=Eslint&logoColor=white"/> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=Prettier&logoColor=white"/> <img src="https://img.shields.io/badge/Stylelint-263238?style=flat-square&logo=Stylelint&logoColor=white"/>

과제 요구사항에 맞춰 적용했습니다.

## 📒 Usage

### 개발 모드로 실행하기

```
> npm run dev
```

### 빌드하기

```
> npm run build
// '프로젝트 폴더/dist'에 빌드 결과물 생성
```

# :books:참고자료

https://wormwlrm.github.io/2020/08/12/History-of-JavaScript-Modules-and-Bundlers.html#webpack

https://css-tricks.com/demystifying-styled-components/