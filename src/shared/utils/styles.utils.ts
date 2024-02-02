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
		case 'mini':
			return 'text-[11px]';
		case 'mini-2':
			return 'text-[12px]';
		case 'extraSmall':
			return 'text-[13px]';
		case 'small':
			return 'text-sm';
		case 'medium':
			return 'text-base';
		case 'large':
			return 'text-lg';
		case 'extra-large':
			return 'text-xl';
		case 'extra-extra-large':
			return 'text-2xl';
		case 'most-large':
			return 'text-[28px]';
		default:
			return 'text-base';
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
