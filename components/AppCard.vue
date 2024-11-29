<script setup lang="ts">
const prop = defineProps(['users']);

const random = Math.floor(Math.random() * 4) + 1;

</script>

<template>

<div class="flex gap-3 p-4">
              <div
                class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                :style='`background-image: url("${prop.users.picture.large}");`'
              ></div>
              <div class="flex flex-1 flex-col items-stretch gap-2">
                <div class="flex flex-col gap-1">
                  <div class="flex flex-wrap items-center gap-3">
                    <p class="text-[#111518] text-base font-bold leading-tight">{{ prop.users.name.first }}</p>
                    <p class="text-[#60778a] text-sm font-normal leading-normal">{{ random }} days ago</p>
                  </div>
                  <p class="text-[#111518] text-base font-normal leading-normal">Brunch with the girls today! 🥂🍳👯</p>
                </div>
                <div
                  class="bg-center bg-no-repeat aspect-video bg-cover rounded-xl w-full max-w-[360px]"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/d30b8002-1aa2-4e67-b73f-f006e48facd9.png");'
                ></div>
              </div>
            </div>

</template>