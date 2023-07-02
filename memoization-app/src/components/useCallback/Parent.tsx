import { memo, useCallback, useState } from "react";

/* Child 1 memo (X), useCallback (X) */
interface Child_1Prop {
  onClick: () => void;
}
const Child_1 = ({ onClick }: Child_1Prop) => {
  console.log(`Child_1 이 다시 그려졌습니다`);
  return <button onClick={onClick}>{"Child_2"}</button>;
};

/* Child 2 memo (O), useCallback (X) */
interface Child_2Prop {
  onClick: () => void;
}
const Child_2 = memo(({ onClick }: Child_2Prop) => {
  console.log(`Child_2 이 다시 그려졌습니다`);
  return <button onClick={onClick}>{"Child_2"}</button>;
});

/* Child 3 memo (X), useCallback (O) */
interface Child_3Prop {
  onClick: () => void;
}
const Child_3 = ({ onClick }: Child_3Prop) => {
  console.log(`Child_3 이 다시 그려졌습니다`);
  return <button onClick={onClick}>{"Child_3"}</button>;
};

/* Child 4 memo (O), useCallback (O) */
interface Child_4Prop {
  onClick: () => void;
}
const Child_4 = memo(({ onClick }: Child_4Prop) => {
  console.log(`Child_4 이 다시 그려졌습니다`);
  return <button onClick={onClick}>{"Child_4"}</button>;
});

/* Parent */
export const Parent = () => {
  const [count, setCount] = useState<number>(1);

  console.log(
    `------------------------- Parent 가 그려졌습니다. count => ${count} -------------------------`
  );
  const handleClickMemoization = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <p>현재 카운트 : {count}</p>
      <div>
        <Child_1 onClick={handleClick} />
        <Child_2 onClick={handleClick} />
        <Child_3 onClick={handleClickMemoization} />
        <Child_4 onClick={handleClickMemoization} />
      </div>
    </div>
  );
};
