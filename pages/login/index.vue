<script setup>
definePageMeta({
    layout:false
})
// Login variables
const mobile = useState('mobile', ()=> null)
const formData = reactive({
    mobile: mobile
})
async function submit () {
    try {
        const data = await $fetch('https://4d105af1-ad0b-4759-96f8-eabf65bffd23.mock.pstmn.io/api/auth/login',{
            method: 'POST',
            body: formData
        })
        const user = useState('user',()=> data )
        navigateTo('login/verification')
    } catch (error) {
        console.log(error);
    }
} 
// 

</script>

<!-- ///////////////////////////    TEMPLATE    /////////////////////////////////// -->
<template>
    <div id="login" class="w-full h-screen flex justify-center items-center">
        <section class="bg-white flex flex-col w-1/3 p-10">
            <img src="/logo1.png" alt="logo" class="h-20 w-1/2 mx-auto">
            <span class="text-3xl font-bold mt-4 mb-10">ورود | عضویت</span>
            <label for="name">نام کاربری</label>
            <input type="text" name="name" v-model=" mobile " class="mt-1 py-3 bg-slate-100 rounded-sm" placeholder="لطفا شماره موبایل یا ایمیل خود را وارد کنید">
            <p class="mt-3 text-sm" >ورود شما به معنای پذیرش <NuxtLink to="/">شرایط میفارو</NuxtLink> و <NuxtLink to="/">قوانین و حریم خصوصی</NuxtLink> است . </p>
            <button @click="submit()" class="text-white mt-8 py-2 mx-6 rounded-md">
                تایید
            </button>
            {{ mobile }}
        </section>
    </div>
</template>
<!-- ///////////////////////////    STYLES    /////////////////////////////////// -->
<style lang="scss" scope>
@import '~/assets/scss/variables.scss';
#login{
    background-color: #F6F6F6;
}
::placeholder{
    text-align: center;
}
p{
    a{
        color: $primary;
    }
}
button{
    background-color: $primary;
}
</style>