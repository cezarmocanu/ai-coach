import { FC } from "react";

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
      className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
      onClick={onClick}
    >
      {variant === SampleAtomVariant.default && (
        <div className="shrink-0 bg-blue-50 rounded-full p-3">
          <span className="text-2xl">SA</span>
        </div>
      )}
      <div className="flex flex-col items-start w-36">
        <div className="text-xl font-medium text-black">{label}</div>
        <p className="text-slate-500">{description}</p>
      </div>
    </button>
  );
};
