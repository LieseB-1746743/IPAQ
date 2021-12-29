<template>
    <div>
    <lo v-for="line in formOverview" :key="line" > 
    <div v-html="line"></div>
    </lo>

     <!--- <ol v-for="item in schemas" :key="item.id">   

     <li v-for="field in item.schema.fields" :key="field.label">
     
    {{ field.label }}
     </li>
      </ol> --->
  
    </div>
</template>

<script lang="ts" src="./AnswerOverview.ts">
</script>
