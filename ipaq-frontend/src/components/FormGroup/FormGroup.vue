<template>
  <div class="panel-body">
    <div>
      <img
        id="activityTypeImg"
        :src="getImgUrl(imageSource)"
        v-if="imageSource != ''"
      />
      <h2>{{ part.ipaqPartTitle }}</h2>
      <p>{{ part.ipaqPartAnnotation }}</p>
    </div>
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
    <br/>
    <h4 v-if='fitbitSource!=""'> Tracked data </h4>
    <img
        id="fitbitTypeImg"
        :src="getImgUrl(fitbitSource)"
        v-if="fitbitSource != ''"
      />
  </div>
</template>

<script lang="ts" src="./FormGroup.ts"></script>

<style scoped>
#activityTypeImg {
  float: right;
  width: 100px;
  height: auto;
}
#fitbitTypeImg {
  float: center;
  width: 25rem;
  height: auto;
  border: 0.01rem solid #021a40;
  padding:1px;
   background-color:#555;
  
}
@media only screen and (min-width: 500px) {
  #activityTypeImg {
    width: 150px;
  }
}
</style>
