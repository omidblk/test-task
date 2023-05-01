<script setup>

</script>

<!-- ///////////////////////////    TEMPLATE    /////////////////////////////////// -->
<template>
    <section class="main-bar flex flex-col justify-start pt-16 items-center text-5xl leading-normal font-bold ">
            <div class="border-b-8 p-9 mb-9">
                <h3 class="text-center ">نقشه راه یادگیری <br>مهارت آیلتس</h3>
            </div>
            <div class="text-center text-blue-800">
                <h5>سطح : متوسط</h5>
                <h5 class="">تیپ 3 متوسط ، ج (C33)</h5>
            </div>
        </section>
    <main class="m-20 ">
        <section class="p-10 bg-white">
            <h5 class="text-2xl text-blue-600 mb-8 font-bold">توصیه مربی</h5>
            <p class="text-xl">
                سلام <br>
                به سطح متوسط از مسير يادگيري آيلتس خوش اومديد<br>
                پيشنهاد مي كنيم براي مشاهد با مطالعه محتواي آموزشي ، مثل يك كلاس درس ، فضاي آرامي رو پيدا كنيد و تمركز بالا
                داشته باشد. ضمنا يادداشت برداري فراموش نشه .
            </p>
        </section>
        <section class="p-10 bg-white flex justify-between mt-10 items-center text-xl">
            <p>وضعیت اشتراک : رایگان (فریمیوم)</p>
            <button class="ml-10 py-4 px-40 border-4 rounded-lg border-green-300 text-green-300">ارتقا اشتراک</button>
        </section>
        <UniteApp class="my-10"/>
        <PractiseApp class="mt-14"/>
        <PractiseApp class="mt-14"/>
    </main>
</template>
<!-- ///////////////////////////    STYLES    /////////////////////////////////// -->
<style lang="css">
.main-bar {
    background-image: url(~/assets/images/background1.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 115vh;
}
</style>