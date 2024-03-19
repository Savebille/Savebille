const getTextColor = (textColor: string) => {
  const colors: Record<string, string> = {
    info: 'text-h-info',
    success: 'text-h-success',
    yellow: 'text-h-yellow',
    error: 'text-h-error',
    primary: 'text-h-primary',
    secondary: 'text-h-secondary',
    gray: 'text-h-gray',
    white: 'text-h-white',
  };

  return colors[textColor] || 'text-title';
};

const getTextSize = (textSize: string) => {
  switch (textSize) {
    // HEADLINE
    case 'h1':
      return 'text-[28px]';
    case 'h2':
      return 'text-[24px]';
    case 'h3':
      return 'text-[20px]';
    case 'h4':
      return 'text-[18px]';
    case 'h5':
      return 'text-[16px]';

    // PARAGRAPH
    case 'text-1':
      return 'text-[14px]';
    case 'text-2':
      return 'text-[13px]';
    case 'text-3':
      return 'text-[12px]';
    case 'text-4':
      return 'text-[11px]';
    case 'base':
      return 'text-base';

    default:
      return 'text-base';
  }
};

const getTextWeight = (weight: string) => {
  switch (weight) {
    case 'light':
      return 'font-light';
    case 'regular':
      return 'font-normal';
    case 'medium':
      return 'font-medium';
    case 'semibold':
      return 'font-semibold';
    case 'bold':
      return 'font-bold';
    default:
      return 'font-normal';
  }
};

const getBgColorRow = (index: number) => {
  if (index % 2 === 0) {
    return 'bg-white';
  } else {
    return 'bg-[#FAFAFA]';
  }
};
export { getTextColor, getTextSize, getTextWeight, getBgColorRow };
