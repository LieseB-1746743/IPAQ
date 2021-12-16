<template>
    <div class="panel-body">
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
