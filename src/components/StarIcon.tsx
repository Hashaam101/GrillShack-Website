import React from 'react';

type StarIconProps = {
  size?: number;
  className?: string;
  title?: string;
  filled?: boolean;
  hoverRays?: boolean;
  active?: boolean;
};

// Provided Figma star. Color via currentColor; when filled=true fills with currentColor.
// hoverRays and active props add animated rays for the Featuring section
const StarIcon: React.FC<StarIconProps> = ({ 
  size = 20, 
  className = '', 
  title, 
  filled = false,
  hoverRays = false,
  active = false
}) => {
  if (hoverRays) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        role={title ? 'img' : undefined}
        aria-hidden={title ? undefined : true}
        focusable="false"
        className={className}
      >
        {title ? <title>{title}</title> : null}
        
        {/* Animated rays */}
        <g className={`transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}>
          <line x1="12" y1="1" x2="12" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="12" y1="20" x2="12" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="1" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="20" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="3.5" y1="3.5" x2="5.5" y2="5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="18.5" y1="18.5" x2="20.5" y2="20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="20.5" y1="3.5" x2="18.5" y2="5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="5.5" y1="18.5" x2="3.5" y2="20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        
        {/* Main star */}
        <path
          d="M12 2L15.09 8.26H21.77L16.92 12.45L19.16 18.71L12 14.42L4.84 18.71L7.08 12.45L2.23 8.26H8.91L12 2Z"
          stroke="currentColor"
          fill={active ? 'currentColor' : 'none'}
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Default Figma star (for Home_menu_card)
  return (
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
};

export default StarIcon;
