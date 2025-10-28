<script setup>

</script>

<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <div class="error-code">404</div>
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist</p>
      <NuxtLink to="/" class="home-link">
        Return home
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.not-found-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 300px);
  padding: 40px 20px;
}

.not-found-content {
  text-align: center;
  max-width: 400px;
  opacity: 0;
  animation: fadeIn 0.6s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.error-code {
  font-size: 120px;
  font-weight: 200;
  color: var(--fg);
  margin-bottom: 16px;
  letter-spacing: -4px;
  line-height: 1;
  opacity: 0.3;
}

.not-found-content h1 {
  font-size: 24px;
  font-weight: 500;
  margin: 0 0 8px 0;
  color: var(--fg);
  letter-spacing: -0.5px;
}

.not-found-content p {
  font-size: 14px;
  color: var(--fg2);
  margin: 0 0 32px 0;
  font-weight: 300;
  opacity: 0.7;
}

.home-link {
  display: inline-block;
  padding: 10px 24px;
  color: var(--fg);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 13px;
  font-weight: 400;
  text-decoration: none;
  transition: all 0.2s ease;
  letter-spacing: 0.3px;
}

.home-link:hover {
  border-color: var(--fg);
  background-color: rgba(255, 255, 255, 0.03);
}

@media (max-width: 640px) {
  .error-code {
    font-size: 90px;
  }

  .not-found-content h1 {
    font-size: 20px;
  }

  .not-found-content p {
    font-size: 13px;
  }

  .home-link {
    font-size: 12px;
    padding: 9px 20px;
  }
}
</style>

