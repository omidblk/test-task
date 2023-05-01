<script setup>

</script>

<!-- ///////////////////////////    TEMPLATE    /////////////////////////////////// -->
<template>
    <article class="unite">
        <div class="flex flex-row-reverse">
            <h3 class="unite-num p-3 border-4 rounded-lg mb-10 text-white">
                unite one
            </h3>
        </div>
        <h3 class="unite-title text-white ltr mb-3">
            <font-awesome-icon :icon="['fas', 'map-pin']" class="mr-3 text-red-400 text-xl" />
            the man - made enviroment
        </h3>
        <section class="unite-content bg-white p-5 text-xl flex flex-col gap-10">
            <p>
                سلام
            </p>
            <p>
                
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <p>
                
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <p>
                نکته مهم
            </p>
            <p>
                
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <p dir="ltr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet perferendis saepe ea vero! Sed quos pariatur nobis ipsa tenetur asperiores atque in expedita repellendus, repudiandae quisquam alias ut at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias provident ipsa quibusdam aliquam dolorum, obcaecati dolores magni natus voluptas exercitationem deserunt doloribus, accusantium voluptatibus illo explicabo blanditiis placeat temporibus aperiam!</p>
            
            <UniteSection/>
            <UniteSection/>
            <UniteSection/>
        </section>
        <section id="practises">
            
        </section>
    </article>
</template>
<!-- ///////////////////////////    STYLES    /////////////////////////////////// -->
<style lang="scss">
@import '~/assets/scss/main.scss';
.unite{
    .unite-num{
        text-transform: uppercase;
        border-color: $secondary;
    }
    .unite-title{
        text-transform: uppercase;
        direction: ltr;
    }
    ul{
        list-style: disc;
    }
}
    
</style>