import { ChangeEvent, useMemo, useState } from "react";

export const UseMemoSample = () => {
  const [text, setText] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleOnClickBtn = () => {
    setItems((prve) => {
      return [...prve, text];
    });
    setText("");
  };
  const value_1 = items.reduce((sub, item) => sub + item.length, 0);
  const value_2 = useMemo(() => {
    return items.reduce((sub, item) => sub + item.length, 0);
  }, [items]);

  return (
    <div>
      <div>
        <input value={text} onChange={handleOnChangeInput}></input>
        <button onClick={handleOnClickBtn}>Add</button>
      </div>
      <div>
        {items.map((item, idx) => {
          return <p key={idx}>{item}</p>;
        })}
      </div>
      <div>
        <p>Total Value_1 : {value_1}</p>
        <p>Total Value_2 : {value_2}</p>
      </div>
    </div>
  );
};
