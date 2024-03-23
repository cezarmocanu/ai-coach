import { FC } from "react";
import clsx from "clsx";

export enum SampleAtomVariant {
  default = "default",
  dense = "dense",
}

interface Props {
  description: string;
  label: string;
  onClick: () => void;
  variant?: SampleAtomVariant;
}

const defaultProps: Props = {
  description: "Sample Description for Sample Atom",
  label: "Sample Label",
  onClick: () => {},
  variant: SampleAtomVariant.default,
};

export const SampleAtom: FC<Props> = ({
  description,
  label,
  onClick,
  variant,
} = defaultProps) => {
  return (
    <button
      className={clsx(
        "flex flex-col items-center max-w-sm space-x-4",
        "p-6 rounded-xl shadow-lg",
        "dark:bg-surface dark:text-onSurface"
      )}
      onClick={onClick}
    >
      {variant === SampleAtomVariant.default && (
        <div
          className={clsx(
            "shrink-0 rounded-full p-3",
            "dark:bg-surfaceMuted dark:text-onSurface"
          )}
        >
          <span className="text-2xl">SA</span>
        </div>
      )}
      <div className="text-xl font-medium">{label}</div>
      <p>{description}</p>
    </button>
  );
};
