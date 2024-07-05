<template>
  <article class="card">
    <div class="card-image-container">
      <NuxtImg
        width="188"
        height="188"
        class="card-image"
        src="/header_main-image.webp"
        alt="A woman sitting at a table using a laptop."
        loading="lazy"
      />
    </div>
    <NuxtImg
      class="card-rectangle"
      src="/header_rectangle.webp"
      alt="Transparent rectangle with border."
      aria-hidden="true"
      loading="lazy"
    />
    <p>
      {{ $t("home.header.card") }}
    </p>
  </article>
</template>

<style scoped>
.card {
  width: 208px;
  position: relative;
}

.card-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  background: var(--gradient-logo) border-box;
  margin-bottom: 2rem;
}

.card-image {
  width: 188px;
  height: 188px;
  z-index: 2;
  object-fit: cover;
  object-position: center;
}

.card-rectangle {
  position: absolute;
  top: 12px;
  left: 12px;
}

p {
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  width: 100%;
  display: flex;
}
</style>
