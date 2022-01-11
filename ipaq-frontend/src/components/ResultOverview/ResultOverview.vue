<template>
<div id="res">
  <h3>Your IPAQ RAPPORT</h3>
  {{this.results}}
  {{this.user.formtype}}
   <p :v-if="user.formtype==long"> <b> {{user.first_name}} {{user.last_name}}</b> filled out the <b>IPAQ long form</b></p>



<table :v-if="user.formtype==long" class="table">
  <tbody>
    <tr>
      <th>Name</th>
      <td> {{user.first_name}} {{user.last_name}}</td>
    </tr>
    <tr>
      <th>Form ID</th>
      <td>000457458931</td>
    </tr>
 
    <tr v-if="user.formtype=='long'">
    <th>Form type</th>
    <td> LONG IPAQ</td> 
    </tr>
    <tr v-if="user.formtype=='short'">
    <th>Form type</th>
    <td> SHORT IPAQ</td> 
    </tr>
    <tr v-if="user.formtype=='elderly'">
    <th>Form type</th>
    <td> ELDERLY IPAQ</td> 
    </tr>
    <tr>
      <th>Categorical Score</th>
      <td>{{results.categoricalScore}}</td>
    </tr>
    <br/> 
    DETAILS
    <tr>
      <th>Email</th>
      <td>johncarter@mail.com</td>
    </tr>
  </tbody>
</table>


 
  BUTTON SEND MAIL - Checkbox : Send every rapport to me

</div>
</template>




<script lang="ts" src="./ResultOverview.ts">
</script>

<style scoped>
#res{
    margin-top: 1.5rem;
}
</style>