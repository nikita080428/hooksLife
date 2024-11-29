<script setup lang="ts">
const NuxtApp = useNuxtApp();
const route = useRoute();

const index = ref(route.params.id);



const user = await getUsers();


const loaded = ref(false);

const random = []; 

onMounted(async () => {
  for (let i = 0; i < 4; i++) {
    random.push(Math.floor(Math.random() * 50) + 300,)
  }
})



NuxtApp.hook('page:finish', async ()=>{
    loaded.value = true;
})

</script>

<template>



<main v-if="loaded">
            <div class="flex p-4 @container">
              <div class="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
                <div class="flex gap-4">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    :style='`background-image: url("${user[index].picture.large}");`'
                  ></div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em]">{{ user[index].name.first }}</p>
                    <p class="text-[#60778a] text-base font-normal leading-normal">{{user[index].location.street.name}}</p>
                  </div>
                </div>
                <div class="flex w-full max-w-[480px] gap-3 @[480px]:w-auto">
                  <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f5] text-[#111518] text-sm font-bold leading-normal tracking-[0.015em] flex-1 @[480px]:flex-auto"
                  >
                    <span class="truncate">Following</span>
                  </button>
                  <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2094f3] text-white text-sm font-bold leading-normal tracking-[0.015em] flex-1 @[480px]:flex-auto"
                  >
                    <span class="truncate">Message</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-3 px-4 py-3">
              <div class="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#dbe1e6] p-3 items-center text-center">
                <p class="text-[#111518] tracking-light text-2xl font-bold leading-tight">{{ random[0] }}</p>
                <div class="flex items-center gap-2"><p class="text-[#60778a] text-sm font-normal leading-normal">Posts</p></div>
              </div>
              <div class="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#dbe1e6] p-3 items-center text-center">
                <p class="text-[#111518] tracking-light text-2xl font-bold leading-tight">{{ random[1] }}</p>
                <div class="flex items-center gap-2"><p class="text-[#60778a] text-sm font-normal leading-normal">Followers</p></div>
              </div>
              <div class="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#dbe1e6] p-3 items-center text-center">
                <p class="text-[#111518] tracking-light text-2xl font-bold leading-tight">{{ random[2] }}</p>
                <div class="flex items-center gap-2"><p class="text-[#60778a] text-sm font-normal leading-normal">Following</p></div>
              </div>
            </div>
            <p class="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4">Travel | Lifestyle | Fashion</p>
            <div class="flex w-full grow bg-white @container py-3">
              <div class="w-full gap-1 overflow-hidden bg-white @[480px]:gap-2 aspect-[3/2] grid grid-cols-[2fr_1fr_1fr]">
                <div
                  class="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none row-span-2"
                  :style='`background-image: url("${user[index].picture.large}");`'
                ></div>
                <div
                  class="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
                  :style='`background-image: url("${user[index].picture.large}");`'
                ></div>
                <div
                  class="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
                 :style='`background-image: url("${user[index].picture.large}");`'
                ></div>
              </div>
            </div>
</main> 
</template>