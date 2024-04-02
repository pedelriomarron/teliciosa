<template>
    <!-- Header Section -->
    <section class="container mx-auto px-16 lg:px-36 lg:flex pt-12 mb-20 justify-center  ">
        <BannerTitle />
        <!-- banner image -->
        <div class="relative">
            <div class="z-10">
                <img class="" src="/images/banner.png" alt="Tea" />
            </div>
            <div
                class="dark:bg-gray-800 shadow-lg absolute top-28 px-2 md:px-10 md:top-96 md:left-32 py-2 lg:top-96 lg:left-28 bg-white lg:px-6 lg:py-4 rounded-lg flex">
                <div class="flex items-center">
                    <i class="fa-solid fa-star text-2xl text-amber-300"></i>
                </div>
                <div class="ml-2">
                    <h2 class="font-bold lg:text-2xl">5.00</h2>
                    <a target="_blank" href="https://g.co/kgs/9JgySsw">Google Reseñas</a>
                </div>
            </div>
        </div>
    </section>
    <!-- End Header Section -->
</template>

<script setup lang="ts">
import BannerTitle from '@/components/banner-title.vue'

</script>
