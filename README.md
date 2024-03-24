## Conventions
- Branch names will be `AIC-[issueNumber]-name-of-task` such as `AIC-0-create-initia-sturcture`
- Any generic component should be created inside the `shared/components` folder in the component that matches it's composition
- Components don't deal with business. If the component uses any data from the business side, then it will need an abstract interface to do it.

## How to write a component ?

### 1. High level file structure

```jsx
interface Props {}

const defaultProps {}

export const Component: FC<Props> = ({...} = defaultProps) => {

    //Method that renders something conditionally based on props or state
    const renderA = () => {}

    const renderB = () => {}

    return (<div>
        <p>Title</p>
        {renderA}
        {renderB}
        <PrivateComponent />
    </div>)
}

interface PrivateComponentProps {}

/**Private components, which in case they are repeated they can be generalised and promoted as public components */
const PrivateComponent: FC<PrivateComponentProps> = ({}) => {}
```

### 2. Clean tailwind

- Maximum 4 inline classes

```jsx
//MuComponent.tsx

    //GOOD
    <div className="flex items-center w-full space-x-2"/>

    //BAD
    <div className="flex items-center w-full space-x-2 p-2 rounded-xl shadow-lg dark:bg-surface dark:text-onSurface"/>
```

- In case of more than 4 classes isolate in a `style` object

```jsx
//BAD
<div className="flex items-center w-full space-x-2 p-2 rounded-xl shadow-lg dark:bg-surface dark:text-onSurface" />;

//GOOD

//MyComponent.styles.ts
import clsx from "clsx";

export const styles = {
  myStyle: clsx(
    "flex flex-col items-center max-w-sm", //max 4 classes per line
    "p-2 rounded-xl shadow-lg",
    "dark:bg-surface dark:text-onSurface" //grouped by theme where needed
  ),
};

//MyComponent.tsx
import { styles } from "./MyComponent.styles";
//GOOD
<div className={styles.myStyle} />;
```

- In case of conditional classes use `style` object

```jsx
//BAD
const isExpanded = true;
<div
  className={clsx(
    "flex items-start w-full",
    "transition-[max-height] opacity-0 max-h-0",
    {
      "max-h-12 opacity-100": isExpanded,
    }
  )}
/>

//GOOD

//MyComponent.styles.ts
import clsx from "clsx";

export const styles = {
  myStyle: (isExpanded: boolean) =>
    clsx(
        "flex items-start w-full",
        "transition-[max-height] opacity-0 max-h-0",
        {
            "max-h-12 opacity-100": isExpanded,
        }
    ),
};

//MyComponent.tsx
import { styles } from "./MyComponent.styles";
//GOOD
const isExpanded = true;
<div className={styles.myStyle(isExpanded)} />;


```

### 3. All coponents have a story

- Create a storybook file for each new component

### 4. On the second copy paste you are promoted

- Whenever a private component is copy pasted form a file to another it will become an atom(at least), and the component that uses it will potentially be promoted to the next level

- If a component from features is copy pasted then it will become a generalised component
