<script setup>
defineProps({
  answer: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="answer">
    <div v-if="answer.firstPart" class="answer-first">
      <p v-for="item in answer.firstPart" :key="item">
        {{ item }}
      </p>
    </div>
    <ul v-if="answer.listItems" class="answer-list">
      <li
        v-for="item in answer.listItems"
        :key="item.intro"
        class="answer-list-item"
      >
        <span class="answer-list-item-intro">
          {{ item.intro }}
        </span>
        <span>
          {{ item.description }}
        </span>
      </li>
    </ul>
    <div v-if="answer.lastPart" class="answer-last">
      <p v-for="item in answer.lastPart" :key="item">
        {{ item }}
      </p>
    </div>
    <div v-if="answer.link" class="answer-link-container">
      {{ answer.link.text }}
      <a class="answer-link" href="mailto:info@propaganda-solutions.com">
        info@propaganda-solutions.com
      </a>
    </div>
  </div>
</template>

<style scoped>
.answer {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.answer-list {
  list-style-type: disc;
  padding-left: 24px;
}
.answer-list-item-intro {
  font-weight: 700;
}
.answer-first {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.answer-link {
  transition: all 0.2s ease-in-out;
  color: var(--primary-blue);
}
.answer-link:hover {
  color: var(--secondary-blue);
}
</style>
