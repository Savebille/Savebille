const getTextColor = (textColor: string) => {
	const colors: Record<string, string> = {
		white: 'text-h-primary-100',
		dark: 'text-h-text-dark',
		medium: 'text-h-text-medium',
		light: 'text-h-text-light',
		primary: 'text-h-primary-50',
		ultraBlueLight: 'text-h-primary-70',
		red: 'text-red',
		green: 'text-h-success-50',
		gray: 'text-h-neutral-70',
		greenSuccess: 'text-h-success-50',
		blueInformation: 'text-h-information-50',
	};

	return colors[textColor] || 'text-title';
};

const getTextSize = (textSize: string) => {
	switch (textSize) {
		case 'xl':
		case 'body-1':
		case 'subtitle':
			return 'text-xl leading-7';
		case 'l':
			return 'text-lg leading-[25px]';
		case 'm':
		case 'body-2':
		case 'label':
			return 'text-base leading-6';
		case 's':
		case 'caption':
			return 'text-sm leading-[22px]';
		case 'xs':
		case 'mini-1':
			return 'text-xs leading-5';
		case 'xxs':
		case 'mini-2':
			return 'text-[10px] leading-5';
		default:
			return 'text-base leading-6';
	}
};

const getTextWeight = (weight: string) => {
	switch (weight) {
		case 'light':
			return 'font-light';
		case 'regular':
			return 'font-regular';
		case 'medium':
			return 'font-medium';
		case 'bold':
			return 'font-bold';
		default:
			return 'font-regular';
	}
};

const getBgColorRow = (index: number) => {
	if (index % 2 === 0) {
		return 'bg-white';
	} else {
		return 'bg-[#FAFAFA]';
	}
};
export {
	getTextColor,
	getTextSize,
	getTextWeight,
	getBgColorRow,
};
