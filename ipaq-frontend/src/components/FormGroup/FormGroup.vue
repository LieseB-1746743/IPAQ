<template>
    <div>
        <FormulateForm
            v-model="currentAnswers"
            :schema="questionsSchema"
            :error-behaviour="live"
        />
        {{currentAnswers}}
    </div>
</template>

<script lang="ts" src="./FormGroup.ts">
</script>
