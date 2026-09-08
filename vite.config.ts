import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

const PORTFOLIO_DIR = path.resolve(__dirname, 'public/images/portfolio')
const IMAGE_EXT = /\.(jpe?g|png|webp)$/i

function listPortfolioImages(): string[] {
  if (!fs.existsSync(PORTFOLIO_DIR)) return []
  return fs
    .readdirSync(PORTFOLIO_DIR)
    .filter((f) => IMAGE_EXT.test(f))
    .sort()
    .map((f) => `/images/portfolio/${f}`)
}

// Reads /public/images/portfolio/ at dev/build time so ImagePortfolio.tsx
// can render every image in the folder without hardcoding filenames.
function portfolioImagesPlugin(): Plugin {
  const virtualModuleId = 'virtual:portfolio-images'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'portfolio-images',
    resolveId(id) {
      if (id === virtualModuleId) return resolvedVirtualModuleId
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export default ${JSON.stringify(listPortfolioImages())}`
      }
    },
    configureServer(server) {
      server.watcher.add(PORTFOLIO_DIR)
      server.watcher.on('all', (_event, changedPath) => {
        if (path.resolve(changedPath).startsWith(PORTFOLIO_DIR)) {
          const mod = server.moduleGraph.getModuleById(resolvedVirtualModuleId)
          if (mod) server.moduleGraph.invalidateModule(mod)
          server.ws.send({ type: 'full-reload' })
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), portfolioImagesPlugin()],
})
