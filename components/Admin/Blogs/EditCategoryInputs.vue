<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';

const props = defineProps({
  nameEn: {
    type: String,
    required: false,
    default: '',
  },
  nameDe: {
    type: String,
    required: false,
    default: '',
  },
  isLoading: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const { t } = useI18n();
const emits = defineEmits(['onSelect', 'onSave', 'onBack']);
const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      newNameEn: yup.string().required(t('admin.newBlog.required')),
      germanName: yup.string().required(t('admin.newBlog.required')),
    }),
  ),
});

const [newNameEn, newNameAttrs] = defineField('newNameEn');
const [germanName, germanNameAttrs] = defineField('germanName');

const handleSave = handleSubmit(() => {
  emits('onSave', newNameEn.value, germanName.value);
});

const handleBack = () => {
  emits('onBack');
};

const newNameRef = ref();
onMounted(() => {
  newNameRef.value.focus();
  newNameEn.value = props.nameEn || '';
  germanName.value = props.nameDe || '';
});
watch(
  () => props.nameEn,
  (value) => {
    newNameEn.value = value;
  },
);
watch(
  () => props.nameDe,
  (value) => {
    germanName.value = value;
  },
);
</script>

<template>
  <div class="option-editing">
    <button
      type="button"
      :aria-label="$t('admin.login.back')"
      :title="$t('admin.login.back')"
      class="edit-button"
      :disabled="isLoading"
      @click="handleBack"
    >
      <IconsGeneralArrow
        color="var(--secondary-dark-blue)"
        :direction="'left'"
        class="back-icon"
      />
    </button>
    <div class="option-editing-inputs">
      <label class="label" for="new-name-en">
        En:
        <span
          :class="[
            'input-wrapper',
            { 'input-wrapper--error': errors.newNameEn },
          ]"
        >
          <input
            ref="newNameRef"
            v-model="newNameEn"
            class="input input-en"
            :placeholder="$t('admin.newBlog.placeholderTopic')"
            :aria-label="$t('admin.newBlog.newCategoryName')"
            type="text"
            v-bind="newNameAttrs"
            @keydown.enter="handleBack"
          />
        </span>
      </label>
      <CommonTransitionError>
        <CommonErrorMessage
          v-if="errors.newNameEn"
          :error-message="errors.newNameEn"
        />
      </CommonTransitionError>
      <label class="label" for="new-name-en">
        De:
        <span
          :class="[
            'input-wrapper',
            { 'input-wrapper--error': errors.germanName },
          ]"
        >
          <input
            v-model="germanName"
            class="input input-de"
            :placeholder="$t('admin.newBlog.placeholderTopic')"
            :aria-label="$t('admin.newBlog.newCategoryName')"
            type="text"
            v-bind="germanNameAttrs"
            @keydown.enter="handleSave"
          />
        </span>
      </label>
      <CommonTransitionError>
        <CommonErrorMessage
          v-if="errors.germanName"
          :error-message="errors.germanName"
        />
      </CommonTransitionError>
    </div>
    <button
      type="button"
      name="edit-button"
      :aria-label="$t('admin.settings.save')"
      :title="$t('admin.settings.save')"
      class="edit-button"
      :disabled="isLoading"
      @click="handleSave"
    >
      <IconsLoading
        v-if="isLoading"
        color="var(--primary-green)"
        width="16"
        height="16"
      />
      <IconsAdminCheck
        v-else
        class="save-icon"
        color="var(--primary-green)"
      />
    </button>
  </div>
</template>

<style scoped>
.save-icon,
.back-icon {
  width: 20px;
  height: 20px;
}
.back-icon {
  opacity: 0.3;
}

.option-editing {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 0 8px 0px;
}

.option-editing-inputs {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label {
  display: flex;
  gap: 4px;
  color: var(--secondary-dark-blue);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.input-wrapper {
  display: flex;
  width: 100%;
  padding-bottom: 1px;
  background: var(--gradient-logo);
}
.input-wrapper--error {
  background: var(--red-error);
}

.input {
  width: 100%;
  border: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  color: var(--secondary-dark-blue);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.input::placeholder {
  color: var(--secondary-dark-blue);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.2;
}

.input:focus {
  outline: none;
}
</style>
