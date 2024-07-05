<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';
import { type TypeDropdownOption } from '~/types/privateBlog';

const { createNewUser } = userManagementApi();
const { users } = useUsers();
const isPopupVisible = ref(false);
const isLoading = ref(false);
const errorMessage = ref('');
const { t } = useI18n();

const handlePopup = () => {
  isPopupVisible.value = true;
};

const positionOptions: TypeDropdownOption[] = [
  {
    id: 1,
    name: 'Product Designer',
  },
  {
    id: 2,
    name: 'Developer',
  },
  {
    id: 3,
    name: 'CTO',
  },
  {
    id: 4,
    name: 'Human Resources',
  },
  {
    id: 5,
    name: 'Digital Marketer/Analyst',
  },
  {
    id: 6,
    name: 'Other',
  },
];

const accessLevelOptions = [
  {
    id: 1,
    name: 'admin',
  },
  {
    id: 2,
    name: 'editor',
  },
];
interface Position {
  id: number;
  name: string;
}

interface TypeFormValues {
  name: string;
  email: string;
  role: Position;
  position: Position;
}

const { errors, defineField, handleSubmit } = useForm<TypeFormValues>({
  initialValues: {
    name: '',
    email: '',
    role: {
      id: 0,
      name: '',
    },
    position: {
      id: 0,
      name: '',
    },
  },
  validationSchema: toTypedSchema(
    yup.object({
      name: yup.string().required(t('design.contactForm.name')),
      email: yup
        .string()
        .email(t('design.contactForm.emailInvalid'))
        .required(t('design.contactForm.email')),
      role: yup.object().shape({
        id: yup.number().required(t('admin.manageUser.accessLevelRequired')),
        name: yup.string().required(t('admin.manageUser.accessLevelRequired')),
      }),
      position: yup.object().shape({
        id: yup.number().required(t('admin.manageUser.positionRequired')),
        name: yup.string().required(t('admin.manageUser.positionRequired')),
      }),
    }),
  ),
});
const [name, nameAttrs] = defineField('name');
const [email, emailAttrs] = defineField('email');
const [role] = defineField('role');
const [position] = defineField('position');

const selectAccessLevel = (value: TypeDropdownOption) => {
  role.value = value;
};
const selectPosition = (value: TypeDropdownOption) => {
  position.value = value;
};
const handleAddNewUser = handleSubmit(async () => {
  errorMessage.value = '';
  if (
    !name.value
    || !email.value
    || !role.value?.name
    || !position.value?.name
  ) {
    return;
  }
  const finalData = {
    name: name.value,
    email: email.value,
    role: role.value?.name,
    position: position.value?.name,
  };

  isLoading.value = true;
  try {
    const response = await createNewUser(finalData);
    users.value.unshift(response.user);
    isPopupVisible.value = false;
    isLoading.value = false;
    name.value = '';
    email.value = '';
    role.value = {
      id: 0,
      name: '',
    };
    position.value = {
      id: 0,
      name: '',
    };
  } catch (error: any) {
    if (error.statusCode === 500) {
      errorMessage.value = 'Something went wrong. Please try again later.';
    } else {
      errorMessage.value = error.data?.message;
    }
    isLoading.value = false;
  }
});

watch(
  [() => name.value, () => email.value, () => role.value, () => position.value],
  () => {
    errorMessage.value = '';
  },
);
</script>

<template>
  <div class="new">
    <CommonButtonGradientFilled
      :text="$t('admin.manageUser.addUser')"
      :is-loading="isLoading"
      :border-radius="'0px 0px 16px 16px'"
      @on-click="handlePopup"
    >
      <template #icon>
        <IconsGeneralAdd color="white" />
      </template>
      <template #icon-gradient>
        <IconsLoading v-if="isLoading" />
        <IconsGeneralAdd v-else :is-gradient="true" />
      </template>
    </CommonButtonGradientFilled>
    <CommonPopup v-if="isPopupVisible" @on-close="isPopupVisible = false">
      <div class="new-user">
        <p class="new-user-title">
          {{ $t("admin.manageUser.newUser") }}
        </p>
        <div class="new-user-form">
          <label class="new-user-label" for="new-user-name">
            {{ $t("admin.manageUser.enterName") }}
          </label>
          <br />
          <AdminInput
            v-model="name"
            type="text"
            :name="'name'"
            :input-id="'new-user-name'"
            :placeholder="$t('admin.manageUser.nameLastName')"
            :error-message="errors.name"
            v-bind="nameAttrs"
          />
          <label class="new-user-label" for="new-user-email">
            {{ $t("admin.manageUser.enterEmail") }}
          </label>
          <AdminInput
            v-model="email"
            type="email"
            :name="'email'"
            :input-id="'new-user-email'"
            placeholder="email@propaganda-solutions.com"
            :error-message="errors.email"
            v-bind="emailAttrs"
          />
          <label class="new-user-label" for="new-user-email">
            {{ $t("admin.manageUser.chooseAccess") }}
          </label>
          <AdminDropdown
            :options="accessLevelOptions"
            :selected-option="role"
            :placeholder="$t('admin.manageUser.accessLevel')"
            :error-message="errors.role"
            @on-select="selectAccessLevel"
          />
          <label class="new-user-label">
            {{ $t("admin.manageUser.choosePosition") }}
          </label>
          <AdminDropdown
            :options="positionOptions"
            :selected-option="position"
            :placeholder="$t('admin.manageUser.position')"
            :error-message="errors.position"
            @on-select="selectPosition"
          />
        </div>
        <div class="add-button-wrapper">
          <CommonButtonGradientBorder
            :text="$t('admin.manageUser.addUser')"
            :is-loading="isLoading"
            :border-radius="'2px 2px 16px 2px'"
            @on-click="handleAddNewUser"
          >
            <template #icon>
              <IconsGeneralAdd color="white" />
            </template>
            <template #icon-gradient>
              <IconsLoading v-if="isLoading" />
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_5272_93)">
                  <path
                    d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                    fill="url(#paint0_linear_5272_934)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_5272_934"
                    x1="4.67584"
                    y1="5.92664"
                    x2="21.7157"
                    y2="12.7"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2400FF" />
                    <stop offset="1" stop-color="#EB6F0E" />
                  </linearGradient>
                  <clipPath id="clip0_5272_93">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </template>
          </CommonButtonGradientBorder>
          <CommonTransitionError>
            <CommonErrorMessage
              v-if="errorMessage !== ''"
              class="input-error"
              :error-message="errorMessage"
            />
          </CommonTransitionError>
        </div>
      </div>
    </CommonPopup>
  </div>
</template>

<style scoped>
.new-button-wrapper {
  padding: 3px;
  width: 100%;
  border-radius: 0 0 16px 16px;
  height: 58px;
  overflow: hidden;
  background: var(--gradient-logo);
  transition: all 0.2s ease;
}
.new-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  height: 100%;
  padding: 0 16px;
  border-radius: 0 0 16px 16px;
}
.new-button-text {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.new-button-wrapper:hover {
  background: var(--gradient-logo-hover);
}
.new-button-wrapper:active .new-button {
  background: #fff;
}
.new-button-wrapper:active .new-button-text {
  background: var(--gradient-logo);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.new-button-wrapper:active path {
  fill: url(#gradient-new-user);
}
.new-user {
  display: flex;
  flex-direction: column;
  gap: 48px;
  border-radius: 8px;
  padding: 40px 48px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  min-width: 478px;
}
.new-user-title {
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  background: var(--gradient-logo);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
}
.new-user-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.new-user-label {
  color: var(--secondary-dark-blue);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.add-button-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
