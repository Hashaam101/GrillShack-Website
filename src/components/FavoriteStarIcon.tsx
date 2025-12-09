import React from 'react';

type FavoriteStarIconProps = {
  size?: number;
  className?: string;
  title?: string;
  filled?: boolean;
};

// Simple filled/outlined star for favorites in Home_menu_card
// Color via currentColor; when filled=true fills with currentColor
const FavoriteStarIcon: React.FC<FavoriteStarIconProps> = ({ 
  size = 20, 
  className = '', 
  title, 
  filled = false 
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 19"
    role={title ? 'img' : undefined}
    aria-hidden={title ? undefined : true}
    focusable="false"
    className={className}
  >
    {title ? <title>{title}</title> : null}
    <path
      d="M11.28 7.06445L11.3923 7.41016H17.4812L12.8494 10.7754L12.5554 10.9893L12.6677 11.335L14.4363 16.7803L9.80444 13.415L9.5105 13.2012L9.21655 13.415L4.58374 16.7803L6.35327 11.335L6.46558 10.9893L6.17163 10.7754L1.53979 7.41016H7.62866L7.74097 7.06445L9.5105 1.61719L11.28 7.06445Z"
      stroke="currentColor"
      fill={filled ? 'currentColor' : 'none'}
      strokeWidth="1"
    />
  </svg>
);

export default FavoriteStarIcon;
