<template>
  <Main>
    <div v-if="isLanguageReady" ref="videoContainer" class="shadow-lg mx-auto w-full">
      <video
        ref="videoPlayer"
        class="block w-full h-auto"
        autoplay
        muted
        playsinline
      ></video>
    </div>
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

const videoContainer = ref(null)
const videoPlayer = ref(null)

onMounted(async () => {
  const savedLang = localStorage.getItem('lang') || 'de'
  await languageStore.loadLanguage(savedLang)
  isLanguageReady.value = true

  if (videoPlayer.value) {
    const shaka = await import('shaka-player/dist/shaka-player.ui.js')
    const player = new shaka.Player(videoPlayer.value)

    const ui = new shaka.ui.Overlay(
      player,
      videoContainer.value,
      videoPlayer.value
    )
    ui.getControls()

    // Optional DRM config
    /*
    player.configure({
      drm: {
        servers: {
          'com.widevine.alpha': licenseServer
        }
      }
    })
    */

    player.addEventListener('ended', () => {
      setTimeout(() => {
        router.push({ name: 'home' })
      }, 1000)
    })

    try {
      await player.load(manifestUrl.value)
      console.log('The video has now been loaded!')
    } catch (error) {
      console.error('Error code', error.code, 'object', error)
    }
  }
})

const manifestUrl = computed(() => {
  const lang = languageStore.current
  return `/arenenberger-vielfalt-${lang}.mpd` // assuming DASH manifest format
})
</script>

<style>
@import 'shaka-player/dist/controls.css';

video {
  width: 100%;
  height: auto;
}
</style>
