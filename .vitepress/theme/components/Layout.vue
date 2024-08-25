<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@theme/components/Header.vue'
import Footer from '@theme/components/Footer.vue'
</script>
