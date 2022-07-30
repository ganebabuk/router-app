import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { nameAtom } from '../atoms/atoms';

export default function Child1() {
  const [myname, ] = useAtom(nameAtom);

  useEffect(() => {}, []);
  return (
  <>
    {myname}
  </>
  );
}
