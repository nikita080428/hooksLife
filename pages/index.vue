<script setup lang="ts">


const arrayUser = ref([]);

onMounted(async () => {
    arrayUser.value = await getUsers();
});


</script>

<template>
    
          
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1 mx-25">
            <div v-if="arrayUser.length != 3" class="mx-20">
              <img :src="`milo.jpg`" alt="">
            </div>
            <div class="mx-20" v-if="arrayUser.length == 3">
              <NuxtLink :to="`/user/${index}`" v-for="(users, index) in arrayUser">
            <AppCard :users="users"></AppCard>
          </NuxtLink>
            </div>
          

            </div>


</template>