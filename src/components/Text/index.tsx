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
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'text-1'
    | 'text-2'
    | 'text-3'
    | 'text-4'
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
