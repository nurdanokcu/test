<script setup lang="ts">
definePageMeta({
  middleware: [

    async function (to, _from) {
      const { confirmSubscription } = subscriptionApi();
      const localePath = useLocalePath();
      const router = useRouter();
      const token = to.query.confirmation_token as string;
      const status = to.query.status as string;
      if (token) {
        if (!status) {
          try {
            await confirmSubscription(token);
            router.push({
              query: {
                confirmation_token: token,
                status: 'subscription_success',
              },
            });
          } catch (error) {
            router.push({
              query: {
                confirmation_token: token,
                status: 'subscription_error',
              },
            });
          }
        }
      } else {
        return navigateTo(localePath('/'));
      }
    },
  ],
});
const route = useRoute();
const localePath = useLocalePath();
</script>

<template>
  <div class="subscription">
    <div class="subscription-content">
      <div v-if="!route.query.status" class="confirming-subscription">
        <p class="subscription-text">
          {{ $t("subscriptions.confirming") }}
        </p>
        <CommonLoader />
      </div>
      <p
        v-if="route.query.status === 'subscription_success'"
        class="subscription-text"
      >
        {{ $t("subscriptions.success") }}
      </p>
      <p
        v-if="route.query.status === 'subscription_error'"
        class="subscription-error"
      >
        <IconsGeneralError />
        {{ $t("subscriptions.error") }}
      </p>
      <CommonButtonGradientFilled
        v-if="route.query.status"
        class="subscription-button"
        :text="$t('subscriptions.goHome')"
        :padding="'12px'"
        :is-link="true"
        :border-radius="'0px 0px 16px 0px'"
        :path="localePath('/')"
      >
        <template #icon>
          <IconsGeneralHome color="white" />
        </template>
        <template #icon-gradient>
          <IconsGeneralHome />
        </template>
      </CommonButtonGradientFilled>
    </div>
  </div>
</template>

<style scoped>
.subscription {
  padding: 180px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.subscription-content {
  display: flex;
  flex-direction: column;
  gap: 64px;
  max-width: 1000px;
}
.confirming-subscription {
  display: flex;
  align-items: center;
  gap: 16px;
}

.subscription-text {
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.subscription-error {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
}
.subscription-button {
  max-width: 600px;
}
@media (min-width: 768px) {
  .subscription {
    padding: 180px 32px;
  }
}
@media (min-width: 1024px) {
  .subscription {
    padding: 180px 64px;
  }
}
</style>
