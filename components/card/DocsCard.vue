<script setup>
const props = defineProps({
   head:{
    default:"Head",
   },
   sub:{
    default:'sub'
   },
   type:{
    default:"service"
   },
   link:{
    default:"/"
   }
})

const getTypeColor = (type) => {
  const colors = {
    'tool': 'blue',
    'command': 'purple',
    'guide': 'green',
    'service': 'pink'
  }
  return colors[type] || 'pink'
}
</script>

<template>
<NuxtLink :to="props.link" class="card-link">
  <div class="docs-card" :title="props.sub">
    <div class="dc-header">
      <div class="dc-head">{{ props.head }}</div>
      <div :class="`dc-type dc-type-${getTypeColor(props.type)}`">
        {{ props.type }}
      </div>
    </div>
    <div class="dc-sub" :title="props.sub">
      {{ props.sub }}
    </div>
  </div>
</NuxtLink>
</template>

<style scoped>
.card-link {
  text-decoration: none;
  display: block;
  width: 100%;
  transition: transform 0.2s ease;
}

.card-link:hover {
  transform: translateY(-2px);
}

.docs-card {
  width: 100%;
  height: 140px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--bg) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid var(--border);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  box-sizing: border-box;
}

.docs-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--red), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.docs-card:hover {
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.docs-card:hover::before {
  opacity: 1;
}

.dc-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.dc-head {
  font-size: 18px;
  font-weight: 600;
  color: #f5f5f5;
  letter-spacing: 0.2px;
  line-height: 1.3;
  flex: 1;
  transition: color 0.2s ease;
}

.docs-card:hover .dc-head {
  color: #ffffff;
}

.dc-type {
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 6px;
  white-space: nowrap;
  transition: all 0.3s ease;
  font-family: var(--font-k2d), sans-serif;
}

.dc-type-blue {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #60a5fa;
}

.dc-type-pink {
  background: rgba(236, 72, 153, 0.1);
  border: 1px solid rgba(236, 72, 153, 0.3);
  color: #f472b6;
}

.dc-type-purple {
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.3);
  color: #c084fc;
}

.dc-type-green {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #4ade80;
}

.docs-card:hover .dc-type-blue {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.5);
}

.docs-card:hover .dc-type-pink {
  background: rgba(236, 72, 153, 0.2);
  border-color: rgba(236, 72, 153, 0.5);
}

.docs-card:hover .dc-type-purple {
  background: rgba(168, 85, 247, 0.2);
  border-color: rgba(168, 85, 247, 0.5);
}

.docs-card:hover .dc-type-green {
  background: rgba(34, 197, 94, 0.2);
  border-color: rgba(34, 197, 94, 0.5);
}

.dc-sub {
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.6);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  transition: color 0.2s ease;
}

.docs-card:hover .dc-sub {
  color: rgba(255, 255, 255, 0.75);
}

@media (max-width: 768px) {
  .docs-card {
    height: 130px;
    padding: 16px;
  }

  .dc-head {
    font-size: 16px;
  }

  .dc-type {
    font-size: 10px;
    padding: 3px 8px;
  }

  .dc-sub {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .docs-card {
    height: 120px;
    padding: 14px;
  }

  .dc-head {
    font-size: 15px;
  }
}
</style>
