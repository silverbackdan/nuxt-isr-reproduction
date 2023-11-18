<template>
  <div>
    <div>
      <NuxtLink to="/">Home (SSR)</NuxtLink> |
      <NuxtLink to="/isr">ISR</NuxtLink> |
      <NuxtLink to="/prerendered">Pre-Rendered</NuxtLink>
    </div>
    <slot />
  </div>
</template>