<template>


    <!-- News and Events Section -->
    <section class="container mx-auto px-16 lg:px-32 min-h-full mb-10">

        <div class="flex justify-center">
            <div class="text-center md:w-3/4">
                <h1 class="font-semibold text-5xl mb-5">Noticias y Eventos</h1>
                <p class="my-10">
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don't look even slightly
                    believable.
                </p>
            </div>
        </div>


        <!--
        <div class="flex justify-center">
            <div class="w-3/4">
                <iframe class="w-full" height="710" frameborder="0" scrolling="no" allowtransparency="true"
                    src="https://www.instagram.com/teliciosa/embed"></iframe>
            </div>
        </div>
 -->



        <div class="grid md:grid-cols-3 gap-6">
            <div v-for="item in instaImages" class="rounded-lg border-zinc-100 border-2">
                <img class="w-5/6 mx-auto my-5 rounded-lg border-zinc-100 border-2" :src="item.media_url" alt="" />
                <div class="p-10">
                    <small>{{ formattedDate(item.timestamp) }}</small>
                    <h1 class="text-xl font-bold">
                        {{ item.caption }}
                    </h1>
                    <a target="_blank" :href="item.permalink">
                        <strong>
                            <h5 class="pt-3 text-orange-900 dark:text-orange-400">Ver Publicación</h5>
                        </strong>

                    </a>
                </div>
            </div>
        </div>

    </section>
    <!-- News and Events Section -->
</template>


<script setup>

import { ref, onMounted } from "vue"
const instaImages = ref([])




function getInstagram() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "get",
        headers: myHeaders,
        redirect: "follow",

    };

    fetch("https://v1.nocodeapi.com/pedelrio/instagram/DdysNXkQBeAJsjvU", requestOptions)
        .then(response => response.text())
        .then(result => {
            instaImages.value = JSON.parse(result).data
            console.log(instaImages.value)

        }
        )
        .catch(error => console.log('error', error));
}

getInstagram()

function formattedDate(str) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(str);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}
</script>