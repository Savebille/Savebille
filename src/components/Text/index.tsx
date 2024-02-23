import {
  getTextColor,
  getTextSize,
  getTextWeight,
} from '../../shared/utils/styles.utils';
interface Props {
  children: React.ReactNode;
  color?:
    | 'info'
    | 'success'
    | 'yellow'
    | 'error'
    | 'primary'
    | 'secondary'
    | 'gray'
    | 'white';
  size?:
    | 'h1-medium'
    | 'h2-medium'
    | 'h3-medium'
    | 'h4-medium'
    | 'h5-medium'
    | 'h6-normal'
    | 'text-1-normal'
    | 'text-2-normal'
    | 'text-3-normal'
    | 'text-4-normal'
    | 'button-bold'
    | 'base';
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';

  sx?: string;
  beforeIcon?: React.ReactNode;
}

const Text = ({
  children,
  color = 'primary',
  size = 'base',
  sx,
  weight = 'regular',
  beforeIcon,
}: Props) => {
  return (
    <p
      className={`leading-5 flex gap-2 items-center  ${getTextColor(
        color
      )} ${getTextSize(size)} ${getTextWeight(weight)} ${sx}`}
    >
      {beforeIcon}
      {children}
    </p>
  );
};

export default Text;
