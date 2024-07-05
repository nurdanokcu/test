<script setup>
import { Collapse } from 'vue-collapsed';

const props = defineProps({
  section: {
    type: Object,
    required: true,
  },
  searchQuery: {
    type: String,
    required: false,
    default: '',
  },
});

const isSectionExpanded = ref(true);
const toggleSection = () => {
  isSectionExpanded.value = !isSectionExpanded.value;
};

const questions = ref(
  props.section.questions.map(item => ({
    ...item,
    isExpanded: false,
  })),
);
function handleAccordion(selectedIndex) {
  questions.value.forEach((_, index) => {
    questions.value[index].isExpanded
      = index === selectedIndex ? !questions.value[index].isExpanded : false;
  });
}

watch(
  () => props.section.questions,
  () => {
    questions.value = props.section.questions.map(item => ({
      ...item,
      isExpanded: false,
    }));
  },
);
</script>

<template>
  <div class="section">
    <div class="section-title-wrapper">
      <h2 :style="{ color: section.color }" class="section-title">
        {{ section.title }}
      </h2>
      <button
        type="button"
        :aria-expanded="isSectionExpanded"
        :aria-label="`Toggle ${section.title} section`"
        class="section-title-btn"
        @click="toggleSection"
      >
        <IconsGeneralCollapseExpand
          :color="section.color"
          :is-rotated="isSectionExpanded"
        />
      </button>
    </div>
    <div v-if="isSectionExpanded" class="section-content">
      <div
        v-for="(question, index) in questions"
        :key="question.question.toLowerCase().replace(/ /g, '-')"
        :style="{ borderColor: section.color }"
        class="question-wrapper"
      >
        <button
          type="button"
          title="Click to expand/collapse"
          :aria-expanded="question.isExpanded"
          class="question"
          @click="handleAccordion(index)"
        >
          <span class="question-left">
            <i
              v-if="question.icon"
              :style="{ backgroundImage: `url(${question.icon})` }"
              class="question-icon"
            ></i>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 16L22 12L18 8V11H12.94C12.6 7.9 10.68 5.28 8 3.95C7.96 2.31 6.64 1 5 1C3.34 1 2 2.34 2 4C2 5.66 3.34 7 5 7C5.95 7 6.78 6.55 7.33 5.86C9.23 6.9 10.6 8.77 10.92 11H7.82C7.4 9.84 6.3 9 5 9C3.34 9 2 10.34 2 12C2 13.66 3.34 15 5 15C6.3 15 7.4 14.16 7.82 13H10.92C10.6 15.23 9.23 17.1 7.34 18.14C6.78 17.45 5.95 17 5 17C3.34 17 2 18.34 2 20C2 21.66 3.34 23 5 23C6.64 23 7.96 21.69 7.99 20.05C10.67 18.72 12.59 16.1 12.93 13H18V16Z"
                :fill="section.color"
              />
            </svg>
            <span :style="{ color: section.color }" class="question-text">
              {{ question.question }}
            </span>
          </span>
          <IconsGeneralCollapseExpand
            :color="section.color"
            size="32"
            class="question-arrow"
            :is-rotated="question.isExpanded"
          />
        </button>
        <Collapse
          as="section"
          :when="question.isExpanded"
          class="answer"
        >
          <FaqAnswer
            v-for="(answer, n) in question.answers"
            :key="`answer-${n}`"
            :answer="answer"
          />
        </Collapse>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-title-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}
.section-title {
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 80.2%;
  text-transform: uppercase;
  margin-bottom: 24px;
}
.section-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.question-wrapper {
  border-radius: 16px;
  border-width: 2px;
  border-style: solid;
  display: flex;
  padding: 20px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}
.question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.question-left {
  display: flex;
  align-items: center;
  gap: 16px;
}
.question-text {
  text-align: left;
}
.question-icons {
  display: flex;
  align-items: center;
  gap: 2px;
}
.question-icon {
  display: inline-block;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.question-arrow {
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 108px;
  }
}

@media (min-width: 1024px) {
  .section-title {
    font-size: 128px;
  }
}
</style>
