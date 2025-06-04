import { useLayoutEffect, useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    window.electronApi.onUpdateValue((event, value) => {
      setCount(count + value);
      console.log(count, value);
    });
  }, [count]);

  return (
    <div>
      <h1>Hello World</h1>
      <button
        onClick={() => {
          console.log(window.electronApi);
          window.electronApi.setTitle("New Title");
        }}
      >
        修改标题
      </button>
      <button
        onClick={async () => {
          const filepath = await window.electronApi.openFile();
          console.log(filepath);
        }}
      >
        获取文件路径
      </button>
      <div>{count}</div>
    </div>
  );
};

export default Page;
