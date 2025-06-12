<template>
  <Main>
    <video 
      v-if="isLanguageReady"
      :src="videoSrc"
      autoplay 
      @ended="handleVideoEnd"
      class="block w-full h-auto">
    </video>
  </Main>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import Main from '@/js/components/layout/Main.vue'
import { useLanguageStore } from '@/js/stores/language'

const router = useRouter()
const languageStore = useLanguageStore()
const isLanguageReady = ref(false)

onMounted(async () => {
  const savedLang = localStorage.getItem('lang') || 'de'
  await languageStore.loadLanguage(savedLang)
  isLanguageReady.value = true
})

const videoSrc = computed(() => {
  const lang = languageStore.current
  return `arenenberger-vielfalt-de.mp4`
})

const handleVideoEnd = () => {
  setTimeout(() => {
    router.push({ name: 'home' })
  }, 1000)
}
</script>