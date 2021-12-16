<template>
    <div class="panel-body">
        <vue-form-generator v-if="schemas[0].showif" :schema="schemas[0].schema" :model="model" :options="formOptions"></vue-form-generator>
        <vue-form-generator v-if="schemas[1].showif" :schema="schemas[1].schema" :model="model" :options="formOptions"></vue-form-generator>
        {{schemas[0].showif}}
        {{schemas[1].showif}}
        {{model}}
        
    </div>
</template>

<script lang="ts" src="./FormGroup.ts">
</script>
