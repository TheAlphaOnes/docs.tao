import { marked } from 'marked'
import hljs from 'highlight.js'

// Configure marked with enhanced options
marked.setOptions({
  highlight(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value
    }
    return hljs.highlightAuto(code).value
  },
  langPrefix: 'hljs language-', // For highlight.js styling
  breaks: true, // Convert \n to <br>
  gfm: true, // GitHub Flavored Markdown
})

// Custom renderer for better heading anchors
const renderer = new marked.Renderer()

// Add IDs to headings for anchor links
renderer.heading = function({ tokens, depth }) {
  const text = this.parser.parseInline(tokens)
  const plainText = text.replace(/<[^>]*>/g, '') // Strip HTML tags
  const id = plainText.toLowerCase().replace(/[^\w]+/g, '-')
  return `
    <h${depth} id="${id}" class="heading-anchor">
      <a href="#${id}" class="anchor-link" aria-hidden="true">#</a>
      ${text}
    </h${depth}>
  `
}

// Open external links in new tab
renderer.link = function({ href, title, tokens }) {
  const text = this.parser.parseInline(tokens)
  const isExternal = href.startsWith('http') && !href.includes('docs.taohq.org')
  const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''
  const titleAttr = title ? ` title="${title}"` : ''
  return `<a href="${href}"${titleAttr}${target}>${text}</a>`
}

marked.use({ renderer })

export function renderMarkdown(markdown) {
  // Ensure markdown is a string
  if (!markdown || typeof markdown !== 'string') {
    return '<p>No content available</p>'
  }
  return marked(markdown)
}
