<template>
  <div class="panel-body">
    <div>

      <!-- Title, icon and explanation of this part  -->
      <img
        id="activityTypeImg"
        :src="getImgUrl(imageSource)"
        v-if="imageSource != ''"
      />
      <h2>{{ part.ipaqPartTitle }}</h2>
      <p>{{ part.ipaqPartAnnotation }}</p>
    </div>
    
    <!-- Fitbit data if available -->
    <p v-if='fitbitSource!=""'> Your Fitbit activity data may help you with answering the following questions.</p>
    <img v-if="fitbitSource != ''" :src="getImgUrl(fitbitSource)" class="rounded mx-auto d-block" style="margin-bottom: 20px; max-width: 350px; height=auto;"/>


    <!-- Questions -->
    <h4>Questions</h4>
    <vue-form-generator
      v-for="item in filteredSchemas"
      :key="item.id"
      :schema="item.schema"
      :model="model"
      :options="formOptions"
      @validated="validatedfunct"
    >
    </vue-form-generator>
  </div>
</template>

<script lang="ts" src="./FormGroup.ts"></script>

<style scoped>
#activityTypeImg {
  float: right;
  width: 100px;
  height: auto;
}

@media only screen and (min-width: 500px) {
  #activityTypeImg {
    width: 150px;
  }
}
</style>
