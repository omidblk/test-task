<script setup>
 import { useToast } from "vue-toastification";
definePageMeta({
    layout: false
})
// Toast var
const toast = useToast()
// change password variables
const password = ref(null)
const c_password = ref(null)

async function changePass () {
    if (password === c_password) {
        
        try {
            const data = await $fetch('https://4d105af1-ad0b-4759-96f8-eabf65bffd23.mock.pstmn.io/api/account/profile',{
                method: 'PATCH',
                body: password
            })
            toast.success(data.message)
        } catch (error) {
            console.log(error);
        }
    }else{
        toast.error("تکرار رمز عبور مطابقت ندارد")
    }
}

</script>

<!-- ///////////////////////////    TEMPLATE    /////////////////////////////////// -->
<template>
    <div id="edit-pass" class="h-full w-full">
        <HeaderApp />
        <div class="h-3/4 p-16">
            <h4 class="text-4xl mb-36">تنظیم رمز عبور</h4>
            <div class="flex flex-col">
                <input v-model="password" type="password" name="password" class="py-8 px-10 rounded-sm" placeholder="رمز عبور">
                <input v-model="c_password" type="password" name="c_password" class="py-8 px-10 rounded-sm" placeholder="تکرار رمز عبور">
            </div>
            <div class="w-full bg-white flex justify-center py-8 mt-24">
                <button @click="changePass()" class="text-white py-2 px-48 rounded-md">
                    تایید
                </button>
            </div>
        </div>
    </div>
</template>
<!-- ///////////////////////////    STYLES    /////////////////////////////////// -->
<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
#edit-pass {
    background-color: #F6F6F6;
    button{
        background-color: $primary;
    }
}

::placeholder {
    text-align: right;
    padding-right: 50px;
    font-size: large;
}
</style>