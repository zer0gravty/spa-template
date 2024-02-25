import { FaExclamation, FaLightbulb, FaQuestion, FaStar } from 'react-icons/fa';

type Variant = 'error' | 'info' | 'success';

type Props = {
  text: string;
  variant: Variant;
};

const getVariantIcon = (variant: Variant) => {
  switch (variant) {
    case 'info':
      return <FaLightbulb size={12} />;
    case 'success':
      return <FaStar size={12} />;
    case 'error':
      return <FaExclamation size={12} />;
    default:
      return <FaQuestion size={12} />;
  }
};

const getVariantColor = (variant: Variant) => {
  switch (variant) {
    case 'info':
      return 'border-blue-300 bg-blue-800';
    case 'success':
      return 'border-green-300 bg-green-800';
    case 'error':
      return 'border-red-300 bg-red-800';
    default:
      return '';
  }
};

function Alert({ text, variant }: Props) {
  return (
    <div
      className={`border-[2px] rounded p-3 flex items-center  gap-2 ${getVariantColor(
        variant
      )}`}
    >
      <i>{getVariantIcon(variant)}</i>
      <span
        className='text-center text-lg font-semibold'
        style={{ lineHeight: 1 }}
      >
        {text}
      </span>
    </div>
  );
}

export default Alert;
