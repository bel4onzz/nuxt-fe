<template>
    <div>
        <!-- <div class="container" :class="{ 'sign-up-mode': sign_up_mode.data }">
            <div class="forms-container">
                <div class="signin-signup">
                    <form action="#" class="sign-in-form">
                        <h2 class="title">Sign in</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Login" class="btn solid" />
                        <p class="social-text">Or Sign in with social platforms</p>
                        <div class="social-media">
                            <a href="#" class="social-icon">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                    <form action="#" class="sign-up-form">
                        <h2 class="title">Sign up</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" class="btn" value="Sign up" />
                        <p class="social-text">Or Sign up with social platforms</p>
                        <div class="social-media">
                            <a href="#" class="social-icon">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div class="panels-container">
                <div class="panel left-panel">
                    <div class="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button class="btn transparent" id="sign-up-btn" @click="toggleSignUpMode">
                            Sign up
                        </button>
                    </div>
                    <img src="~/assets/img/log.svg" class="image" alt="" />
                </div>
                <div class="panel right-panel">
                    <div class="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <button class="btn transparent" id="sign-in-btn" @click="toggleSignUpMode">
                            Sign in
                        </button>
                    </div>
                    <img src="~/assets/img/register.svg" class="image" alt="" />
                </div>
            </div>
        </div> -->

        <section class="bg-gray-50 min-h-screen flex items-center justify-center">
            <!-- login container -->
            <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                <!-- form -->
                <div class="md:w-1/2">
                    <h2 class="font-bold text-2xl text-[#002D74]">Login</h2>
                    <p class="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>

                    <form action="" class="flex flex-col gap-4 p-0">
                        <div class="relative">
                            <input v-model="formData.email" @blur="validateEmailInput"
                                :class="{ 'border-green-500': !errors.email.style, 'border-red-500': errors.email.style }"
                                class="p-2 mt-8 rounded-xl border w-full" type="email" name="email" placeholder="Email">

                            <Icon v-if="errors.email.icon" class="absolute top-4 right-3 h-full text-xl"
                                :class="[{ 'text-green-500': !errors.email.style, 'text-yellow-500': errors.email.style }]"
                                :name="`heroicons-solid:${errors.email.icon}`" />
                        </div>

                        <!-- <div class="relative">
                            <Form>
                                <Field name="password" v-slot="{ field, handleChange, handleBlur }"
                                    v-model="formData.password" class="p-2 rounded-xl border w-full"
                                    placeholder="Password" :rules="passwordRules">
                                    <input v-bind="field" :value="field.value" @change="handleChange" @blur="handleBlur"
                                        class="p-2 rounded-xl border w-full" type="password" name="password"
                                        placeholder="Password">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"
                                        class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                        <path
                                            d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </svg>
                                </Field>
                                <ErrorMessage name="password" />
                            </Form>
                        </div>
                        <div class="relative">
                            <input v-model="formData.confirmPassword" class="p-2 rounded-xl border w-full"
                                type="password" name="confirmPassword" placeholder="Confirm Password">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"
                                class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                                <path
                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path
                                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>
                        </div> -->
                        <button
                            class="bg-[#002D74] w-full rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
                    </form>

                    <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
                        <hr class="border-gray-400">
                        <p class="text-center text-sm">OR</p>
                        <hr class="border-gray-400">
                    </div>

                    <button
                        class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                        <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                            <path fill="#FFC107"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                            <path fill="#FF3D00"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                            <path fill="#4CAF50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                            <path fill="#1976D2"
                                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                        </svg>
                        Login with Google
                    </button>

                    <!-- <div class="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                        <a href="#">Forgot your password?</a>
                    </div> -->

                    <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                        <p>Forgot your password?</p>
                        <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Reset</button>
                    </div>
                    <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                        <p>Don't have an account?</p>
                        <button
                            class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button>
                    </div>
                </div>

                <!-- image -->
                <div class="md:block hidden w-1/2 ml-16">
                    <img class="rounded-2xl"
                        src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80">
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const passwordRules = yup.string().required().min(8);

// import { required, minLength } from 'vuelidate/dist/validators.min.js'
const sign_up_mode = reactive({ data: false });
const errors = reactive({
    email: {
        value: null,
        style: [],
        icon: null,
    },
    password: '',
    confirmPassword: null,
});

function toggleSignUpMode() {
    sign_up_mode.data = !sign_up_mode.data
}

const formData = reactive({
    email: '',
    password: '',
    confirmPassword: null,
});
// const rules = computed(() => {
//     return {
//         formData: {
//             email: { required, email },
//             password: { required, minLength: minLength(6) },
//             confirmPassword: { required, sameAs: sameAs(formData.password) },
//         },
//     };
// });

// function validateForm(){

// }
function validateEmailInput() {
    console.log("HElloworld")
    console.log(formData.email)
    if (formData.email.length < 10) {
        console.log("LESS THAN 10)")
        errors.email.style = true
        errors.email.icon = "exclamation"
    }
    else {
        console.log("More THAN 10)")
        errors.email.style = false
        errors.email.icon = "check-circle"
    }
}
// function validatePasswordInput(){}
</script>