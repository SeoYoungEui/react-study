import { memo, useState } from "react";

/* Child 1 memo (X) */
interface Child_1Prop {
  isChild: boolean;
}
const Child_1 = ({ isChild }: Child_1Prop) => {
  console.log(`Child_1 이 다시 그려졌습니다. isChild: ${isChild}`);
  return <div>{isChild ? "Child_1" : ""}</div>;
};

/* Child 2 memo (O) */
interface Child_2Prop {
  isChild: boolean;
}
const Child_2 = memo(({ isChild }: Child_2Prop) => {
  console.log(`Child_2 이 다시 그려졌습니다. isChild: ${isChild}`);
  return <div>{isChild ? "Child_2" : ""}</div>;
});

/* Parent */
export const Parent = () => {
  const [count, setCount] = useState<number>(1);
  const isChild_1 = count % 3 === 0;
  const isChild_2 = count % 5 === 0;

  console.log(
    `------------------------- Parent 가 그려졌습니다. count => ${count} -------------------------`
  );

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>+1</button>
      <p>현재 카운트 : {count}</p>
      <div>
        <Child_1 isChild={isChild_1} />
        <Child_2 isChild={isChild_2} />
      </div>
    </div>
  );
};
