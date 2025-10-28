<script setup>
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

* {
  box-sizing: border-box;
}

#title-page{
  margin: 90px 0px 60px;
  width: 100%;
}

.doc-list{
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  margin: 0 auto 60px;
  padding: 0 25px;
  box-sizing: border-box;
  overflow-x: hidden;
}

.dl-head{
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 10px;
  position: relative;
  padding-left: 12px;
}

.dl-head::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 60%;
  background: var(--red);
  border-radius: 2px;
}

.dl-items{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));
  gap: 20px;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  #title-page{
    margin: 60px 0px 40px;
    padding: 0 20px;
  }

  .doc-list{
    padding: 0 10px;
    gap: 15px;
    margin-bottom: 40px;
  }

  .dl-head{
    font-size: 18px;
    margin-bottom: 8px;
  }

  .dl-items{
    grid-template-columns: 1fr;
    gap: 15px;
  }
}

@media only screen and (max-width: 480px) {
  #title-page{
    padding: 0 10px;
  }

  .doc-list{
    padding: 0 5px;
  }

  .dl-head{
    font-size: 16px;
    padding-left: 10px;
  }

  .dl-items{
    gap: 12px;
  }
}

</style>
