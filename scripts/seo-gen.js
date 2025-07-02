import fs from 'fs/promises'
import path from 'path'
import { create } from 'xmlbuilder2'
import { MarkdownConfig } from '../md.config.js'

async function writeFile(filePath, content) {
  await fs.mkdir(path.dirname(filePath), { recursive: true })
  await fs.writeFile(filePath, content, 'utf8')
  console.log('✅ Generated', filePath)
}

async function buildRobots(siteUrl) {
  return `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
`
}

async function buildSitemap(siteUrl) {
  const root = create({ version: '1.0' }).ele('urlset', {
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9'
  })

  for (const tool of MarkdownConfig.md) {
    for (const item of tool.items) {
      root.ele('url')
        .ele('loc').txt(`${siteUrl}/docs/${tool.name.toLowerCase()}/${item.link}`).up()
        .ele('lastmod').txt(new Date().toISOString()).up()
        .up()
    }
  }

  return root.end({ prettyPrint: true })
}

async function buildLLMS(siteUrl) {
  const lines = [
    '# LLM Manifest',
    '> List of documentation pages for LLMs and dev tools.\n'
  ]

  for (const tool of MarkdownConfig.md) {
    lines.push(`## ${tool.name}`)
    for (const item of tool.items) {
      lines.push(`- ${siteUrl}/docs/${tool.name.toLowerCase()}/${item.link} — ${item.sub}`)
    }
    lines.push('')
  }

  return lines.join('\n')
}

// 🔐 Require domain via CLI
const args = process.argv.slice(2)
const customDomain = args[0]

if (!customDomain) {
  console.error('❌ Please provide a domain URL as an argument.')
  console.error('Usage: node scripts/generate-seo.js https://taohq.org')
  process.exit(1)
}

async function main() {
  const siteUrl = customDomain
  const outDir = path.resolve('./public')

  const [robots, sitemap, llms] = await Promise.all([
    buildRobots(siteUrl),
    buildSitemap(siteUrl),
    buildLLMS(siteUrl),
  ])

  await Promise.all([
    writeFile(path.join(outDir, 'robots.txt'), robots),
    writeFile(path.join(outDir, 'sitemap.xml'), sitemap),
    writeFile(path.join(outDir, 'llms.txt'), llms),
  ])

  console.log(`✅ SEO files generated using ${siteUrl}`)
}

main().catch(err => {
  console.error('❌ Error generating SEO files:', err)
  process.exit(1)
})
