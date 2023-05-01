<script setup>

</script>

<!-- ///////////////////////////    TEMPLATE    /////////////////////////////////// -->
<template>
    <div class="flex">
        <div class="flex relative w-1/4">
            <img src="/casual-life-3d-yellow-pink-and-beige-books-lying-on-top-of-each-other 3.png" alt="books"
                class="absolute top-20 right-0">
            <img src="/business-3d-yellow-pencil-with-eraser-on-top-1 1.png" alt="pencil" class="absolute top-0 right-48">
        </div>
        <div class="flex justify-between w-3/4 px-16 py-12 bg-white rounded-sm mt-8">
            <h4 class="pl-40">منبع یک </h4>
            <button class="finish text-white px-14 py-1 rounded-sm">انجام شد؟</button>
            <button class="more text-white px-14 py-1 rounded-sm">مشاهده</button>
            <span class="time px-4 py-1 rounded-sm bg-slate-300">5 دقیقه</span>
        </div>
    </div>
</template>
<!-- ///////////////////////////    STYLES    /////////////////////////////////// -->
<style lang="scss">
@import '../assets/scss/main.scss';
.practise{
    .finish{
        background-color: $secondary;
    }
    .more{
        background-color: $primary;
    }
    .time{
        color: $primary;
    }
}
</style>
