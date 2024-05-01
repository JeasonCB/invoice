'use client'
import React, { useState } from 'react';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';

export default function Home() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  const handleButtonClick = () => {
    let sum = value1 + value2;
    setResult(sum);
  }

  return (
    <>
      <div className='grid place-items-center h-screen'>
        <div className='grid w-64 gap-4'>
          <Input type="number" label="Value1" placeholder='1' onChange={(e) => setValue1(Number(e.target.value))} />
          <Input type="number" label="Valor2" placeholder='2' onChange={(e) => setValue2(Number(e.target.value))} />
          <Button size="sm" onClick={handleButtonClick}>Procesar</Button>
          <p>Resultado: {result}</p>
        </div>
      </div>
    </>
  );
}
