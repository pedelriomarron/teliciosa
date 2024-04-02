<template>
  <div class="dark:bg-gray-800 dark:text-white">
    <DarkMode />
    <Header />
    <Featured />
    <GreatTea />
    <!-- 
    <Clients />
    -->
    <News class=" " />
    <Map />
    <Footer />
    <!-- End Footer Section -->
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/footer.vue'
import News from '@/components/news.vue'
import Header from '@/components/header.vue'
import Featured from '@/components/featured.vue'
import GreatTea from '@/components/great-tea.vue'
import Map from '@/components/map.vue'
import Clients from '@/components/clients.vue'
import DarkMode from '@/components/darkmode.vue'

</script>
