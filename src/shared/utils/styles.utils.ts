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
    case 'h1-medium':
      return 'text-[28px] font-medium';
    case 'h2-medium':
      return 'text-[24px] font-medium';
    case 'h3-medium':
      return 'text-[20px] font-medium';
    case 'h4-medium':
      return 'text-[18px] font-medium';
    case 'h5-medium':
      return 'text-[16px] font-medium';
    case 'h6-normal':
      return 'text-[14px] font-normal';

    // PARAGRAPH
    case 'text-1-normal':
      return 'text-[14px] font-normal';
    case 'text-2-normal':
      return 'text-[13px] font-normal';
    case 'text-3-normal':
      return 'text-[12px] font-normal';
    case 'text-4-normal':
      return 'text-[11px] font-normal';

    // Button
    case 'button-bold':
      return 'text-[14px] font-bold';

    case 'base':
      return 'text-base font-normal';

    default:
      return 'text-base font-normal';
  }
};

const getTextWeight = (weight: string) => {
  switch (weight) {
    case 'light':
      return 'font-light';
    case 'normal':
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
