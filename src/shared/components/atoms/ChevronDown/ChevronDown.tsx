import { FC } from "react";

export enum ChevronDownVariant {
  outline = "outline",
  solid = "solid",
  mini = "mini",
  micro = "micro",
}

interface Props {
  variant: ChevronDownVariant;
}

export const ChevronDown: FC<Props> = ({ variant }) => {
  if (variant === ChevronDownVariant.outline) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if(variant === ChevronDownVariant.solid){
    return(
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="w-6 h-6"
      >
        <path fillRule="evenodd" 
        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" 
        clipRule="evenodd" 
        />
    </svg>
    );
  }

  if(variant === ChevronDownVariant.mini){
    return(
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20" 
      fill="currentColor" 
      className="w-5 h-5"
      >
        <path fillRule="evenodd" 
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" 
        clipRule="evenodd" 
        />
      </svg>
    );
  }

  if(variant === ChevronDownVariant.micro){
    return(
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 16 16" 
      fill="currentColor" 
      className="w-4 h-4"
      >
        <path fillRule="evenodd" 
        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" 
        clipRule="evenodd" 
        />
    </svg>
    
    );
  }

  return null;
};
