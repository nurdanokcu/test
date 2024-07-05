<template>
  <section class="blog">
    <div class="blog-header">
      <p class="blog-header-title">
        {{ $t("home.blog.title") }}
      </p>
      <p class="blog-header-text">
        {{ $t("home.blog.text") }}
      </p>
    </div>
    <div class="blog-content">
      <div class="blog-overlay"></div>
      <div class="blog-container">
        <p class="blog-container-text">
          {{ $t("home.blog.text") }}
        </p>
        <HomeBlogMessage class="home-blog-message" />
        <HomeBlogCards class="home-blog-cards" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog {
  width: 100%;
  margin-bottom: 32px;
  overflow: hidden;
}

.blog-header-title {
  font-weight: 700;
  font-size: 96px;
  align-items: center;
  background: linear-gradient(104.5deg, #2400ff -0.48%, #eb6f0e 327.94%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-top: 0px;
  margin-bottom: -26px;
}

.blog-header {
  padding: 0 24px;
}

.blog-header-text {
  display: none;
}

.blog-content {
  background: linear-gradient(111.68deg, #2400ff 0.23%, #eb6f0e 101.08%);
}

.blog-container {
  width: 100%;
  margin: auto;
  padding: 24px;
}

.blog-container-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 0px 10px 0px 10px;
  margin-bottom: 48px;
}
.home-blog-cards {
  max-width: var(--home-mobile-max-width);
  margin: 0 auto;
}

@media (min-width: 768px) {
  .blog {
    margin: 48px 0 48px;
  }

  .blog-header-text {
    display: block;
    max-width: 346px;
    text-align: justify;
  }

  .blog-container-text {
    display: none;
  }

  .blog-header {
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
  }

  .blog-container {
    display: flex;
    flex-direction: column-reverse;
    padding: 24px 32px;
  }
  .home-blog-cards {
    max-width: unset;
    margin: 0;
  }
}

@media (min-width: 1024px) {
  .blog-header {
    padding: 0 64px;
  }
  .blog-container {
    padding: 24px 64px;
    flex-direction: row-reverse;
    align-items: center;
    gap: 104px;
    box-sizing: border-box;
  }
  .blog {
    margin: 100px 0px 8px;
  }

  .blog-content {
    background: transparent;
    position: relative;
  }

  .blog-overlay {
    position: absolute;
    width: 100%;
    height: 92%;
    background: linear-gradient(111.68deg, #2400ff 0.23%, #eb6f0e 101.08%);
    z-index: -1;
  }
}

@media (min-width: 1200px) {
  .home-blog-message {
    max-width: 38%;
  }
  .home-blog-cards {
    max-width: 62%;
  }
  .blog-header {
    max-width: var(--max-width-content-home-medium);
    margin: 0 auto;
    padding: 0 64px;
  }

  .blog-container {
    max-width: var(--max-width-content);
    margin: 0 auto;
    gap: 32px;
  }
}
@media (min-width: 1500px) {
  .blog-container {
    gap: 104px;
  }
}
</style>
