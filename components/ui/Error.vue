<template>
  <div class="error">
    😕
    <span class="error__title"><slot /></span>
  </div>
  
</template>

<style scoped>
  .error {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 2rem 0;
  }
  .error__title {
    font-size: 2rem;
    font-weight: 500;
  }
  .error__icon {
    animation-duration: 2s;
    animation-name: rotateAnimation;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.54, 0.87, 0.6, 0.12);
  }
  @keyframes rotateAnimation {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }
</style>