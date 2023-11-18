<script lang="ts" setup>
import {onMounted, ref} from "vue";

const { payload: { prerenderedAt } } = useNuxtApp()
const onMountedValue = ref(false)
const watcherCalled = ref()

const methods = {
  updateWatcherCalled() {
    watcherCalled.value = true
  }
}

onMounted(() => {
  onMountedValue.value = true
  watcherCalled.value = false
  watch(onMountedValue, methods.updateWatcherCalled, {
    immediate: true
  })
})
</script>
<template>
  <div>
    <div>
      <NuxtLink to="/">Home (SSR)</NuxtLink> |
      <NuxtLink to="/isr">ISR</NuxtLink> |
      <NuxtLink to="/prerendered">Pre-Rendered</NuxtLink>
    </div>
    <pre>Has the onMounted value updated? `{{ onMountedValue }}`
watcherCalled value? `{{ watcherCalled }}`
prerenderedAt value? `{{ prerenderedAt }}`</pre>
  </div>
</template>
