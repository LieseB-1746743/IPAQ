<template>
    <div class="panel-body">
        <h2> {{part.ipaqPartTitle}} </h2>
        <img :src="getImgUrl(imageSource)" height="80rem" width="80rem" v-if="imageSource!=''"/> 
        <p> {{part.ipaqPartAnnotation}} </p>
        <h4> Questions </h4>
        <vue-form-generator 
            v-for="item in filteredSchemas"
            :key="item.id"
            :schema="item.schema"
            :model="model"
            :options="formOptions"
            @validated="validatedfunct">
        </vue-form-generator>
    </div>
</template>

<script lang="ts" src="./FormGroup.ts">
</script>
