<template>
    <input v-model="email" type="text" name="email" class="p-2 mt-8 rounded-xl border w-full">
    <span class="text-red-700">{{ emailError }}</span>
    <br>
    <input v-model="password" type="password" name="password" class="p-2 mt-8 rounded-xl border w-full">
    <span class="text-red-700">{{ passwordError }}</span>
    <br>
</template>
<script setup>
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
// const email = ref()
// const password = ref()
// // Define a validation schema
// const schema = yup.object({
//     email: yup.string().required().email(),
//     password: yup.string().required().min(8),
// });

// // Create a form context with the validation schema
// const { errors, useFieldModel } = useForm({
//     validationSchema: schema,
// });

const { value: email, errorMessage: emailError } = useField('password', yup.string().required().min(8));
const { value: password, errorMessage: passwordError } = useField('password', yup.string().required().min(8));
</script>