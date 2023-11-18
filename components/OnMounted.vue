<script lang="ts" setup>
import {onMounted, ref} from "vue";

const { payload: { prerenderedAt } } = useNuxtApp()
const onMountedValue = ref(false)

onMounted(() => {
  onMountedValue.value = true
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
prerenderedAt value? `{{ prerenderedAt }}`</pre>
  </div>
</template>
