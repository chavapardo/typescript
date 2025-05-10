import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom', // Necesario para pruebas en React
  transform: {
    '^.+\\.tsx?$': 'ts-jest' // Transforma archivos TypeScript y TSX
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Extensiones soportadas
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Configuración adicional para Jest DOM
  collectCoverage: true, // Habilitar cobertura
  collectCoverageFrom: ['src/**/*.{ts,tsx}'], // Archivos a incluir en la cobertura
  coveragePathIgnorePatterns: ['/node_modules/', 'vite-env.d.ts'], // Ignorar archivos
  coverageReporters: ['text', 'lcov']
};

export default config;