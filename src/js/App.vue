<template>
  <router-view />
</template>
<script setup>
import { useLanguageStore } from '@/js/stores/language'
const lang = localStorage.getItem('lang') || 'de'
const languageStore = useLanguageStore()
languageStore.loadLanguage(lang)
</script>
