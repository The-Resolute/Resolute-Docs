<template>
  <aside>
    <nav class="sidebar">
      <ul>
        <li v-for="item in sidebarItems" :key="item.text">
          <a :href="item.link">{{ item.text }}</a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { useRoute } from 'vitepress'

const route = useRoute()
const sidebarItems = [
  { text: 'Getting Started', link: '/getting_started/' },
  { text: 'User Guide', link: '/user_guide/' },
  { text: 'Developer Guide', link: '/developer_guide/' },
  { text: 'API Reference', link: '/api_reference/' },
  { text: 'FAQ', link: '/faq/' }
]
</script>

<style scoped>
.sidebar {
  padding: 1rem;
  background-color: var(--vp-sidebar-background);
}
.sidebar ul {
  list-style-type: none;
  padding: 0;
}
.sidebar li {
  margin: 0.5rem 0;
}
.sidebar a {
  color: var(--vp-sidebar-link-color);
  text-decoration: none;
}
</style>
