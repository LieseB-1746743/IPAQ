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
