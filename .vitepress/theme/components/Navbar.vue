<template>
  <nav>
    <div class="nav-container">
      <a href="/" class="logo">Resolute</a>
      <ul class="nav-items">
        <li><a href="/">Home</a></li>
        <li><a href="/getting_started/">Getting Started</a></li>
        <li><a href="/user_guide/">User Guide</a></li>
        <li><a href="/developer_guide/">Developer Guide</a></li>
        <li><a href="/api_reference/">API Reference</a></li>
        <li><a href="/faq/">FAQ</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--vp-nav-background);
}
.nav-items {
  display: flex;
  gap: 1rem;
}
.nav-items a {
  color: var(--vp-nav-link-color);
  text-decoration: none;
}
</style>
