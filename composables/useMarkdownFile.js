import { ref } from 'vue'

export function useMarkdownFile() {
  const rawMarkdown = ref('')
  const errorMsg = ref('')

  async function loadMarkdown(docsData, slug, link) {
    if (!docsData || !docsData.md) {
      errorMsg.value = 'Failed to load documentation index.'
      return
    }

    const tool = docsData.md.find(t => t.name === slug)
    if (!tool) {
      errorMsg.value = `Tool not found: ${slug}`
      return
    }

    const item = tool.items.find(i => i.link === link)
    if (!item) {
      errorMsg.value = `Doc not found: ${link}`
      return
    }

    const mdPath = `/md/${item.file}`

    try {
      const content = await $fetch(mdPath, {
        responseType: 'text',
      })
      rawMarkdown.value = content
    } catch (err) {
      errorMsg.value = `Failed to load markdown from ${mdPath}`
    }
  }

  return {
    rawMarkdown,
    errorMsg,
    loadMarkdown
  }
}
