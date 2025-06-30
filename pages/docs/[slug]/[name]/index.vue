<script setup>
import BasicPage from '~/components/base/BasicPage.vue';
import MarkdownRender from '~/components/common/MarkdownRender.vue';


import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useDocsIndex } from '~/composables/useDocsIndex'
import { useMarkdownFile } from '~/composables/useMarkdownFile'
import BasicSideBarPage from '~/components/base/BasicSideBarPage.vue';

const route = useRoute()
const { slug, name } = route.params

const { rawMarkdown, errorMsg, loadMarkdown } = useMarkdownFile()

const { docsData, error } = await useDocsIndex()


// console.log(docsData.value);

onMounted(async () => {

  await loadMarkdown(docsData.value, slug, name)


})


const sideBarName = computed(()=>{
  return `${slug} Docs`
})


const sideBarItem = computed(()=>{
  const tool = docsData.value.md.find(item => item.name === slug)
  // console.log(tool);

  return tool.items
})

</script>

<template>
  <BasicSideBarPage :is-page="!errorMsg" :side-bar-name="sideBarName" :side-bar-item="sideBarItem" :current-link="name">
      <main>

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

}

@media only screen and (max-width: 768px) {
main{
  padding: 0px 5px;

}
}

</style>
