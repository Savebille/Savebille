import { getTextColor, getTextSize, getTextWeight } from "../../shared/utils/styles.utils";

interface Props {
	children: React.ReactNode;
	color?:
		| 'dark'
		| 'medium'
		| 'light'
		| 'white'
		| 'primary'
		| 'ultraBlueLight'
		| 'green'
		| 'red'
		| 'gray'
		| 'greenSuccess'
		| 'blueInformation';
	size?:
		| 'xxs'
		| 'xs'
		| 's'
		| 'm'
		| 'l'
		| 'xl'
		| 'subtitle'
		| 'label'
		| 'body-1'
		| 'body-2'
		| 'caption'
		| 'mini-1'
		| 'mini-2';
	weight?: 'light' | 'regular' | 'medium' | 'bold';
	sx?: string;
	beforeIcon?: React.ReactNode;
}

const Text = ({
	children,
	color = 'dark',
	size = 'm',
	sx,
	weight = 'regular',
	beforeIcon,
}: Props) => {
	return (
		<p
			className={`leading-5 flex gap-2 items-center  ${getTextColor(
				color,
			)} ${getTextSize(size)} ${getTextWeight(weight)} ${sx}`}
		>
			{beforeIcon}
			{children}
		</p>
	);
};

export default Text;
