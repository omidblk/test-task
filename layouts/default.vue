<template>
    <div>
        <HeaderApp/>
        <slot/>
        <FooterApp/>
    </div>
</template>
<style lang="scss">
@import'~/assets/scss/main.scss';
body{
    background-color: $background-color;
}
</style>