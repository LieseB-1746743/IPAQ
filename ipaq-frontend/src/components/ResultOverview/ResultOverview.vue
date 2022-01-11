<template>
<div id="res">
  <h3>Your IPAQ RAPPORT</h3>
  {{this.results}}
  


  
  <p> {{user.first_name}} {{user.last_name}} filled out application form </p>

</div>
</template>




<script lang="ts" src="./ResultOverview.ts">
</script>

<style scoped>
#res{
    margin-top: 1.5rem;
}
</style>