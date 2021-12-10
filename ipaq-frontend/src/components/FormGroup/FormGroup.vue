<template>
    <div>
        <FormulateForm
            v-model="currentAnswers"
            :schema="questionsSchema"
        />
        {{currentAnswers}}
    </div>
</template>

<script lang="ts" src="./FormGroup.ts">
</script>
