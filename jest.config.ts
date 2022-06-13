import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
   preset: 'ts-jest',
   "testEnvironment": "jsdom",
   moduleNameMapper: {
      "\\.(css|less|scss)$": "identity-obj-proxy",
      '^nanoid': '<rootDir>/node_modules/nanoid/index.js',
      '^@/(.*)$': '<rootDir>/$1',
   },
   "moduleFileExtensions": [
      "js",
      "jsx",
      "ts",
      "tsx"
   ],
   "setupFilesAfterEnv": [
      "<rootDir>/src/setupTests.ts"
   ],
   "moduleDirectories": [
      "node_modules",
      "bower_components"
   ],
   "transformIgnorePatterns": ["node_modules/(?!(nanoid)/)"],
   transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
   },
}
export default config