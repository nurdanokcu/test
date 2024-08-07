<script setup lang="ts">
// Global Imports
import * as yup from 'yup';
import { type TypeDropdownOption } from '~/types/privateBlog';

const { updatePost, fetchSpecificPost } = privateBlogApi();
definePageMeta({
  middleware: ['auth'],
  layout: 'edit-blog',
});
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
});
useHead({
  title: 'Edit Blog - Propaganda Solutions',
  meta: [
    {
      property: 'og:title',
      content: 'Edit Blog - Propaganda Solutions',
      tagPriority: 0,
    },
    {
      name: 'twitterTitle',
      content: 'Edit Blog - Propaganda Solutions',
      tagPriority: 0,
    },
    ...head.value.meta.map((meta: any) => ({
      ...meta,
      tagPriority: 0,
    })),
  ],
  link: head.value.link.map((link: any) => ({
    ...link,
    tagPriority: 0,
  })),
});

const { t } = useI18n();

type TypeImagePreview = {
  src: string;
  alt: string;
};

type TypeBlogData = {
  headline: string;
  category: {
    id: number;
    name: string;
  };
  image: File | null;
  publishedAt: string;
  url: string;
  metaTitle: string;
  metaDescription: string;
  is_featured: number;
};
const defaultErrorData = {
  headline: '',
  category: '',
  image: '',
  url: '',
};

const defaultBlogData = {
  headline: '',
  category: {
    id: 0,
    name: '',
  },
  publishedAt: new Date().toISOString(),
  url: '',
  image: null,
  metaTitle: '',
  metaDescription: '',
  is_featured: 0,
};
const isLoading = ref(false);
const errorMessage = ref('');
const isLoadingDraft = ref(false);
const isLoadingPublish = ref(false);
const successMessage = ref('');
const isSubmitted = ref(false);
const selectedLanguage = ref('en');
const imagePreview = ref({
  src: '',
  alt: '',
});
const blogDataEn = ref<TypeBlogData>(defaultBlogData);
const blogDataDe = ref<TypeBlogData>(defaultBlogData);
const editorEn = ref();
const editorDe = ref();
const contentEn = ref('');
const contentDe = ref('');
const isLoadingFetch = ref(true);
const route = useRoute();
const errorsEn = ref<{ [key: string]: string }>(defaultErrorData);
const errorsDe = ref<{ [key: string]: string }>(defaultErrorData);
// Computed Properties
const postId = computed(() => {
  return Number(route.query.id);
});
const blogSchema = yup.object().shape({
  headline: yup.string().required(t('admin.newBlog.headlineRequired')),
  category: yup.string().required('Category is required'),
  content: yup
    .string()
    .test(
      'content-check',
      t('admin.newBlog.contentRequired'),
      function (value) {
        if (!value || value.trim() === '<p></p>') {
          throw new yup.ValidationError(
            t('admin.newBlog.contentRequired'),
            null,
            'content',
          );
        }
        return true;
      },
    )
    .required(t('admin.newBlog.contentRequired')),
  url: yup
    .string()
    .test('url-check', function (value) {
      if (value && !isValidSlug(value)) {
        throw new yup.ValidationError(
          t('admin.newBlog.urlInvalid'),
          null,
          'url',
        );
      }
      return true;
    })
    .required(t('admin.newBlog.urlRequired')),
});
const validationModelEn = computed(() => {
  return {
    headline: blogDataEn.value.headline,
    content: contentEn.value,
    category: blogDataEn.value.category.name,
    image: blogDataEn.value.image,
    url: blogDataEn.value.url,
  };
});

const validationModelDe = computed(() => {
  return {
    headline: blogDataDe.value.headline,
    content: contentDe.value,
    category: blogDataDe.value.category.name,
    image: blogDataDe.value.image,
    url: blogDataDe.value.url,
  };
});

const isEnglishCompleted = computed(() => {
  return (
    blogDataEn.value.headline !== ''
    && contentEn.value !== ''
    && blogDataEn.value.category.id !== 0
    && imagePreview.value.src !== ''
    && blogDataEn.value.url !== ''
  );
});

const isGermanCompleted = computed(() => {
  return (
    blogDataDe.value.headline !== ''
    && contentDe.value !== ''
    && blogDataDe.value.category.id !== 0
    && imagePreview.value.src !== ''
    && blogDataDe.value.url !== ''
  );
});

const selectCategory = (category: TypeDropdownOption) => {
  blogDataEn.value.category = category;
  blogDataDe.value.category = category;
};
const selectLanguage = (language: string) => {
  selectedLanguage.value = language;
};

const updateImage = (data: File) => {
  blogDataEn.value.image = data;
  blogDataDe.value.image = data;
};

const updateBlogDataEn = (data: TypeBlogData) => {
  blogDataEn.value = {
    ...blogDataEn.value,
    ...data,
  };
};
const updateBlogDataDe = (data: TypeBlogData) => {
  blogDataDe.value = {
    ...blogDataDe.value,
    ...data,
  };
};
const handleSelectDate = (date: string) => {
  blogDataEn.value.publishedAt = date;
  blogDataDe.value.publishedAt = date;
};
const updateImagePreview = (preview: TypeImagePreview) => {
  imagePreview.value = preview;
};

const prepareData = (
  dataEn: TypeBlogData,
  dataDe: TypeBlogData,
  isDraft: boolean,
  contentEn: string,
  contentDe: string,
) => {
  const currentDateStr = new Date().toISOString().split('T')[0];
  const publishedDateStr = new Date(dataEn.publishedAt)
    .toISOString()
    .split('T')[0];
  const isScheduled = currentDateStr < publishedDateStr;
  const publishedDate = convertToCustomFormat(dataEn.publishedAt);

  const formData = new FormData();
  formData.append('_method', 'PATCH');
  formData.append('title[en]', dataEn.headline);
  formData.append('title[de]', dataDe.headline);
  formData.append('content[en]', contentEn);
  formData.append('content[de]', contentDe);
  if (dataEn.category.id) {
    formData.append('category_id', dataEn.category.id.toString());
  }
  formData.append('is_featured', dataEn.is_featured.toString());
  formData.append('url_path[en]', dataEn.url);
  formData.append('url_path[de]', dataDe.url);
  if (isDraft) {
    formData.append('status', 'draft');
  } else if (isScheduled) {
    formData.append('status', 'scheduled');
    formData.append('published_at', publishedDate);
  } else {
    formData.append('status', 'published');
    formData.append('published_at', publishedDate);
  }
  if (dataEn.metaTitle && dataDe.metaTitle) {
    formData.append('meta_title[en]', dataEn.metaTitle);
    formData.append('meta_title[de]', dataDe.metaTitle);
  }
  if (dataEn.metaDescription && dataDe.metaDescription) {
    formData.append('meta_description[en]', dataEn.metaDescription);
    formData.append('meta_description[de]', dataDe.metaDescription);
  }

  if (dataEn.image) {
    formData.append('featured_image', dataEn.image as File);
  }
  return formData;
};

const decideSuccessMessage = (status: string) => {
  switch (status) {
    case 'draft':
      return t('admin.newBlog.draftSaved');
    case 'scheduled':
      return t('admin.newBlog.postScheduled');
    case 'published':
      return t('admin.newBlog.postPublished');
    default:
      return t('admin.newBlog.postPublished');
  }
};

const handleNewPost = async (isDraft = false) => {
  errorMessage.value = '';
  isSubmitted.value = true;
  try {
    await blogSchema.validate(validationModelEn.value, { abortEarly: false });
  } catch (validationError) {
    const typedError = validationError as yup.ValidationError;
    typedError.inner.forEach((error) => {
      if (error.path) {
        errorsEn.value[error.path] = error.message;
      }
    });
  }
  try {
    await blogSchema.validate(validationModelDe.value, { abortEarly: false });
  } catch (validationError) {
    const typedError = validationError as yup.ValidationError;
    typedError.inner.forEach((error) => {
      if (error.path) {
        errorsDe.value[error.path] = error.message;
      }
    });
    return;
  }
  if (isEnglishCompleted.value === false || isGermanCompleted.value === false) {
    errorMessage.value = t('admin.newBlog.fillAll');
    return;
  }
  isLoading.value = true;
  const formData = prepareData(
    blogDataEn.value,
    blogDataDe.value,
    isDraft,
    contentEn.value,
    contentDe.value,
  );
  try {
    const response = await updatePost(formData, postId.value);
    if (!isDraft) {
      blogDataEn.value = defaultBlogData;
      blogDataDe.value = defaultBlogData;
      editorEn.value?.handleClearContent();
      editorDe.value?.handleClearContent();
    }
    isSubmitted.value = false;
    successMessage.value = decideSuccessMessage(response.post.status);
    setTimeout(() => {
      successMessage.value = '';
    }, 5000);
  } catch (error: any) {
    errorMessage.value = error.data?.message;
  }
};

const handleSaveDraft = async () => {
  isLoadingDraft.value = true;
  await handleNewPost(true);
  isLoadingDraft.value = false;
};

const handlePublish = async () => {
  isLoadingPublish.value = true;
  await handleNewPost();
  isLoadingPublish.value = false;
};

const fetchPostByLanguage = async (language = 'en') => {
  try {
    const response = await fetchSpecificPost(postId.value, language);
    const blogData = {
      headline: response.data.title,
      content: response.data.content,
      category: {
        id: response.data.category?.id || 0,
        name: response.data.category?.name || '',
      },
      image: null,
      publishedAt: response.data.published_at || new Date().toISOString(),
      metaTitle: response.data.meta_title || '',
      metaDescription: response.data.meta_description || '',
      url: response.data.slug,
      is_featured: Number(response.data.is_featured) || 0,
    };
    const imagePreview = {
      src: response.data.featured_image,
      alt: response.data.title,
    };
    return { blogData, imagePreview };
  } catch (error: any) {
    isLoadingFetch.value = false;
    errorMessage.value
      = error.statusCode === 500
        ? 'Something went wrong. Please try again later.'
        : error.data?.message;
    return null;
  }
};

const handleFetchPost = async () => {
  isLoadingFetch.value = true;

  const enResult = await fetchPostByLanguage('en');
  if (enResult) {
    blogDataEn.value = enResult.blogData;
    contentEn.value = enResult.blogData.content;
    imagePreview.value = enResult.imagePreview;
    editorEn.value?.updateEditorContent(enResult.blogData.content);
  }

  const deResult = await fetchPostByLanguage('de');
  if (deResult) {
    blogDataDe.value = deResult.blogData;
    contentDe.value = deResult.blogData.content;
    imagePreview.value = deResult.imagePreview;
    editorDe.value?.updateEditorContent(deResult.blogData.content);
  }

  isLoadingFetch.value = false;
};

onMounted(async () => {
  if (blogDataEn.value.headline !== '') {
    isLoadingFetch.value = false;
    return;
  }
  if (blogDataEn.value.headline === '') {
    await handleFetchPost();
  }
});
watch(
  () => blogDataEn.value.headline,
  () => {
    errorsEn.value.headline = '';
    blogSchema
      .validateAt('headline', validationModelEn.value)
      .catch((error) => {
        if (isSubmitted.value) {
          errorsEn.value.headline = error.message;
        }
      });
  },
);
watch(
  () => blogDataEn.value.category,
  () => {
    errorsEn.value.category = '';
    blogSchema
      .validateAt('category', validationModelEn.value)
      .catch((error) => {
        if (isSubmitted.value) {
          errorsEn.value.category = error.message;
        }
      });
  },
);

watch(
  () => contentEn.value,
  () => {
    errorsEn.value.content = '';
    blogSchema.validateAt('content', validationModelEn.value).catch((error) => {
      if (isSubmitted.value) {
        errorsEn.value.content = error.message;
      }
    });
  },
);

watch(
  () => blogDataEn.value.image,
  () => {
    errorsEn.value.image = '';
    blogSchema.validateAt('image', validationModelEn.value).catch((error) => {
      if (isSubmitted.value) {
        errorsEn.value.image = error.message;
      }
    });
  },
);

watch(
  () => blogDataEn.value.url,
  () => {
    errorsEn.value.url = '';
    blogSchema.validateAt('url', validationModelEn.value).catch((error) => {
      if (isSubmitted.value) {
        errorsEn.value.url = error.message;
      }
    });
  },
);

watch(
  () => blogDataDe.value.headline,
  () => {
    errorsDe.value.headline = '';
    blogSchema
      .validateAt('headline', validationModelDe.value)
      .catch((error) => {
        if (isSubmitted.value) {
          errorsDe.value.headline = error.message;
        }
      });
  },
);
watch(
  () => blogDataDe.value.category,
  () => {
    errorsDe.value.category = '';
    blogSchema
      .validateAt('category', validationModelDe.value)
      .catch((error) => {
        if (isSubmitted.value) {
          errorsDe.value.category = error.message;
        }
      });
  },
);
watch(
  () => contentDe.value,
  () => {
    errorsDe.value.content = '';
    blogSchema.validateAt('content', validationModelDe.value).catch((error) => {
      if (isSubmitted.value) {
        errorsDe.value.content = error.message;
      }
    });
  },
);
watch(
  () => blogDataDe.value.image,
  () => {
    errorsDe.value.image = '';
    blogSchema.validateAt('image', validationModelDe.value).catch((error) => {
      if (isSubmitted.value) {
        errorsDe.value.image = error.message;
      }
    });
  },
);
</script>

<template>
  <div class="edit-wrapper">
    <div v-if="isLoadingFetch" class="loading-ui">
      <div class="loading-column-1">
        <AdminLoadingBoxes :amount="1" :height="'32px'" />
        <AdminLoadingBoxes :amount="1" :height="'72vh'" />
      </div>
      <div class="loading-column-2">
        <AdminLoadingBoxes :amount="1" :height="'32px'" />
        <AdminLoadingBoxes :amount="1" :height="'72vh'" />
      </div>
    </div>
    <div v-if="!isLoadingFetch && errorMessage === ''" class="edit">
      <AdminBlogsNewBlogHeader
        class="edit-header"
        :selected-category="blogDataEn.category"
        :error-required="errorsEn.category"
        :selected-language="selectedLanguage"
        :selected-date="blogDataEn.publishedAt"
        :completed-en="Boolean(isEnglishCompleted)"
        :completed-de="Boolean(isGermanCompleted)"
        @on-select-date="handleSelectDate"
        @on-select-language="selectLanguage"
        @on-select="selectCategory"
      />
      <CommonTransitionFade mode="out-in">
        <div v-show="selectedLanguage === 'en'" class="edit-section">
          <div class="edit-content">
            <AdminBlogsNewBlogFields
              class="edit-content-fields"
              :headline="blogDataEn.headline"
              :url="blogDataEn.url"
              :meta-title="blogDataEn.metaTitle"
              :meta-description="blogDataEn.metaDescription"
              :image-preview="imagePreview"
              :error-headline="errorsEn.headline"
              :error-image="errorsEn.image"
              :error-url="errorsEn.url"
              @on-update-image-preview="updateImagePreview"
              @on-update="updateBlogDataEn"
              @on-update-image="updateImage"
            />
            <AdminBlogsNewBlogTextEditor
              ref="editorEn"
              v-model="contentEn"
              class="edit-content-editor"
              :is-loading-draft="isLoadingDraft"
              :is-loading-publish="isLoadingPublish"
              :error-message="errorMessage"
              :error-required="errorsEn.content"
              :success-message="successMessage"
              @get-content="updateBlogDataEn"
              @on-publish="handlePublish"
              @on-save-draft="handleSaveDraft"
            />
          </div>
        </div>
      </CommonTransitionFade>
      <CommonTransitionFade mode="out-in">
        <div v-show="selectedLanguage === 'de'" class="edit-section">
          <div class="edit-content">
            <AdminBlogsNewBlogFields
              class="edit-content-fields"
              :headline="blogDataDe.headline"
              :url="blogDataDe.url"
              :meta-title="blogDataDe.metaTitle"
              :meta-description="blogDataDe.metaDescription"
              :image-preview="imagePreview"
              :error-headline="errorsDe.headline"
              :error-image="errorsDe.image"
              :error-url="errorsDe.url"
              @on-update-image-preview="updateImagePreview"
              @on-update="updateBlogDataDe"
              @on-update-image="updateImage"
            />
            <AdminBlogsNewBlogTextEditor
              ref="editorDe"
              v-model="contentDe"
              class="edit-content-editor"
              :is-loading-draft="isLoadingDraft"
              :is-loading-publish="isLoadingPublish"
              :error-message="errorMessage"
              :error-required="errorsDe.content"
              :success-message="successMessage"
              @get-content="updateBlogDataDe"
              @on-publish="handlePublish"
              @on-save-draft="handleSaveDraft"
            />
          </div>
        </div>
      </CommonTransitionFade>
    </div>
  </div>
</template>

<style scoped>
.edit-wrapper {
  padding: 0 24px 24px 12px;
}
.loading-ui {
  display: flex;
  gap: 24px;
  padding: 18px 0 0 12px;
}
.loading-column-1 {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: calc(33% - 12px);
}
.loading-column-2 {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: calc(66% - 12px);
}
.edit {
  position: relative;
}

.edit-header {
  position: sticky;
  padding: 16px 0;
  top: calc(var(--nav-top-height));
  background: var(--primary-white);
  z-index: 8;
}

.arrow-icon {
  width: 32px;
  height: 32px;
}

.edit-content {
  display: flex;
  gap: 24px;
  padding: 18px 0 18px 12px;
}

.edit-content-fields {
  width: calc(33% - 12px);
}

.edit-content-editor {
  position: sticky;
  top: calc(var(--nav-top-height) + 102px);
  width: calc(66% - 12px);
  min-height: calc(100vh - 280px);
}

.success-message {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 12px;
  color: var(--secondary-blue);
  font-size: 16px;
  font-weight: 700;
  margin-top: 16px;
}

.errors {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  width: fit-content;
  gap: 4px;
  margin-top: 16px;
  padding-right: 80px;
}
</style>
