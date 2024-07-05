<template>
  <div ref="sectionRef" class="got-it-container">
    <CommonIntro :title="$t('case_studies.sektor.got-it.title')" />
    <div class="got-it-content">
      <div :id="idForHidden" class="got-it-hidden"></div>
      <div class="set-apart-number-rates">
        <div class="set-apart-number">
          <p class="numbers">
            {{ number1 }}
          </p>
          <p class="numbers-rates">
            {{ $t("case_studies.sektor.got-it.numbertext_1") }}
            <br />
            {{ $t("case_studies.sektor.got-it.numbertext_2") }}
          </p>
        </div>
        <div class="set-apart-number">
          <p class="numbers">
            {{ number2 }}<span class="min">%</span>
          </p>
          <p class="numbers-rates">
            {{ $t("case_studies.sektor.got-it.numbertext_3") }} <br />
            {{ $t("case_studies.sektor.got-it.numbertext_4") }}
          </p>
        </div>
        <div class="set-apart-number">
          <div id="arrowtext" class="set-apart-arrow">
            <IconsGeneralBigArrowUp class="icon" fill="#740F49" />
            <p class="numbers">
              {{ number3 }}<span class="min">MIN.</span>
            </p>
          </div>
          <p class="numbers-rates">
            {{ $t("case_studies.sektor.got-it.numbertext_5") }} <br />
            {{ $t("case_studies.sektor.got-it.numbertext_6") }}
          </p>
        </div>
      </div>
      <div class="text-content">
        <p class="text">
          {{ $t("case_studies.sektor.got-it.text") }}
          <br />
          {{ $t("case_studies.sektor.got-it.text_1") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  idForHidden: {
    type: String,
    required: true,
  },
});

const sectionRef = ref(null);
const number1 = ref(96);
const number2 = ref(350);
const number3 = ref(0);

const target1 = 140;
const target2 = 454;
const target3 = 2;
const duration = 1000;

const handleIncrement = () => {
  const interval1 = duration / (target1 - number1.value);
  const interval2 = duration / (target2 - number2.value);
  const interval3 = duration / (target3 - number3.value);

  const timer1 = setInterval(() => {
    if (number1.value < target1) {
      number1.value++;
    } else {
      clearInterval(timer1);
    }
  }, interval1);

  const timer2 = setInterval(() => {
    if (number2.value < target2) {
      number2.value++;
    } else {
      clearInterval(timer2);
    }
  }, interval2);

  const timer3 = setInterval(() => {
    if (number3.value < target3) {
      number3.value++;
    } else {
      clearInterval(timer3);
    }
  }, interval3);
};

const handleScroll = () => {
  const sectionPosition = sectionRef.value?.getBoundingClientRect();
  if (sectionPosition && sectionPosition.top < window.innerHeight) {
    handleIncrement();
    window.removeEventListener('scroll', handleScroll);
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.got-it-container {
  padding: 30px 24px;
  max-width: var(--max-width-content);
  margin: auto;
}
.got-it-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: relative;
}
.got-it-hidden {
  position: absolute;
  top: -120px;
}

.set-apart-number-rates {
  text-align: center;
  margin: 80px 0px 50px 0px;
}

.set-apart-number {
  margin: 40px 0px;
}

.set-apart-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.numbers {
  font-style: normal;
  font-weight: 700;
  font-size: 65px;
  line-height: 80.2%;
  text-transform: uppercase;
  color: var(--primary-magenta);
}

.min {
  font-size: 65px;
  line-height: 64px;
}

#arrowtext .min {
  padding-left: 20px;
}

.numbers-rates {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-transform: uppercase;
  color: var(--primary-black);
}

.text {
  color: var(--primary-magenta);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  overflow-wrap: break-word;
  text-align: center;
}

.icon {
  height: 60px;
}

@media (min-width: 768px) {
  .got-it-container {
    padding: 30px 32px;
    max-width: var(--max-width-content);
    margin: auto;
  }

  .set-apart-number-rates {
    display: flex;
    gap: 80px;
    justify-content: center;
    margin: 20px 0px 20px 0px;
  }

  .set-apart-number {
    flex-direction: column;
    display: flex;
    gap: 20px;
  }

  #arrowtext {
    margin-top: -7px;
  }

  .text {
    font-size: 64px;
    line-height: 64px;
  }
}

@media (min-width: 1024px) {
  .got-it-container {
    padding: 30px 64px;
  }
}

@media (min-width: 1200px) {
  .got-it-container {
    display: grid;
    grid-template-columns: 25% 70%;
    gap: 80px;
    justify-content: space-between;
  }
  .got-it-content {
    display: flex;
    padding: 80px 0;
  }

  .set-apart-number {
    margin: 0px 0px;
  }

  .set-apart-number-rates {
    margin: 0px 0px 20px 0px;
  }
}

@media (min-width: 1500px) {
  .numbers {
    font-style: normal;
    font-weight: 700;
    font-size: 128px;
    line-height: 80.2%;
    text-transform: uppercase;
    color: var(--primary-magenta);
  }
}

@media (min-width: 1600px) {
  .got-it-container {
    padding: 34px 64px;
  }
}
</style>
