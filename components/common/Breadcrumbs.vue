<script setup>
import { ChevronRight, Home } from 'lucide-vue-next'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
    // Example: [{ label: 'Home', to: '/' }, { label: 'Cook', to: '/docs/cook' }, { label: 'Install' }]
  }
})
</script>

<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li class="breadcrumb-item">
        <NuxtLink to="/" class="breadcrumb-link home-link">
          <Home :size="14" />
          <span>Home</span>
        </NuxtLink>
      </li>

      <li
        v-for="(item, index) in items"
        :key="index"
        class="breadcrumb-item"
      >
        <ChevronRight :size="14" class="separator" />

        <NuxtLink
          v-if="item.to && index < items.length - 1"
          :to="item.to"
          class="breadcrumb-link"
        >
          {{ item.label }}
        </NuxtLink>

        <span v-else class="breadcrumb-current">
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumbs {
  margin-bottom: 20px;
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.breadcrumb-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  padding: 4px 8px;
  border-radius: 4px;
}

.breadcrumb-link:hover {
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.05);
}

.home-link {
  color: var(--red);
}

.home-link:hover {
  color: var(--red);
  background: rgba(198, 60, 60, 0.1);
}

.breadcrumb-current {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  font-weight: 600;
  padding: 4px 8px;
}

.separator {
  color: rgba(255, 255, 255, 0.3);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .breadcrumbs {
    padding: 10px 0;
    margin-bottom: 15px;
  }

  .breadcrumb-link,
  .breadcrumb-current {
    font-size: 13px;
    padding: 3px 6px;
  }

  .breadcrumb-link span {
    display: none;
  }

  .home-link {
    display: flex;
  }

  .separator {
    width: 12px;
    height: 12px;
  }
}

@media (max-width: 480px) {
  .breadcrumb-list {
    gap: 4px;
  }

  .breadcrumb-item {
    gap: 4px;
  }
}
</style>
