<template>
    <!-- Featured Section -->
    <section class="container mx-auto px-16 lg:px-32 mb-28">
        <div class="flex justify-center my-10">
            <div class="text-center w-5/6">
                <h1 class="text-4xl font-bold">Bubble Tea</h1>
                <p class="py-5">
                    Experimenta el deleite de los sabores exóticos en cada sorbo. Desde el clásico Té Negro con perlas
                    de tapioca hasta las innovadoras combinaciones de frutas frescas y gelatinas, nuestro Bubble Tea es
                    una aventura para tu paladar.
                </p>
            </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-5 ">
            <div v-for="item in bubbleTes">
                <FeaturedProduct :title="item.title" :desc="item.desc" :image="item.image" :small="item.small"
                    :large="item.large" />
            </div>
        </div>
    </section>

    <section class="container mx-auto px-16 lg:px-32 mb-28">
        <div class="flex justify-center my-10">
            <div class="text-center w-5/6">
                <h1 class="text-4xl font-bold">Tés Afrutados Fríos</h1>
                <p class="py-5">
                    Experimenta el deleite de los sabores exóticos en cada sorbo. Desde el clásico Té Negro con perlas
                    de tapioca hasta las innovadoras combinaciones de frutas frescas y gelatinas, nuestro Bubble Tea es
                    una aventura para tu paladar.
                </p>
            </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-5 ">
            <div v-for="item in coldTes">
                <FeaturedProduct :title="item.title" :desc="item.desc" :image="item.image" :small="item.small"
                    :large="item.large" />
            </div>
        </div>
    </section>

    <section class="container mx-auto px-16 lg:px-32 mb-28">
        <div class="flex justify-center my-10">
            <div class="text-center w-5/6">
                <h1 class="text-4xl font-bold">Otros Productos</h1>
                <p class="py-5">
                    Experimenta el deleite de los sabores exóticos en cada sorbo. Desde el clásico Té Negro con perlas
                    de tapioca hasta las innovadoras combinaciones de frutas frescas y gelatinas, nuestro Bubble Tea es
                    una aventura para tu paladar.
                </p>
            </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5  ">
            <div v-for="item in otros">
                <FeaturedProduct :title="item.title" :desc="item.desc" :image="item.image" :price="item.price" />
            </div>
        </div>
    </section>
    <!-- End Featured Section -->
</template>

<script setup lang="ts">

import FeaturedProduct from './featured-product.vue'


const bubbleTes = [
    { title: "Té Clásico", desc: "Té de .....", image: "/tes/te-clasico.png", small: 5.00, large: 5.50 },
    { title: "Té de Jazmín", desc: "Té de .....", image: "/tes/te-jazmin.png" },
    { title: "Té de Taro", desc: "Té de .....", image: "/tes/te-taro.png" },
    { title: "Té de Chocolate", desc: "Té de .....", image: "/tes/te-chocolate.png" },

]


const coldTes = [
    { title: "Té de Limón Fresco", desc: "Té de .....", image: "/tes/te-clasico.png", small: 5, large: 5.50 },
    { title: "Té de Limón con Yogurt", desc: "Té de .....", image: "/tes/te-jazmin.png", small: 5.00, large: 5.50 },
    { title: "Té de Uva y Lima", desc: "Té de .....", image: "/tes/te-taro.png", small: 5.00, large: 5.50 },
    { title: "Té Negro con Limón", desc: "Té de .....", image: "/tes/te-chocolate.png", small: 5.00, large: 5.50 },
    { title: "Té de Naranja", desc: "Té de .....", image: "/tes/te-clasico.png", small: 5.00, large: 5.50 },
    { title: "Té de Mango", desc: "Té de .....", image: "/tes/te-jazmin.png", large: 5.50 },
    { title: "Té de Arándanos", desc: "Té de .....", image: "/tes/te-taro.png", small: 5.00, large: 5.50 },
    { title: "Té Azul", desc: "Té de .....", image: "/tes/te-chocolate.png", small: 5.00, large: 5.50 },
]

const otros = [
    { title: "Ramune", desc: "Fresa/Melón/Limón/Piña/Lychee", image: "/tes/12.jpg", price: 3 },
    { title: "Mochi", desc: "Chocolate/Vainilla/Banana y Chocolate/Mango/Queso Fresa", image: "/tes/13.jpg", price: 2.5 },
    { title: "Dorayaki", desc: "Chocolate/Judías Rojas", image: "/tes/14.jpg", price: 3 }
]

</script>