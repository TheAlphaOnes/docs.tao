<script setup>
import hljs from 'highlight.js'
import { onMounted, ref } from 'vue'

const codeRef = ref(null)
const htmlOutput = ref('')

onMounted(() => {
  // Test highlight.js directly
  const code = `function greetUser(name) {
  const message = \`Hello, \${name}!\`;
  console.log(message);

  if (name === 'admin') {
    return { role: 'administrator', access: 'full' };
  }

  return { role: 'user', access: 'limited' };
}`

  const highlighted = hljs.highlight(code, { language: 'javascript' })
  htmlOutput.value = highlighted.value
  console.log('Highlighted HTML:', highlighted.value)

  if (codeRef.value) {
    codeRef.value.innerHTML = highlighted.value
  }
})
</script>

<template>
  <div class="container">
    <h1>Debug Highlight.js</h1>

    <h2>Direct highlight.js output:</h2>
    <pre class="hljs"><code ref="codeRef"></code></pre>

    <h2>Raw HTML output:</h2>
    <textarea v-model="htmlOutput" rows="10" cols="80"></textarea>
  </div>
</template>

<style>
.container {
  padding: 20px;
  background: #0d1117;
  color: white;
  min-height: 100vh;
}

/* Import highlight.js CSS directly */
@import 'highlight.js/styles/github-dark.css';

.hljs {
  background: #0d1117 !important;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #30363d;
}

textarea {
  background: #161b22;
  color: white;
  border: 1px solid #30363d;
  padding: 10px;
  font-family: monospace;
}
</style>
