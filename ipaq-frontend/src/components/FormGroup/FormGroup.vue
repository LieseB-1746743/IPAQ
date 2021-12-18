<template>
    <div class="panel-body">
        <h2> {{part.ipaqPartTitle}} </h2>
        <p> {{part.ipaqPartAnnotation}} </p>
        <h4> Questions </h4>
        <vue-form-generator 
            v-for="item in filteredSchemas"
            :key="item.id"
            :schema="item.schema"
            :model="model"
            :options="formOptions">
        </vue-form-generator>
    </div>
</template>

<script lang="ts" src="./FormGroup.ts">
</script>
