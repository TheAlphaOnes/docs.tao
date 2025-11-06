<script setup>
import BasicPage from '~/components/base/BasicPage.vue';
import MarkdownRender from '~/components/common/MarkdownRender.vue';
import Breadcrumbs from '~/components/common/Breadcrumbs.vue';


import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useDocsIndex } from '~/composables/useDocsIndex'
import { useMarkdownFile } from '~/composables/useMarkdownFile'
import BasicSideBarPage from '~/components/base/BasicSideBarPage.vue';

const route = useRoute()
const slug = computed(() => route.params.slug)
const name = computed(() => route.params.name)

const { rawMarkdown, errorMsg, loadMarkdown } = useMarkdownFile()

const { docsData, error } = await useDocsIndex()

onMounted(async () => {
  await loadMarkdown(docsData.value, slug.value, name.value)
})


const sideBarName = computed(()=>{
  return `${slug.value} Docs`
})


const sideBarItem = computed(()=>{
  if (!docsData.value || !docsData.value.md) return []
  const tool = docsData.value.md.find(item => item.name === slug.value)
  return tool?.items || []
})

// Breadcrumbs computation
const breadcrumbItems = computed(() => {
  if (!docsData.value || !docsData.value.md) return []

  const tool = docsData.value.md.find(item => item.name.toLowerCase() === slug.value.toLowerCase())
  if (!tool) return []

  const docItem = tool.items.find(item => item.link === name.value)

  return [
    {
      label: tool.name || slug.value,
      to: `/docs/${slug.value}/${tool.items[0]?.link || ''}`
    },
    {
      label: docItem?.name || name.value.replace(/-/g, ' ')
    }
  ]
})




const url = useRequestURL() // gives full request URL

const domain = `${url.protocol}//${url.host}` // → works on localhost, vercel, prod, etc.
const fullPath = `${domain}${route.fullPath}`


const title = `${name.value.replace(/-/g, ' ')} | ${slug.value.toUpperCase()} Docs | TheAlphaOnes`
const desc = `Guide and Documentation for ${name.value.replace(/-/g, ' ')} under the ${slug.value} tool by TheAlphaOnes.`

useSeoMeta({
  title,
  description: desc,
  ogTitle: title,
  ogDescription: desc,
  ogImage: 'https://docs.taohq.org/og.png',
  ogUrl: fullPath,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: desc,
  twitterImage: 'https://docs.taohq.org/og.png'
})

</script>

<template>
  <BasicSideBarPage :is-page="!errorMsg" :side-bar-name="sideBarName" :side-bar-item="sideBarItem" :current-link="name">
      <main>
        <Breadcrumbs :items="breadcrumbItems" />
        <MarkdownRender :md="rawMarkdown"/>
      </main>
  </BasicSideBarPage>
    <!-- <BasicPage :is-page="true">
      <main>

        <MarkdownRender :md="rawMarkdown"/>
      </main>
    </BasicPage> -->
</template>

<style scoped>
main{
  padding: 0px 20px;
  max-width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
}

@media only screen and (max-width: 768px) {
main{
  padding: 0px 5px;
}
}

</style>
