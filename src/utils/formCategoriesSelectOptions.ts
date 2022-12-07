import { CategoryType } from 'config/mock';
import { CategoriesSelectOptionType } from 'types/categoriesSelect';

const formCategoriesSelectOptions = (
  categories: CategoryType[]
): CategoriesSelectOptionType[] =>
  categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));

export default formCategoriesSelectOptions;
