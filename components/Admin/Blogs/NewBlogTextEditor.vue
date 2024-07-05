<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3';
import { Youtube } from '@tiptap/extension-youtube';
import { Placeholder } from '@tiptap/extension-placeholder';
import { StarterKit } from '@tiptap/starter-kit';
import { Underline } from '@tiptap/extension-underline';
import { TextAlign } from '@tiptap/extension-text-align';
import { Color } from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import { Typography } from '@tiptap/extension-typography';
import ImageResize from 'tiptap-extension-resize-image';
// import Link from "@tiptap/extension-link";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  isLoadingDraft: {
    type: Boolean,
    default: false,
  },
  isLoadingPublish: {
    type: Boolean,
    default: false,
  },
  errorRequired: {
    type: String,
    default: '',
  },
  errorMessage: {
    type: String,
    default: '',
  },
  successMessage: {
    type: String,
    default: '',
  },
});

const emits = defineEmits(['update:modelValue', 'onSaveDraft', 'onPublish']);
const { t } = useI18n();
const editor = useEditor({
  editorProps: {
    attributes: {
      class: 'text-editor-content',
    },
  },
  content: props.modelValue,
  extensions: [
    StarterKit,
    Placeholder.configure({
      placeholder: t('admin.newBlog.bodyText'),
    }),
    ImageResize,
    Underline,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    TextStyle,
    Color,
    // Link,
    Typography,
    Youtube.configure({
      inline: true,
    }),
  ],
  onUpdate({ editor }) {
    emits('update:modelValue', editor.getHTML());
  },
});

const currentColor = computed(() => {
  return editor.value?.getAttributes('textStyle').color || '#000000';
});
const finalErrorMessage = computed(() => {
  return props.errorRequired || props.errorMessage;
});

type TypeVideo = {
  videoUrl: string;
  width: string;
  height: string;
};
const handleAddVideo = ({ videoUrl, width, height }: TypeVideo) => {
  editor.value?.commands.setYoutubeVideo({
    src: videoUrl,
    width: Math.max(320, parseInt(width, 10)) || 640,
    height: Math.max(180, parseInt(height, 10)) || 480,
  });
};
const handleColorChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  editor.value?.chain().focus().setColor(target.value).run();
};

const handleUploadImage = (url: string) => {
  if (!url) {
    return;
  }
  if (editor.value) {
    editor?.value.chain().focus().setImage({ src: url }).run();
  }
};

/* const setLink = () => {
  const url = window.prompt("Enter the URL");
  if (url) {
    editor.value?.chain().focus().setLink({ href: url }).run();
  }
};
const handleToggleLink = (url: string) => {
  editor.value?.chain().focus().setLink({ href: url }).run();
}; */
const handleSaveDraft = () => {
  emits('onSaveDraft');
};
const handlePublish = () => {
  emits('onPublish');
};
const handleClearContent = () => {
  editor.value?.commands.clearContent();
  emits('update:modelValue', '');
};
const updateEditorContent = (content: string) => {
  editor.value?.commands.setContent(content);
};
defineExpose({
  handleClearContent,
  updateEditorContent,
});
</script>

<template>
  <div v-if="editor" class="text-editor">
    <div class="text-editor-header">
      <h3 class="text-editor-title">
        {{ $t("admin.newBlog.bodyText") }}
      </h3>
      <section class="buttons">
        <button
          type="button"
          aria-label="Heading 1"
          title="Heading 1"
          :class="[
            'heading',
            { 'is-active': editor.isActive('heading', { level: 1 }) },
          ]"
          @click="editor?.chain().focus().toggleHeading({ level: 1 }).run()"
        >
          <span class="heading-text">
            H<span class="heading-number">1</span>
          </span>
        </button>
        <button
          type="button"
          aria-label="Heading 2"
          title="Heading 2"
          :class="[
            'heading',
            { 'is-active': editor.isActive('heading', { level: 2 }) },
          ]"
          @click="editor?.chain().focus().toggleHeading({ level: 2 }).run()"
        >
          <span class="heading-text">
            H<span class="heading-number">2</span>
          </span>
        </button>
        <button
          type="button"
          aria-label="Heading 3"
          title="Heading 3"
          :class="[
            'heading',
            { 'is-active': editor.isActive('heading', { level: 3 }) },
          ]"
          @click="editor?.chain().focus().toggleHeading({ level: 3 }).run()"
        >
          <span class="heading-text">
            H<span class="heading-number">3</span>
          </span>
        </button>
        <button
          aria-label="Heading 4"
          title="Heading 4"
          type="button"
          :class="[
            'heading',
            { 'is-active': editor.isActive('heading', { level: 4 }) },
          ]"
          @click="editor?.chain().focus().toggleHeading({ level: 4 }).run()"
        >
          <span class="heading-text">
            H<span class="heading-number">4</span>
          </span>
        </button>
        <button
          type="button"
          aria-label="Heading 5"
          title="Heading 5"
          :class="[
            'heading',
            { 'is-active': editor.isActive('heading', { level: 5 }) },
          ]"
          @click="editor?.chain().focus().toggleHeading({ level: 5 }).run()"
        >
          <span class="heading-text">
            H<span class="heading-number">5</span>
          </span>
        </button>
        <button
          type="button"
          aria-label="Heading 6"
          title="Heading 6"
          :class="[
            'heading',
            { 'is-active': editor.isActive('heading', { level: 6 }) },
          ]"
          @click="editor?.chain().focus().toggleHeading({ level: 6 }).run()"
        >
          <span class="heading-text">
            H<span class="heading-number">6</span>
          </span>
        </button>
        <label :style="{ color: currentColor }" class="color-picker-label">
          <IconsAdminColor
            :color="currentColor === '#000000' ? '' : currentColor"
          />
          <input
            type="color"
            class="color-picker"
            title="Text color"
            :value="currentColor"
            @input="handleColorChange"
          />
        </label>
        <button
          type="button"
          :class="[
            'align',
            { 'is-active': editor.isActive({ textAlign: 'left' }) },
          ]"
          aria-label="Align left"
          title="Align left"
          @click="editor?.chain().focus().setTextAlign('left').run()"
        >
          <i class="custom-align-left-icon"></i>
        </button>
        <button
          type="button"
          :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
          aria-label="Align center"
          title="Align center"
          @click="editor?.chain().focus().setTextAlign('center').run()"
        >
          <i class="custom-align-center-icon"></i>
        </button>
        <button
          type="button"
          aria-label="Align right"
          title="Align right"
          :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
          @click="editor?.chain().focus().setTextAlign('right').run()"
        >
          <i class="custom-align-right-icon"></i>
        </button>
        <button
          type="button"
          aria-label="Align justify"
          title="Align justify"
          :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
          @click="editor?.chain().focus().setTextAlign('justify').run()"
        >
          <i class="custom-align-justify-icon"></i>
        </button>
        <button
          type="button"
          title="Bold"
          :disabled="!editor.can().chain().focus().toggleBold().run()"
          :class="['bold', { 'is-active': editor.isActive('bold') }]"
          @click="editor?.chain().focus().toggleBold().run()"
        >
          <span class="bold-text"> B </span>
        </button>
        <button
          type="button"
          title="Italic"
          :disabled="!editor.can().chain().focus().toggleItalic().run()"
          :class="['italic', { 'is-active': editor.isActive('italic') }]"
          @click="editor?.chain().focus().toggleItalic().run()"
        >
          <span class="italic-text"> I </span>
        </button>
        <button
          type="button"
          title="Underline"
          :disabled="!editor.can().chain().focus().toggleUnderline().run()"
          :class="['underline', { 'is-active': editor.isActive('underline') }]"
          @click="editor?.chain().focus().toggleUnderline().run()"
        >
          <span class="underline-text"> U </span>
        </button>
        <button
          type="button"
          aria-label="Horizontal rule"
          title="Horizontal rule"
          @click="editor?.chain().focus().setHorizontalRule().run()"
        >
          <i class="custom-horizontal-icon"></i>
        </button>
        <button
          type="button"
          :disabled="!editor.can().chain().focus().toggleBulletList().run()"
          class="bullet-list"
          aria-label="Bullet list"
          title="Bullet list"
          @click="editor?.chain().focus().toggleBulletList().run()"
        >
          <i class="custom-unorderedlist-icon"></i>
        </button>
        <button
          type="button"
          :disabled="!editor.can().chain().focus().toggleOrderedList().run()"
          class="ordered-list"
          aria-label="Ordered list"
          title="Ordered list"
          @click="editor?.chain().focus().toggleOrderedList().run()"
        >
          <i class="custom-orderedlist-icon"></i>
        </button>
        <AdminBlogsAddImage @on-submit="handleUploadImage" />
        <AdminBlogsAddVideo @on-submit="handleAddVideo" />
        <button
          type="button"
          class="undo"
          :disabled="!editor.can().chain().focus().undo().run()"
          aria-label="Undo"
          title="Undo"
          @click="editor?.chain().focus().undo().run()"
        >
          <i class="custom-undo-icon"></i>
        </button>
        <button
          type="button"
          :disabled="!editor.can().chain().focus().redo().run()"
          class="redo"
          aria-label="Redo"
          title="Redo"
          @click="editor?.chain().focus().redo().run()"
        >
          <i class="custom-redo-icon"></i>
        </button>
      </section>
    </div>
    <div
      :class="[
        'text-editor-wrapper',
        {
          'text-editor-wrapper--error': errorRequired !== '',
        },
      ]"
    >
      <editor-content :editor="editor" />
    </div>
    <CommonTransitionError>
      <CommonErrorMessage
        v-if="finalErrorMessage !== ''"
        class="text-editor-message"
        :error-message="finalErrorMessage"
      />
    </CommonTransitionError>
    <CommonTransitionError>
      <SettingsSuccessMessage
        v-if="successMessage !== ''"
        class="text-editor-message"
        :message="successMessage"
      />
    </CommonTransitionError>
    <div class="editor-buttons">
      <CommonButtonGradientBorder
        :text="
          isLoadingDraft
            ? $t('admin.newBlog.saving')
            : $t('admin.newBlog.saveDraft')
        "
        :is-loading="isLoadingDraft"
        :padding="'12px'"
        :font-options="{
          textTransform: 'uppercase',
        }"
        :border-radius="'0'"
        @on-click="handleSaveDraft"
      >
        <template #icon>
          <IconsAdminSaveAlt color="white" />
        </template>
        <template #icon-gradient>
          <IconsLoading v-if="isLoadingDraft" />
          <IconsAdminSaveAlt v-else />
        </template>
      </CommonButtonGradientBorder>
      <CommonButtonGradientFilled
        :text="
          isLoadingPublish
            ? $t('admin.newBlog.publishing')
            : $t('admin.newBlog.publish')
        "
        :is-loading="isLoadingPublish"
        :disabled="isLoadingPublish"
        :padding="'12px'"
        :border-radius="'0px 2px 16px 0px'"
        :font-options="{
          textTransform: 'uppercase',
        }"
        @on-click="handlePublish"
      >
        <template #icon>
          <IconsLoading v-if="isLoadingPublish" :color="'white'" />
          <IconsAdminPublish v-else color="white" />
        </template>
        <template #icon-gradient>
          <IconsAdminPublish :is-gradient="true" />
        </template>
      </CommonButtonGradientFilled>
    </div>
  </div>
</template>

<style>
a {
  color: var(--primary-blue);
  cursor: pointer;
}
a:hover {
  color: var(--primary-blue);
}
.text-editor-content {
  border-radius: 2px;
  background: #f7f1ff;
  overflow-y: auto;
  min-height: calc(100vh - 280px);
  max-height: calc(100vh - 280px);
  overflow: auto;
  padding: 16px 16px 64px 16px;
  width: 100%;
}

.text-editor-content:focus-visible {
  outline: none;
}

.tiptap p.is-editor-empty:first-child::before {
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.3;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}
</style>

<style scoped>
.text-editor-wrapper {
  padding-bottom: 2px;
  border-radius: 3px;
  background: var(--gradient-logo);
}

.text-editor-wrapper--error {
  background: var(--red-error);
}

.text-editor {
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  height: 100%;
}

.text-editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 8px 0;
}

.text-editor-title {
  font-family: "Source Sans 3";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.buttons {
  display: flex;
  gap: 8px;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  min-width: 20px;
  border-radius: 2px;
}

.heading-text {
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

button.is-active {
  border-radius: 2px;
  background: linear-gradient(
    112deg,
    rgba(36, 0, 255, 0.2) 0.23%,
    rgba(235, 111, 14, 0.2) 101.08%
  );
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.3;
}

.heading {
  display: flex;
  align-items: flex-end;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.heading-number {
  font-size: 12px;
}

.underline-text {
  position: relative;
  display: inline-block;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
}

.underline-text::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
}

.bold-text {
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.italic-text {
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  padding: 0 4px;
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
}

.color-picker-label {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
}

.color-picker {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
}

.editor-buttons {
  position: absolute;
  bottom: -16px;
  right: 0;
  display: flex;
  justify-content: flex-end;
  width: 468px;
}

.text-editor-message {
  position: absolute;
  bottom: -32px;
}
</style>
