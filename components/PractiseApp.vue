<script setup>

</script>

<!-- ///////////////////////////    TEMPLATE    /////////////////////////////////// -->
<template>
    <section class="practise">
        <h4 dir="ltr" class="text-white text-xl ">skim a text quickly to understand the general idea </h4>
        <div class="flex flex-col gap-5">
            <StorePractice/>
            <StorePractice/>
            <div class="w-full flex justify-center mt-10">
                <span class="exersice bg-white py-4 px-8">
                    تمرین ها (3/0)
                </span>
            </div>
        </div>
    </section>
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
    .exersice{
        color: $primary;
    }
}
    
</style>