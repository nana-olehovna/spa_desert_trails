import { defineConfig } from 'vite'

export default defineConfig(({ command }) => {
  return {
    base: command === 'build'
      ? '/spa_desert_trails/'
      : '/',
  }
})