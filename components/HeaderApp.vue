<script setup>
const login = useState('login', () => false)
function user() {
   if ( login.value ) {
    navigateTo('/user')
   }else{
    navigateTo('/login')
   }
}

</script>

<!-- ///////////////////////////    TEMPLATE    /////////////////////////////////// -->
<template>
    <header id="header" class="bg-slate-100 pt-5">
        <section id="main-header"
            class="bg-slate-100 flex justify-between items-center border-b-4 border-slate-200 w-full px-10 py-2 fixed top-0">
            <h3 class="flex items-center cursor-pointer">
                <font-awesome-icon :icon="['far', 'newspaper']" class="text-4xl ml-10" />
                <span class="text-xl">
                    بلاگ
                </span>
            </h3>
            <NuxtLink to="/"><img src="/logo1.png" alt="logo" class="h-10 cursor-pointer"></NuxtLink>
            <NuxtLink to="" class="px-4 py-2 cursor-pointer">
                <button class="bg-transparent" @click.prevent="user()">
                    <font-awesome-icon :icon="['far', 'user']" />
                    <span class="mr-10">حساب کاربری</span>
                </button>
            </NuxtLink>
        </section>
        <nav id="bottom-header" class="mt-10 py-3 px-10 text-lg">
            <ul class="flex">
                <li class="mr-10 cursor-pointer">
                    <NuxtLink to="/" active-class="active">
                        <font-awesome-icon :icon="['fas', 'home']" />
                        <span class="mr-8">خانه</span>
                    </NuxtLink>
                </li>
                <li class="mr-10 cursor-pointer">
                    <NuxtLink to="" active-class="active">
                        <font-awesome-icon :icon="['far', 'edit']" />
                        <span class="mr-8">تمرین</span>
                    </NuxtLink>
                </li>
                <li class="mr-10 cursor-pointer">
                    <NuxtLink to="/road-map" active-class="active">
                        <font-awesome-icon :icon="['fas', 'map-signs']" />
                        <span class="mr-8">مسیر یادگیری</span>
                    </NuxtLink>
                </li>
                <li class="mr-10 cursor-pointer">
                    <NuxtLink to="/contact-us" active-class="active">
                        <font-awesome-icon :icon="['fas', 'comments']" />
                        <span class="mr-8">تماس با ما</span>
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>
<!-- ///////////////////////////    STYLES    /////////////////////////////////// -->
<style lang="scss">
@import'../assets/scss/main.scss';

.active {
    color: $primary;
}
</style>