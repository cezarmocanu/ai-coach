import { FC } from "react";

export enum ChevronUpVariant {
  outline = "outline",
  solid = "solid",
  mini = "mini",
  micro = "micro",
}

interface Props {
  variant: ChevronUpVariant;
}

export const ChevronUp: FC<Props> = ({ variant }) => {
  if (variant === ChevronUpVariant.outline) {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" 
    fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" 
      d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
    );
  }

  if(variant === ChevronUpVariant.solid){
    return(
      <svg xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="w-6 h-6">
      <path fillRule="evenodd" 
      d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
    </svg>
    
    );
  }

  if(variant === ChevronUpVariant.mini){
    return(
      <svg xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20" 
      fill="currentColor" 
      className="w-5 h-5">
      <path fillRule="evenodd" 
      d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clipRule="evenodd" />
    </svg>
    );
  }

  if(variant === ChevronUpVariant.micro){
    return(
      <svg xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 16 16" 
      fill="currentColor" 
      className="w-4 h-4">
      <path fillRule="evenodd" 
      d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
    </svg>

    );
  }

  return null;
};
