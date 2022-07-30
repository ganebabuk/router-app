import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { nameAtom } from '../atoms/atoms';
import Child1 from './child1';

export default function Component1() {
  const [, setMyname] = useAtom(nameAtom);
  const [formData, setFormData] = useState({ name: '', job: '' });
  useEffect(() => {
    setTimeout(() => {
      setMyname('I am Ganeshbabu');
    }, 3000);
  }, []);
  const saveData = () => (e) => {
    e.preventDefault();
    console.log('formData: ', formData);
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.name.trim(),
        job: formData.job.trim(),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log('res:', res);
      });
  };
  return (
    <div>
      <Child1 />
      <br /> <br />
      <form method="post" onSubmit={saveData()}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="user"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <br />
        <div>
          <label>Job: </label>
          <input
            type="text"
            name="job"
            value={formData.job}
            onChange={(e) => setFormData({ ...formData, job: e.target.value })}
          />
        </div>
        <br />
        <div>
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
}
