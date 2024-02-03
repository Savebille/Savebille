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
    | 'mini'
    | 'mini-2'
    | 'extraSmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'extraLarge'
    | 'extraextraLarge'
    | 'mostLarge'
    | 'title';

  weight?: 'light' | 'regular' | 'medium' | 'bold';
  sx?: string;
  beforeIcon?: React.ReactNode;
}

const Text = ({
  children,
  color = 'primary',
  size = 'medium',
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
