<script setup>
import { marked } from 'marked'
import hljs from 'highlight.js'
import { computed, onMounted, nextTick, ref, watch } from 'vue'

const props = defineProps({
  md: {
    type: String,
    default: "# CODE"
  }
})

const contentRef = ref(null)

// Configure marked without highlighting (we'll do it post-process like debug page)
marked.setOptions({
  langPrefix: 'language-',
  breaks: true,
  gfm: true,
})

// Custom renderer for better heading anchors
const renderer = new marked.Renderer()

renderer.heading = function({ tokens, depth }) {
  const text = this.parser.parseInline(tokens)
  const plainText = text.replace(/<[^>]*>/g, '')
  const id = plainText.toLowerCase().replace(/[^\w]+/g, '-')
  return `
    <h${depth} id="${id}" class="heading-anchor">
      <a href="#${id}" class="anchor-link" aria-hidden="true">#</a>
      ${text}
    </h${depth}>
  `
}

renderer.link = function({ href, title, tokens }) {
  const text = this.parser.parseInline(tokens)
  const isExternal = href.startsWith('http') && !href.includes(window.location.hostname)
  const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''
  const titleAttr = title ? ` title="${title}"` : ''
  return `<a href="${href}"${titleAttr}${target}>${text}</a>`
}

marked.use({ renderer })

// Render markdown to HTML
const html = computed(() => {
  if (!props.md || typeof props.md !== 'string') {
    return '<p>No content available</p>'
  }
  try {
    return marked(props.md)
  } catch (err) {
    console.error('Markdown parsing error:', err)
    return '<p>Error parsing markdown content</p>'
  }
})

const processCodeBlocks = () => {
  nextTick(() => {
    if (!contentRef.value) return

    const codeBlocks = contentRef.value.querySelectorAll('pre code')

    codeBlocks.forEach((codeBlock) => {
      const pre = codeBlock.parentElement
      if (!pre) return

      // Apply syntax highlighting (same as debug page)
      if (!codeBlock.classList.contains('hljs')) {
        const code = codeBlock.textContent || ''
        const language = codeBlock.className.match(/language-(\w+)/)?.[1]

        try {
          let highlighted
          if (language && hljs.getLanguage(language)) {
            highlighted = hljs.highlight(code, { language })
          } else {
            highlighted = hljs.highlightAuto(code)
          }

          codeBlock.innerHTML = highlighted.value
          codeBlock.classList.add('hljs')
        } catch (err) {
          console.warn('Highlight.js error:', err)
        }
      }

      // Add copy button
      if (pre.classList.contains('has-copy-btn')) return

      pre.classList.add('has-copy-btn')
      pre.style.position = 'relative'

      const code = codeBlock.textContent || ''

      const btn = document.createElement('button')
      btn.className = 'copy-btn'
      btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
        </svg>
        <span class="copy-text">Copy</span>
      `

      btn.addEventListener('click', async (e) => {
        e.preventDefault()
        e.stopPropagation()

        try {
          await navigator.clipboard.writeText(code)
          const originalHTML = btn.innerHTML
          btn.classList.add('copied')
          btn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span class="copy-text">Copied!</span>
          `

          setTimeout(() => {
            if (btn && btn.parentNode) {
              btn.classList.remove('copied')
              btn.innerHTML = originalHTML
            }
          }, 2000)
        } catch (err) {
          console.error('Failed to copy:', err)
        }
      })

      pre.appendChild(btn)
    })
  })
}

onMounted(() => {
  processCodeBlocks()
})

watch(() => props.md, () => {
  processCodeBlocks()
})
</script>

<template>
  <div class="markdown-content reveal" ref="contentRef">
    <div class="prose max-w-none" v-html="html" />
  </div>
</template>

<style>
/* Import highlight.js CSS directly (same as debug page) */
@import 'highlight.js/styles/github-dark.css';

.markdown-content {
  font-weight: 400;
  font-style: normal;
  background: none !important;
  user-select: text;
  color: #e6edf3;
  line-height: 1.6;
}

/* Typography */
.markdown-content h1,
.markdown-content h2,
.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
  color: #f0f6fc;
  font-weight: 600;
  margin-top: 24px;
  margin-bottom: 16px;
  line-height: 1.25;
}

.markdown-content h1 {
  font-size: 2em;
  border-bottom: 1px solid #30363d;
  padding-bottom: 0.3em;
}

.markdown-content h2 {
  font-size: 1.5em;
  border-bottom: 1px solid #30363d;
  padding-bottom: 0.3em;
}

.markdown-content p {
  margin-bottom: 16px;
  white-space: pre-line;
}

.markdown-content img {
  border-radius: 6px;
  max-width: 100%;
  height: auto;
}

/* Links */
.markdown-content a {
  color: var(--yellow);
  text-decoration: none;
}

.markdown-content a:hover {
  text-decoration: underline;
  color: var(--yellow);
}

/* Lists */
.markdown-content ul,
.markdown-content ol {
  margin-bottom: 16px;
  padding-left: 2em;
}

.markdown-content li {
  margin-bottom: 0.25em;
}

/* Heading anchors */
.markdown-content .heading-anchor {
  position: relative;
  scroll-margin-top: 80px;
}

.markdown-content .anchor-link {
  position: absolute;
  left: -24px;
  opacity: 0;
  color: var(--yellow);
  text-decoration: none;
  font-weight: 400;
  transition: opacity 0.2s ease;
  padding: 0 4px;
}

.markdown-content .heading-anchor:hover .anchor-link {
  opacity: 1;
}

/* Code blocks */
.markdown-content pre {
  position: relative;
  background: #0d1117 !important;
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 16px;
  overflow-x: auto;
  margin: 16px 0;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 14px;
  line-height: 1.45;
}

.markdown-content pre code {
  background: transparent !important;
  padding: 0 !important;
  border-radius: 0 !important;
  border: none !important;
  font-family: inherit;
  font-size: inherit;
}

/* Inline code */
.markdown-content code {
  background: rgba(110, 118, 129, 0.4);
  padding: 0.2em 0.4em;
  border-radius: 6px;
  font-size: 85%;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
}

/* Override inline code styles for code blocks */
.markdown-content pre code {
  background: transparent !important;
  padding: 0 !important;
  border-radius: 0 !important;
}

/* Override highlight.js background */
.markdown-content .hljs {
  background: transparent !important;
}

/* Custom accent colors using global CSS yellow */
.markdown-content .hljs-title,
.markdown-content .hljs-title.class_,
.markdown-content .hljs-title.class_.inherited__,
.markdown-content .hljs-title.function_ {
  color: var(--yellow) !important;
}

.markdown-content .hljs-built_in,
.markdown-content .hljs-symbol {
  color: var(--yellow) !important;
}

.markdown-content .hljs-variable,
.markdown-content .hljs-attr {
  color: var(--yellow) !important;
}

.markdown-content .hljs-number,
.markdown-content .hljs-literal {
  color: var(--yellow) !important;
}

/* Copy button */
.markdown-content .copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
  z-index: 10;
}

.markdown-content .copy-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

.markdown-content .copy-btn:active {
  transform: scale(0.95);
}

.markdown-content .copy-btn.copied {
  background: rgba(34, 197, 94, 0.2);
  border-color: rgba(34, 197, 94, 0.4);
  color: #4ade80;
}

.markdown-content .copy-text {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Tables */
.markdown-content table {
  border-collapse: collapse;
  width: 100%;
  margin: 16px 0;
  border: 1px solid #30363d;
  border-radius: 6px;
  overflow: hidden;
}

.markdown-content th,
.markdown-content td {
  border: 1px solid #30363d;
  padding: 6px 13px;
  text-align: left;
}

.markdown-content th {
  background: #161b22;
  font-weight: 600;
}

.markdown-content tr:nth-child(2n) {
  background: #0d1117;
}

/* Blockquotes */
.markdown-content blockquote {
  border-left: 0.25em solid #30363d;
  padding: 0 1em;
  margin: 0 0 16px 0;
  color: #8b949e;
}

.markdown-content blockquote > :first-child {
  margin-top: 0;
}

.markdown-content blockquote > :last-child {
  margin-bottom: 0;
}

/* Horizontal rule */
.markdown-content hr {
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: #30363d;
  border: 0;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .markdown-content .copy-btn {
    padding: 5px 8px;
  }

  .markdown-content .copy-text {
    display: none;
  }

  .markdown-content .anchor-link {
    display: none;
  }

  .markdown-content pre {
    padding: 12px;
  }

  .markdown-content table {
    font-size: 14px;
  }

  .markdown-content th,
  .markdown-content td {
    padding: 4px 8px;
  }
}
</style>
