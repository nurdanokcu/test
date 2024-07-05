import { developmentEN, developmentDE } from '~/data/development';

export default defineNuxtRouteMiddleware(async (to, _from) => {
  const categoryPath = to.params.category;
  const subCategoryPath = to.params.subcategory;
  let language = 'en';
  if (to.path.includes('/de/')) {
    language = 'de';
  }
  let targetPage = 'development';
  if (language === 'de') {
    targetPage = 'entwicklung';
  }
  let categories;
  if (language === 'de') {
    categories = developmentDE;
  } else {
    categories = developmentEN;
  }
  const targetLocale = language === 'de' ? '/de' : '';
  const targetCategoryPath = categories[0].slug;
  const targetSubCategoryPath = categories[0].subCategories[0].slug;

  if (!categoryPath) {
    const targetPath = `${targetLocale}/${targetPage}/${targetCategoryPath}/${targetSubCategoryPath}`;
    return navigateTo(targetPath);
  }
  const foundCategory = categories.find(
    category => category.slug === categoryPath,
  );
  if (!foundCategory) {
    const targetPath = `${targetLocale}/${targetPage}/${targetCategoryPath}/${targetSubCategoryPath}`;
    return navigateTo(targetPath);
  }

  if (!subCategoryPath) {
    const targetPath = `${targetLocale}/${targetPage}/${categoryPath}/${foundCategory.subCategories[0].slug}`;
    return navigateTo(targetPath);
  }

  const foundSubCategory = foundCategory.subCategories.find(
    subCategory => subCategory.slug === subCategoryPath,
  );

  if (!foundSubCategory) {
    const targetPath = `${targetLocale}/${targetPage}/${categoryPath}/${foundCategory.subCategories[0].slug}`;
    return navigateTo(targetPath);
  }
});
