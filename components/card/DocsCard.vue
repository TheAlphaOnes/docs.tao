<script setup>
const props = defineProps({
   head:{
    default:"Head",
   },
   sub:{
    default:'sub'
   },
   type:{
    default:"service"
   },
   link:{
    default:"/"
   }
})
</script>

<template>
<NuxtLink :to="props.link">
  <div class="docs-card">
    <div class="dc-head"> {{ props.head }}</div>
    <div class="dc-sub">{{ props.sub}}</div>
    <div :class="props.type === 'tool'? 'dc-type dc-type-blue':'dc-type dc-type-pink' ">{{ props.type }}</div>
  </div>
</NuxtLink>
</template>

<style scoped>
.docs-card{
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background-color: var(--bg);
  border: 1px solid var(--border);
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
}

a{
text-decoration: none;
}

.dc-head{
  font-size: 20px;
  color: whitesmoke;
  border-bottom: 2px solid transparent;
  transition: all ease-in-out 200ms;
}

.dc-head:hover{
  border-bottom: 2px solid var(--red);
}

.dc-sub{
  font-size: 15px;
  background-color: var(--bg4);
  border-radius: 5px;

  padding:  0px 10px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* min-width: 80px; */

}

.dc-type-pink{
  border: 1px solid var(--pink);
  color: var(--pink);
}

.dc-type-blue{
  border: 1px solid var(--blue);
  color: var(--blue);
}

/* .dc-type-blue:hover{
  border: 1px solid var(--blue);
  background-color: var(--blue);
  color: var(--bg);
}

.dc-type-pink:hover{
  border: 1px solid var(--pink);
  background-color: var(--pink);
  color: var(--bg);
} */

.dc-type{

  transition: all ease-in-out 300ms;
  width: 45px;
  padding: 2px 5px;
  font-weight: 700;
  font-size: 13px;
  font-family: var(--font-k2d);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:5px ;

  margin-left: auto;
  /* margin-right: 15px; */
}

</style>
