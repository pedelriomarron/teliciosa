<template>
    <div
        class="bg-gradient-to-r from-zinc-50 to-stone-50 text-center p-6 rounded-xl relative mb-10 dark:bg-gray-900 dark:bg-gradient-to-r dark:from-zinc-950 dark:to-stone-950">
        <img class="mx-auto h-64 w-full object-contain" :src="image" alt="" />
        <h1 class="text-xl font-bold pt-5">{{ title }}</h1>
        <p>{{ desc }}</p>
        <br>
        <!-- Precios para grande y chico -->
        <div v-if="large != 0 || small != 0" class="flex justify-around">
            <div v-if="small != 0"
                class="cursor-pointer hover:text-blue-500 transition duration-500 transform hover:scale-105">
                <p class="font-bold">Mediano:</p>
                <p>{{ small.toFixed(2) }} €</p>
            </div>
            <div v-if="large != 0"
                class="cursor-pointer hover:text-blue-500 transition duration-500 transform hover:scale-105">
                <p class="font-bold">Grande:</p>
                <p>{{ large.toFixed(2) }} €</p>
            </div>
        </div>
        <div v-if="price != 0" class="flex justify-around">
            <div class="cursor-pointer hover:text-blue-500 transition duration-500 transform hover:scale-105">
                <p class="font-bold">Precio:</p>
                <p>{{ price.toFixed(2) }} €</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    title: String,
    desc: String,
    image: String,
    small: {
        type: Number,
        default: 0
    },
    large: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    }
})
</script>
