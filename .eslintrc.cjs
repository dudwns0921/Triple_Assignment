const createConfig = require('@titicaca/eslint-config-triple/create-config')

const { extends: extendConfigs, overrides } = createConfig({
  type: 'frontend',
  project: './tsconfig.json',
})

module.exports = {
  extends: [
    ...extendConfigs,
    // 확장할 규칙 이름...
  ],
  overrides: [
    ...overrides,
    // 특정 파일 대상 규칙...
  ],
  rules: {
    'linebreak-style': ['error', 'unix'],
    // 트리플 프리티어 규칙에 맞게 다른 환경에서도 lf로 개행문자 고정하기 위한 규칙
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    // react unused-vars 에러 없애기 위한 규칙
  },
}
