import { type TypeCategory, type TypeSubCategory } from '~/types/services';

export const useServices = () => {
  const emptySubCategory = {
    name: '',
    slug: '',
    navTitle: '',
    iconColored: '',
    iconWhite: '',
    image: '',
    whatIs: '',
    whatIsDescription: '',
    ourApproach: '',
    ourApproachDescription: '',
    facts: '',
    aboutService: '',
    process: '',
    processItems: [],
  };

  const digitalSubCategory = useState(
    'digitalSubCategory',
    (): TypeSubCategory => emptySubCategory,
  );
  const designSubCategory = useState(
    'designSubCategory',
    (): TypeSubCategory => emptySubCategory,
  );
  const developmentSubCategory = useState(
    'developmentSubCategory',
    (): TypeSubCategory => emptySubCategory,
  );

  const generateSlugKeyPairs = (
    englishArray: TypeCategory[],
    germanArray: TypeCategory[],
  ) => {
    const slugKeyPairs: { [key: string]: string } = {};
    englishArray.forEach((item, index) => {
      slugKeyPairs[item.slug] = germanArray[index].slug;
      item.subCategories.forEach((subItem, subIndex) => {
        slugKeyPairs[subItem.slug]
          = germanArray[index].subCategories[subIndex].slug;
      });
    });
    germanArray.forEach((item, index) => {
      slugKeyPairs[item.slug] = englishArray[index].slug;
      item.subCategories.forEach((subItem, subIndex) => {
        slugKeyPairs[subItem.slug]
          = englishArray[index].subCategories[subIndex].slug;
      });
    });
    return slugKeyPairs;
  };
  interface FindSubcategoryProps {
    categoryPath: string;
    subCategoryPath: string;
    categories: TypeCategory[];
  }
  const findSubcategory = ({
    categoryPath,
    subCategoryPath,
    categories,
  }: FindSubcategoryProps) => {
    const foundCategory = categories.find(
      category => category.slug === categoryPath,
    ) || categories[0];

    const foundSubCategory = foundCategory.subCategories.find(
      subCategory => subCategory.slug === subCategoryPath,
    ) || foundCategory.subCategories[0];

    return foundSubCategory;
  };

  return {
    digitalSubCategory,
    generateSlugKeyPairs,
    designSubCategory,
    developmentSubCategory,
    findSubcategory,
  };
};
