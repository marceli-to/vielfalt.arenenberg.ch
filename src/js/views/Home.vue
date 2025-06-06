<template>
  <Main>
    <video 
      :src="videoSrc"
      autoplay 
      loop
      muted
      class="block w-full h-auto">
    </video>
  </Main>
  <div class="absolute bottom-50 left-1/2 -translate-x-1/2 z-50">
    <MenuLanguage :isHomepage="true" />
    <div class="mt-30 flex justify-center">
      <ButtonPrimary :label="__('Start')" to="/login" isLink />
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import Header from '@/js/components/layout/Header.vue';
import Main from '@/js/components/layout/Main.vue';
import MenuLanguage from '@/js/components/menu/Language.vue';
import ButtonPrimary from '@/js/components/buttons/Primary.vue';

import { useLanguageStore } from '@/js/stores/language'
const { __ } = useLanguageStore()

const videoSrc = computed(() => {
  return `arenenberger-vielfalt-start.mp4`
})

</script>