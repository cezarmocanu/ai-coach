import { FC, useState } from "react";
import { styles } from "./SampleComponent.styles";
import { ChevronDown, ChevronDownVariant } from "@/shared/components/atoms/ChevronDown";
import { ChevronUp, ChevronUpVariant} from "@/shared/components/atoms/ChevronUp";

/**Variants of a component should not be passed as props to private components */
export enum SampleComponentVariant {
  default = "default",
  dense = "dense",
  expandable = "expandable",
}

interface Props {
  description: string;
  label: string;
  variant: SampleComponentVariant;
}

const defaultProps: Props = {
  label: "Sample",
  description: "Sample",
  variant: SampleComponentVariant.default,
};

export const SampleComponent: FC<Props> = ({
  description,
  label,
  variant,
} = defaultProps) => {
  const renderIcon = () => {
    if (variant === SampleComponentVariant.dense) {
      return null;
    }

    return <Icon />;
  };

  const renderDescription = () => {
    if (variant === SampleComponentVariant.expandable) {
      return <ExpandableDescription description={description} />;
    }

    return <p>{description}</p>;
  };

  return (
    <div className={styles.card}>
      {renderIcon()}
      <div className="text-xl font-medium">{label}</div>
      {renderDescription()}
    </div>
  );
};

/**Private components, which in case they are repeated they can be generalised and promoted as public components */
interface IconProps {}

const Icon: FC<IconProps> = () => {
  return (
    <div className={styles.icon}>
      <span className="text-2xl">SA</span>
    </div>
  );
};

interface DescriptionProps {
  description: string;
}

const ExpandableDescription: FC<DescriptionProps> = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandChange = () => setIsExpanded(!isExpanded);

  const renderButtonIcon = () => {
    if (isExpanded) {
      return <ChevronUp
      variant={ChevronUpVariant.outline} />;
    }

    return <ChevronDown
    variant={ChevronDownVariant.outline} />;
  };

  return (
    <>
      <div className="flex items-center w-full space-x-2">
        <div className="h-px bg-onSurface grow" />
        <button
          className="bg-surfaceMuted rounded-full p-1"
          onClick={handleExpandChange}
        >
          {renderButtonIcon()}
        </button>
      </div>
      <div className={styles.expandableDescription.content(isExpanded)}>
        <p>{description}</p>
      </div>
    </>
  );
};
