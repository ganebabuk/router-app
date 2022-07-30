import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';

export default function Component2() {
  const [list, setList] = useState([]);
  useEffect(() => {
    if (list.length <= 0) {
      fetchList();
    }
    return () => {
      setList(null);
    };
  }, []);
  const fetchList = async () => {
    await fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setList(res.data);
      });
  };
  return (
    <>
      {list && (
        <ol>
          {list.map((datas) => (
            <li key={datas.id}>
              {datas.first_name} {datas.last_name}
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
