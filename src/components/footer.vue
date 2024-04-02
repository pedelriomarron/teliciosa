<template>
    <!-- Footer Section -->
    <footer class="bg-red-50 px-20 md:px-40 min-h-full pt-10 dark:bg-orange-800">
        <div class="mb-14 flex flex-col items-center border-b border-gray-200 px-6 py-4">
            <img src="/logo.jpg" alt=""
                class=" mb-2 rounded-full border-4 border-orange-500 p-1 hover:rotate-180 transition duration-500">
        </div>

        <div class="grid md:grid-cols-3 gap-4">
            <div class=" flex flex-col items-center">

                <div class="grid grid-cols-2">
                    <div>
                        <h1 class="font-bold my-4">Nuestros Servicios</h1>
                        <ul class="space-y-2">
                            <li>Life Insurance</li>
                            <li>Car Insurance</li>
                            <li>Health Insurance</li>
                            <li>House Insurance</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class=" flex flex-col items-center">
                <div class="grid grid-cols-1">
                    <h1 class="font-bold my-4">Help</h1>
                    <ul class="space-y-2">
                        <li>FAQs</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div class=" flex flex-col items-center">
                <div class="grid grid-cols-2">
                    <div>
                        <h3 class="font-medium text-xl my-4">
                            Siguenos en nuestras<br> redes sociales!
                        </h3>
                        <div class="flex justify-between w-2/5">
                            <a href="https://www.instagram.com/teliciosa/" target="_blank"><i
                                    class="fa-brands fa-tiktok"></i></a>
                            <a href="https://www.instagram.com/teliciosa/" target="_blank"><i
                                    class="fa-brands fa-tiktok"></i></a>
                            <a href="https://www.instagram.com/teliciosa/" target="_blank"><i
                                    class="fa-brands fa-square-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-center py-12">© {{ currentYear }} All rights reserved | Designed with ❤️ by Pedro del Río</p>
    </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
