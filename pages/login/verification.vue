<script setup>
definePageMeta({
    layout:false
})
// Login variables
let login = useState('login')
const user = useState('user')
const formData = reactive({
    code:null
})
async function submit () {
    try {
        const data = await $fetch('https://4d105af1-ad0b-4759-96f8-eabf65bffd23.mock.pstmn.io/api/auth/login/confirm',{
            method: 'POST',
            body: formData
        })
        login.value = true
        console.log(login);
        navigateTo('/user')
        console.log(data);
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
            <span class="text-3xl font-bold mt-4 mb-10">کد تایید را وارد کنید</span>
            <label for="name">کد تایید برای شماره  {{ user.data.mobile }}  ارسال شد</label>
            <input type="text" name="name" v-model=" formData.code " class="mt-1 py-3 bg-slate-100 rounded-sm" placeholder="لطفا کد تایید را وارد کنید">
            <p class="cursor-pointer text-xs mt-4">ارسال مجدد کد</p>
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