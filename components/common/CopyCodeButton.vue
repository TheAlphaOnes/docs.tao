<script setup>
import { ref } from 'vue'
import { Copy, Check } from 'lucide-vue-next'

const props = defineProps({
  code: {
    type: String,
    required: true
  }
})

const copied = ref(false)

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<template>
  <button
    @click="copyCode"
    class="copy-btn"
    :class="{ 'copied': copied }"
    :title="copied ? 'Copied!' : 'Copy code'"
  >
    <Check v-if="copied" :size="16" />
    <Copy v-else :size="16" />
    <span class="copy-text">{{ copied ? 'Copied!' : 'Copy' }}</span>
  </button>
</template>

<style scoped>
.copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
  font-family: var(--font-k2d);
}

.copy-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

.copy-btn:active {
  transform: scale(0.95);
}

.copy-btn.copied {
  background: rgba(34, 197, 94, 0.2);
  border-color: rgba(34, 197, 94, 0.4);
  color: #4ade80;
}

.copy-text {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .copy-btn {
    padding: 5px 8px;
  }

  .copy-text {
    display: none;
  }
}
</style>
