<template>
  <div class="loading">
    <div
      v-for="index in 3"
      :key="index"
      class="loading-content"
    >
      <div class="loading-item">
        <AdminLoadingBoxes :height="'240px'" :amount="1" />
        <div class="loading-item-right">
          <div class="loading-item-header">
            <AdminLoadingBoxes :height="'24px'" :amount="1" />
            <AdminLoadingBoxes :height="'24px'" :amount="1" />
          </div>
          <AdminLoadingBoxes :height="'32px'" :amount="1" />
          <AdminLoadingBoxes :height="'110px'" :amount="1" />
          <AdminLoadingBoxes :height="'24px'" :amount="1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.loading {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
.loading-header {
  margin-bottom: 24px;
}
.loading-content {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}
.loading-item {
  width: 100%;
  display: flex;
  gap: 16px;
}
.loading-item-right {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
.loading-item-header {
  display: flex;
  gap: 48px;
}
</style>
