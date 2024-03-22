import { customCategoryIcons } from '../constants/data';

export const extractIconName = (category: string) => {
  const extract = category.split(',');

  return getMovementIcon(extract[0]?.trim());
};

export const extractCategoryName = (category: string) => {
  const extract = category.split(',');

  return extract[1]?.trim();
};

export const extractColorName = (category: string) => {
  const extract = category.split(',');

  return extract[2]?.trim();
};

export const getMovementIcon = (iconName: string) => {
  const foundIcon = customCategoryIcons.filter(
    (icon) => icon.name === iconName
  );

  return foundIcon[0]?.icon;
};

const getIconByName = (iconName: string) => {
  const foundIcon = customCategoryIcons.find((icon) => icon.name === iconName);

  return foundIcon?.icon;
};

export { getIconByName };
