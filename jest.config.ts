import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
   verbose: true,
   preset: 'jest-puppeteer',
   transform: { "\\.ts$": 'ts-jest' },
   moduleNameMapper: {
      "\\.(css|less|scss)$": "identity-obj-proxy",
   },
   // transform: {
   //    '^.+\\.(ts|tsx)?$': 'ts-jest',
   //    "^.+\\.(js|jsx)$": "babel-jest",
   // },
   transformIgnorePatterns: [
      'node_modules/(?!react-markdown/)'
   ],
   testPathIgnorePatterns: ["/node_modules/", "<rootDir>/build/"],

}
export default config