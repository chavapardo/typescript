import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom', // Necesario para pruebas en React (DOM)
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transforma archivos TypeScript y TSX
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Extensiones soportadas
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Configura Jest DOM
  collectCoverage: true, // Habilita la cobertura
  collectCoverageFrom: ['src/**/*.{ts,tsx}'], // Archivos a incluir en la cobertura
  coveragePathIgnorePatterns: [
    '/node_modules/', // Ignorar node_modules
    'vite-env.d.ts',  // Ignorar archivo de declaración de Vite
    'GlobalStyles.ts' // Ignorar estilos globales
  ],
  coverageReporters: ['text', 'lcov'], // Tipos de reporte de cobertura
};

export default config;