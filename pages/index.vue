<script setup lang="ts">
import BasicCenterTitle from '~/components/base/BasicCenterTitle.vue';
import BasicPage from '~/components/base/BasicPage.vue';
import DocsCard from '~/components/card/DocsCard.vue';



const { data: docs, error } = await useFetch('/api/md/data')

if (error.value) {
  console.error('Error loading docs:', error.value)
}


</script>


<template>
<BasicPage :is-page="!error">

  <div id="title-page" >

    <BasicCenterTitle subs="EVERYTHING YOU NEED TO BUILD TO BUILD, USE, AND EXTEND PRODUCTS."  head="EXPLORE THE DOCS"/>
  </div>



  <div class="doc-list reveal" v-for="tool, index in docs?.md || []" :key="tool.name"  :style="{animationDelay:`${(index+1)*300}ms`}">


      <div class="dl-head"> {{ tool.name.toUpperCase() }} DOCS</div>
      <div class="dl-items">

        <DocsCard v-for="item,index in tool.items" :key="item.link"   :link="`/docs/${tool.name}/${item.link}`" :head="item.name" :sub="item.sub" :type="item.type"/>
      </div>


  </div>

</BasicPage>

</template>


<style scoped>

#title-page{
margin: 90px 0px;

}

.doc-list{
width: calc(100vw - 100px);
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 10px;
margin: 25px;
}

.dl-head{
  font-size: 20px;
}

.dl-items{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  flex-wrap: wrap;


}




</style>
