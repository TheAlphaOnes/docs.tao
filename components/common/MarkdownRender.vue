<script setup>
import { renderMarkdown } from '~/utils/renderMarkdown'
import "~/assets/github-markdown-dark.css"
import { onMounted, nextTick, ref, watch } from 'vue'

const props = defineProps({
  md:{
    type:String,
    default:"# CODE"
  }
})

const contentRef = ref(null)
const html = computed(() => renderMarkdown(props.md))

const addCopyButtons = () => {
  nextTick(() => {
    if (!contentRef.value) return

    const codeBlocks = contentRef.value.querySelectorAll('pre code')

    codeBlocks.forEach((codeBlock) => {
      const pre = codeBlock.parentElement
      if (!pre || pre.classList.contains('has-copy-btn')) return

      // Mark as processed
      pre.classList.add('has-copy-btn')
      pre.style.position = 'relative'

      // Get the code text
      const code = codeBlock.textContent || ''

      // Create wrapper for copy button
      const btnWrapper = document.createElement('div')
      btnWrapper.className = 'copy-btn-wrapper'

      // Create Vue component instance
      const btn = document.createElement('button')
      btn.className = 'copy-btn'
      btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
        </svg>
        <span class="copy-text">Copy</span>
      `

      let copied = false
      btn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(code)
          btn.classList.add('copied')
          btn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span class="copy-text">Copied!</span>
          `
          setTimeout(() => {
            btn.classList.remove('copied')
            btn.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span class="copy-text">Copy</span>
            `
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
  addCopyButtons()
})

watch(() => props.md, () => {
  addCopyButtons()
})
</script>

<template>
    <div class="markdown-content reveal" ref="contentRef">
      <div class="prose max-w-none" v-html="html" />
  </div>
</template>



<style>

.markdown-content {
  font-weight: 400;
  font-style: normal;
  background: none !important;
  user-select: text;
}

.markdown-content p{
  white-space: pre-line;
}

.markdown-content img{
  border-radius: 5px;
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
  color: var(--red);
  text-decoration: none;
  font-weight: 400;
  transition: opacity 0.2s ease;
  padding: 0 4px;
}

.markdown-content .heading-anchor:hover .anchor-link {
  opacity: 1;
}

/* Copy button styles */
.markdown-content pre {
  position: relative;
  background: #0d1117 !important;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px;
  overflow-x: auto;
}

.markdown-content pre code {
  background: transparent !important;
  padding: 0 !important;
  border-radius: 0 !important;
}

.markdown-content code {
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
  font-family: var(--term-font);
}

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
  font-family: var(--font-k2d);
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

/* Better table styles */
.markdown-content table {
  border-collapse: collapse;
  width: 100%;
  margin: 20px 0;
}

.markdown-content th,
.markdown-content td {
  border: 1px solid var(--border);
  padding: 10px 12px;
  text-align: left;
}

.markdown-content th {
  background: rgba(255, 255, 255, 0.05);
  font-weight: 600;
}

/* Blockquote styles */
.markdown-content blockquote {
  border-left: 4px solid var(--red);
  padding-left: 16px;
  margin-left: 0;
  color: rgba(255, 255, 255, 0.8);
  font-style: italic;
}

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
}
</style>
