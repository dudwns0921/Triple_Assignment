import { reset } from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  // reset css에 대한 자세한 내용은 https://github.com/zacanger/styled-reset#readme 참고
  ${reset}
  // 전역 스타일링
  * {
    box-sizing: border-box;
  }
  #root {
    display: flex;
    justify-content: center;
  }
  // css 변수
  :root {
    --app-font-style: sans-serif;
    --app-font-color: rgba(58, 58, 58, 0.7); 
  }
  // 애니메이션 정의
  @keyframes fadeInUp {
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
  }
`
