<script setup>
definePageMeta({
    layout: false
})

</script>

<!-- ///////////////////////////    TEMPLATE    /////////////////////////////////// -->
<template>
    <div id="edit-pass" class="h-full w-full">
        <HeaderApp />
        <div class="h-3/4 p-16">
            <h4 class="text-4xl mb-36">تنظیم رمز عبور</h4>
            <div class="flex flex-col">
                <input type="password" class="py-8 px-10 rounded-sm" placeholder="رمز عبور">
                <input type="password" class="py-8 px-10 rounded-sm" placeholder="تکرار رمز عبور">
            </div>
            <div class="w-full bg-white flex justify-center py-8 mt-24">
                <button class="text-white py-2 px-48 rounded-md">
                    تایید
                </button>
            </div>
        </div>
    </div>
</template>
<!-- ///////////////////////////    STYLES    /////////////////////////////////// -->
<style lang="scss" scoped>
#edit-pass {
    background-color: #F6F6F6;
}

::placeholder {
    text-align: right;
    padding-right: 50px;
    font-size: large;
}
</style>