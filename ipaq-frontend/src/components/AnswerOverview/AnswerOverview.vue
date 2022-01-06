<template>
    <div>
      <h4 class="parttitle">{{partTitle}}</h4>
      <div v-for="pair in questionAnswerPairs" :key="pair[0]">
        <p v-html="pair[0]"></p>
        <i><p><b>Answer:</b> {{pair[1]}}</p></i>
      </div>
    </div>
</template>

<script lang="ts" src="./AnswerOverview.ts">
</script>

<style scoped>
  .parttitle {
    margin-top: 30px;
    margin-bottom:20px;
  }
</style>