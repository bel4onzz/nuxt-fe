<template>
    <div>
        <input v-model="value" type="text" />
        <span>{{ errorMessage }}</span>
    </div>
</template>
<script setup>
import { toRef } from 'vue';
import { useField } from 'vee-validate';
import * as yup from 'yup';
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
});
// make sure to convert the name prop to a ref to maintain its reactivity
// this way vee-validate can react to the field name changing
const nameRef = toRef(props, 'name');
const { errorMessage, value } = useField(nameRef, yup.string().required().email());
</script>