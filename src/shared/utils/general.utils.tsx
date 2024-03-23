import { customCategoryIcons } from '../constants/data';

const extractIconName = (category: string) => {
  const extract = category.split(',');

  return getMovementIcon(extract[0]?.trim());
};

const extractCategoryName = (category: string) => {
  const extract = category.split(',');

  return extract[1]?.trim();
};

const extractColorName = (category: string) => {
  const extract = category.split(',');

  return extract[2]?.trim();
};

const getMovementIcon = (iconName: string) => {
  const foundIcon = customCategoryIcons.filter(
    (icon) => icon.name === iconName
  );

  return foundIcon[0]?.icon;
};

const getIconByName = (iconName: string) => {
  const foundIcon = customCategoryIcons.find((icon) => icon.name === iconName);

  return foundIcon?.icon;
};

export {
  getIconByName,
  extractIconName,
  extractCategoryName,
  extractColorName,
  getMovementIcon,
};
