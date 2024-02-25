import { FaClock, FaSignal, FaUtensils } from 'react-icons/fa';

type Props = {
  ariaLabel: string;
  description: string;
  imgAlt: string;
  imgUrl: string;
  level: string;
  time: string;
  title: string;
  titleUrl: string;
  servings: number;
};

function RecipeCard({
  ariaLabel,
  description,
  imgAlt,
  imgUrl,
  level,
  time,
  title,
  titleUrl,
  servings,
}: Props) {
  return (
    <section
      aria-label={ariaLabel}
      className='shadow-md w-80 rounded overflow-hidden'
    >
      <img src={imgUrl} alt={imgAlt} />
      <div className='p-2'>
        <div className='font-bold text-lg text-gray-700 leading-snug'>
          <a href={titleUrl} className='hover:underline'>
            {title}
          </a>
        </div>
        <p className='text-xs leading-tight tracking-wide my-2'>
          {description}
        </p>
        <div className='flex pt-2 border-t border-gray-300 text-sm text gray-700 divide-x-2'>
          <div className='flex flex-col items-center flex-1 text-center'>
            <FaClock />
            <p>{time}</p>
          </div>
          <div className='flex flex-col items-center flex-1 text-center'>
            <FaUtensils />
            <p>{servings}</p>
          </div>
          <div className='flex flex-col items-center flex-1 text-center'>
            <FaSignal />
            <p>{level}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecipeCard;
