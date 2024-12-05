<style scoped>
/*center*/
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  --gap: 5px;
  --clr: #2c3e50;
  --height: 23px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap);
}

.spinner span {
  background: var(--clr);
  width: 6px;
  height: var(--height);
  animation: grow 1s ease-in-out infinite;
}

.spinner span:nth-child(2) {
  animation: grow 1s ease-in-out 0.15s infinite;
}

.spinner span:nth-child(3) {
  animation: grow 1s ease-in-out 0.3s infinite;
}

.spinner span:nth-child(4) {
  animation: grow 1s ease-in-out 0.475s infinite;
}

@keyframes grow {
  0%,
  100% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(1.8);
  }
}
</style>

<template>
  <div class="container">
    <div class="spinner">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
