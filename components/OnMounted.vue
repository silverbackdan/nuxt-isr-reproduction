<script lang="ts" setup>
import {onMounted, ref} from "vue";

const { payload: { prerenderedAt } } = useNuxtApp()
const onMountedValue = ref(false)
const watcherCalled = ref()

const prerenderedAtValue = ref()

const methods = {
  updateWatcherCalled() {
    watcherCalled.value = true
  }
}

onMounted(() => {
  prerenderedAtValue.value = prerenderedAt
  console.log('prerenderedAtComputed', prerenderedAtValue.value)
  onMountedValue.value = true
  watcherCalled.value = false
  watch(onMountedValue, methods.updateWatcherCalled, {
    immediate: true
  })
})
</script>
<template>
  <div>
    <pre>Has the onMounted value updated? `{{ onMountedValue }}`
watcherCalled value? `{{ watcherCalled }}`
prerenderedAt value? `{{ prerenderedAtValue }}`</pre>
  </div>
</template>
