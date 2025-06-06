<template>
  <header class="w-[1872px] py-24 px-24 mx-auto relative grid grid-cols-18 gap-x-20 items-center border-b border-evergreen">
    <div class="col-span-4">&nbsp;</div>
    <div class="col-span-10 text-center text-crimson text-4xl leading-none">
      <router-link to="/">
        {{ __('Arenenberger Vielfalt') }}
      </router-link>
    </div>
    <div class="col-span-4 flex items-center gap-24">
      <MenuLanguage class="!justify-end" />
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue';
import HeadingOne from '@/js/components/headings/H1.vue';
import MenuLanguage from '@/js/components/menu/Language.vue';
import { useLanguageStore } from '@/js/stores/language'
const { __ } = useLanguageStore()

const props = defineProps({
  isHomepage: {
    type: Boolean,
    required: false,
    default: false,
  },
});

</script>
