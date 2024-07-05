<script setup>
import {
  privacyData1En,
  privacyData2En,
  privacyData1De,
  privacyData2De,
} from '~/data/privacy';

const { locale, t } = useI18n();
const headerClass = computed(() => {
  return locale.value === 'en'
    ? 'privacy-header-title'
    : 'privacy-header-title privacy-header-title--de';
});

const privacyData1 = computed(() => {
  return locale.value === 'en' ? privacyData1En : privacyData1De;
});
const privacyData2 = computed(() => {
  return locale.value === 'en' ? privacyData2En : privacyData2De;
});

const title = computed(() => t('seo.privacyPolicy.title'));
const description = computed(() => t('seo.privacyPolicy.description'));

const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
});
useHead({
  title: title.value,
  meta: [
    {
      name: 'description',
      content: description.value,
      tagPriority: 0,
    },
    {
      property: 'og:title',
      content: title.value,
      tagPriority: 0,
    },
    {
      property: 'og:description',
      content: description.value,
      tagPriority: 0,
    },
    {
      name: 'twitterTitle',
      content: title.value,
      tagPriority: 0,
    },
    {
      name: 'twitterDescription',
      content: description.value,
      tagPriority: 0,
    },
    ...head.value.meta.map(meta => ({
      ...meta,
      tagPriority: 0,
    })),
  ],
  link: head.value.link.map(link => ({
    ...link,
    tagPriority: 0,
  })),
});
</script>

<template>
  <div class="privacy">
    <div id="privacy-policy"></div>
    <div class="privacy-line-wrapper">
      <div class="privacy-line"></div>
    </div>
    <div class="privacy-body">
      <div class="privacy-header">
        <h1 :class="headerClass">
          {{ $t("terms.header") }}
        </h1>
        <p class="privacy-header-subtitle">
          {{ $t("terms.header_text") }}
        </p>
      </div>
      <div class="privacy-content">
        <div class="contact">
          <div class="contact-item">
            <p class="contact-title">
              {{ $t("terms.address_title") }}
            </p>
            <a
              class="contact-link"
              target="_blank"
              href="https://goo.gl/maps/7iattr6gLkhtyXsa6"
            >
              {{ $t("terms.address") }}
            </a>
          </div>
          <div class="contact-item">
            <p class="contact-title">
              {{ $t("terms.contact_title") }}
            </p>
            <a class="contact-link" href="mailto:info@propaganda-solutions.com">
              info@propaganda-solutions.com
            </a>
          </div>
        </div>
        <div class="intro">
          <p>
            {{ $t("terms.intro_1") }}
          </p>
          <p>
            {{ $t("terms.intro_2") }}
          </p>
        </div>
        <div class="item">
          <p class="item-title">
            {{ $t("terms.visitors_title") }}
          </p>
          <div class="item-line"></div>
          <div class="item-content">
            <p>{{ $t("terms.visitors_text_1") }}</p>
            <p>{{ $t("terms.visitors_text_2") }}</p>
            <p>
              {{ $t("terms.visitors_text_3") }}
              <a
                class="privacy-link"
                target="_blank"
                href="http://www.propaganda-solutions.com"
              >
                www.propaganda-solutions.com
              </a>
              {{ $t("terms.visitors_text_4") }}
            </p>
          </div>
        </div>
        <div class="item">
          <p class="item-title">
            {{ $t("terms.security_title") }}
          </p>
          <div class="item-line"></div>
          <div class="item-content">
            <p>{{ $t("terms.security_text") }}</p>
          </div>
        </div>
        <div class="item">
          <p class="item-title">
            {{ $t("terms.advertisements_title") }}
          </p>
          <div class="item-line"></div>
          <div class="item-content">
            <p>{{ $t("terms.advertisements_text") }}</p>
            <div>
              <p class="item-subtitle">
                {{ $t("terms.links_title") }}
              </p>
              <p>
                {{ $t("terms.links_text_1") }}
              </p>
              <p>
                {{ $t("terms.links_text_2") }}
              </p>
            </div>
            <div class="item-links">
              <a
                class="privacy-link privacy-link--advertisement"
                target="_blank"
                href="http://www.propaganda-solutions.com"
              >
                www.propaganda-solutions.com
              </a>
              <p class="item-links-text">
                {{ $t("terms.links_text_3") }}
              </p>
            </div>
            <div class="item-links">
              <a
                class="privacy-link privacy-link--advertisement"
                target="_blank"
                href="http://www.propaganda-solutions.com"
              >
                www.propaganda-solutions.com
              </a>
              <p class="item-links-text">
                {{ $t("terms.links_text_4") }}
              </p>
            </div>
          </div>
        </div>
        <div class="item">
          <p class="item-title">
            {{ $t("terms.protection_title") }}
          </p>
          <div class="item-line"></div>
          <div class="item-content">
            <p>{{ $t("terms.protection_text_1") }}</p>
            <p>{{ $t("terms.protection_text_2") }}</p>
          </div>
        </div>
        <div class="item">
          <p class="item-title">
            {{ $t("terms.aggregated_title") }}
          </p>
          <div class="item-line"></div>
          <div class="item-content">
            <p>
              {{ $t("terms.aggregated_text_1") }}
              <br />
              {{ $t("terms.aggregated_text_2") }}
            </p>
          </div>
        </div>
        <div class="item">
          <p class="item-title">
            {{ $t("terms.affiliate_title") }}
          </p>
          <div class="item-line"></div>
          <div class="item-content">
            <p>{{ $t("terms.affiliate_text") }}</p>
          </div>
        </div>
        <div class="item item-cookies">
          <div id="cookies" class="cookies-hidden"></div>
          <p class="item-title">
            {{ $t("terms.cookies_title") }}
          </p>
          <div class="item-line"></div>
          <div class="item-content">
            <p>{{ $t("terms.cookies_text_1") }}</p>
            <p>{{ $t("terms.cookies_text_2") }}</p>
            <div>
              <p class="item-subtitle">
                {{ $t("terms.cookies_subtitle_1") }}
              </p>
              <p>
                {{ $t("terms.cookies_text_3") }}
              </p>
            </div>
            <div>
              <p class="item-subtitle">
                {{ $t("terms.cookies_subtitle_2") }}
              </p>
              <p>
                {{ $t("terms.cookies_text_4") }}
              </p>
            </div>
          </div>
        </div>
        <div class="item">
          <p class="item-title">
            {{ $t("terms.tracking_title") }}
          </p>
          <div class="item-line"></div>
          <div class="item-content">
            <p>
              {{ $t("terms.tracking_text_1") }}
              <NuxtLink
                class="privacy-link"
                target="_blank"
                to="http://tools.google.com/dlpage/gaoptout?"
              >
                http://tools.google.com/dlpage/gaoptout?
              </NuxtLink>
              {{ $t("terms.tracking_text_1_additional") }}
            </p>
            <p>
              {{ $t("terms.tracking_text_2") }}
            </p>
            <p>
              {{ $t("terms.tracking_text_3") }}
              <NuxtLink
                class="privacy-link"
                target="_blank"
                to="https://www.google.com/analytics/terms/"
              >
                https://www.google.com/analytics/terms/
              </NuxtLink>
              {{ $t("terms.tracking_text_3_additional") }}
              <NuxtLink
                class="privacy-link"
                target="_blank"
                to="https://policies.google.com"
              >
                https://policies.google.com
              </NuxtLink>
              <br />
              {{ $t("terms.tracking_text_4") }}
              <br />
              {{ $t("terms.tracking_text_5") }}
              <br />
              {{ $t("terms.tracking_text_6") }}
              <NuxtLink
                class="privacy-link"
                target="_blank"
                to="https://www.adobe.com/privacy.html"
              >
                https://www.adobe.com/privacy.html
              </NuxtLink>
            </p>
          </div>
        </div>
        <div class="item">
          <p class="item-title">
            {{ $t("terms.data_title") }}
          </p>
          <div class="item-line"></div>
          <div class="item-content">
            <p>
              {{ $t("terms.data_text_1") }}
              <br />
              {{ $t("terms.data_text_2") }}
              <a
                class="privacy-link"
                href="mailto:info@propaganda-solutions.com"
              >
                info@propaganda-solutions.com
              </a>
            </p>
            <div>
              <p class="item-subtitle">
                {{ $t("terms.data_subtitle") }}
              </p>
              <p>
                {{ $t("terms.data_text_3") }}
                <br />
                {{ $t("terms.data_text_4") }}
              </p>
            </div>
            <p>
              {{ $t("terms.data_text_5") }}
            </p>
            <p>
              {{ $t("terms.data_text_6") }}
            </p>
          </div>
        </div>
        <div class="item">
          <p class="item-title">
            {{ $t("terms.ip_address_title") }}
          </p>
          <div class="item-line"></div>
          <div class="item-content">
            <p>
              {{ $t("terms.ip_address_text_1") }}
            </p>
            <p>
              {{ $t("terms.ip_address_text_2") }}
            </p>
          </div>
        </div>
        <div class="item">
          <p class="item-title">
            {{ $t("terms.personal_title") }}
          </p>
          <div class="item-line"></div>
          <div class="item-content">
            <p>
              {{ $t("terms.personal_text_1") }}
              <br />
              {{ $t("terms.personal_text_2") }}
            </p>
            <p>
              {{ $t("terms.personal_text_3") }}
            </p>
            <p>
              {{ $t("terms.personal_text_4") }}
              <br />
              {{ $t("terms.personal_text_5") }}
            </p>
            <p>
              {{ $t("terms.personal_text_6") }}
              <br />
              {{ $t("terms.personal_text_7") }}
            </p>
            <div>
              <p class="item-subtitle">
                {{ $t("terms.personal_subtitle_1") }}
              </p>
              <ul class="privacy-list">
                <li v-for="item in privacyData1" :key="item.id">
                  {{ item.text }}
                </li>
              </ul>
            </div>
            <div>
              <p class="item-subtitle">
                {{ $t("terms.personal_subtitle_2") }}
              </p>
              <ul class="privacy-list">
                <li v-for="item in privacyData2" :key="item.id">
                  {{ item.text }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="item">
          <p class="item-title">
            {{ $t("terms.store_title") }}
          </p>
          <div class="item-line"></div>
          <div class="item-content">
            <p>
              {{ $t("terms.store_text_1") }}
              <br />
              {{ $t("terms.store_text_2") }}
            </p>
          </div>
        </div>
        <div class="item">
          <p class="item-title">
            {{ $t("terms.customer_care_title") }}
          </p>
          <div class="item-line"></div>
          <div class="item-content">
            <p>{{ $t("terms.customer_care_text_1") }}</p>
            <p>{{ $t("terms.customer_care_text_2") }}</p>
          </div>
        </div>
        <div class="item">
          <p class="item-title">
            {{ $t("terms.e_commerce_title") }}
          </p>
          <div class="item-line"></div>
          <div class="item-content">
            <p>{{ $t("terms.e_commerce_text") }}</p>
          </div>
        </div>
        <div class="item">
          <p class="item-title">
            {{ $t("terms.changes_title") }}
          </p>
          <div class="item-line"></div>
          <div class="item-content">
            <p>{{ $t("terms.changes_text") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.privacy {
  position: relative;
}
#privacy-policy {
  position: absolute;
  top: -100px;
}
.privacy-line-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 24px 0;
}

.privacy-line {
  width: 100%;
  height: 4px;
  background: var(--gradient-logo);
}

.privacy-body {
  display: flex;
  flex-direction: column;
  padding: 0 24px 64px 24px;
}

.privacy-header-title {
  color: #000;
  font-size: 64px;
  font-weight: 700;
  line-height: 64px;
  text-transform: uppercase;
}

.privacy-header-title--de {
  word-break: break-all;
}

.privacy-header-subtitle {
  color: var(--Black, #000);
  font-size: 18px;
  font-weight: 400;
}

.privacy-content {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px 0;
  color: #1f1f1f;
  font-size: 16px;
  font-weight: 400;
}

.contact {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-title {
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.contact-link {
  transition: all 0.3s ease;
}

.intro {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.item-cookies {
  position: relative;
}
.cookies-hidden {
  position: absolute;
  top: -100px;
}

.item-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
}

.item-line {
  width: 100%;
  height: 2px;
  background: var(--gradient-logo);
  margin-bottom: 25px;
}

.item-content {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.privacy-link {
  font-weight: 700;
  transition: all 0.3s ease;
}

.item-subtitle {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
}

.privacy-link--advertisement {
  display: block;
  margin-bottom: 10px;
}

.privacy-list {
  list-style-type: disc;
  padding-left: 24px;
}

@media screen and (min-width: 768px) {
  .privacy-body {
    padding: 0 32px 80px 16px;
  }

  .privacy-content {
    padding: 20px 0 0 16px;
    font-size: 18px;
  }

  .item-links {
    display: flex;
    gap: 20px;
  }

  .privacy-link--advertisement {
    width: 300px;
    flex-shrink: 0;
  }
}

@media screen and (min-width: 1024px) {
  .privacy-body {
    flex-direction: row;
    gap: 48px;
    padding: 0 64px 80px 16px;
    max-width: var(--max-width-content);
    margin: 0 auto;
  }

  .privacy-header {
    width: 400px;
  }

  .privacy-content {
    width: 70%;
  }
}
</style>
