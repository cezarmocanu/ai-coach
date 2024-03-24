import clsx from "clsx";

export const styles = {
  card: clsx(
    "flex flex-col items-center max-w-sm",
    "p-2 rounded-xl shadow-lg",
    "dark:bg-surface dark:text-onSurface"
  ),
  icon: clsx(
    "shrink-0 rounded-full p-3",
    "dark:bg-surfaceMuted dark:text-onSurface"
  ),
  expandableDescription: {
    content: (isExpanded: boolean) =>
      clsx(
        "flex items-start w-full",
        "transition-[max-height] opacity-0 max-h-0",
        {
          "max-h-12 opacity-100": isExpanded,
        }
      ),
  },
};
