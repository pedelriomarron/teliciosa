<template>
    <!--banner title -->
    <div class=" items-center">
        <div>
            <h1 class="text-5xl sm:text-7xl md:text-7xl font-semibold title-banner">
                <span class="text-orange-600" style="white-space: nowrap; font-size: 90%;">T E L I C I O S A</span>
                <br />
                <span class="text-orange-700">Bubble Tea</span>
                <br />
                <span class="text-orange-800">en Córdoba</span>
            </h1>
            <br />
            <p class="w-3/4 leading-relaxed">
                Puesto de Bubble Tea en Córdoba.
            </p>
            <br />
            <div style="display: flex; gap: 1rem;">
                <router-link to="/">
                    <button
                        class="bg-gradient-to-r from-orange-400 via-orange-600 to-red-600 px-5 py-2 text-white rounded-lg">
                        <strong>Carta</strong>
                    </button>
                </router-link>

                <a class="bg-gradient-to-r from-red-400 via-red-600 to-red-700 px-5 py-2 text-white rounded-lg"
                    target="_blank" href="https://www.just-eat.es/restaurants-teliciosa-cordoba/menu">
                    <strong>Just Eat</strong>
                </a>
            </div>
        </div>
    </div>
</template>

<style>
.title-banner {
    font-family: 'choco_berry';
}
</style>