<script setup>
function changePass(){
    navigateTo('/user/editPass')
}

</script>

<!-- ///////////////////////////    TEMPLATE    /////////////////////////////////// -->
<template>
    <div class="text-white text-center h-screen flex flex-col justify-center items-center">
        <p>user profile</p>
        <button @click="changePass()" class="py-2 px-6 rounded-md ">تغییر رمز عبور</button>
    </div>
</template>
<!-- ///////////////////////////    STYLES    /////////////////////////////////// -->
<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
button{
    background-color: $secondary;
    transition: all .3s linear;
    &:hover{
        color: $primary;
    }
}
    
</style>