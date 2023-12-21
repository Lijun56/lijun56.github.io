import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2002-05-06T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 23,
    link: 'https://www.google.com/maps/d/embed?mid=17C9AmZ2VdjSymWD1cDD9jRbra20&hl=en&ehbc=2E312F',
  },
  {
    label: 'Hometown',
    value: 'Shanghai',
    link: 'https://en.wikipedia.org/wiki/Shanghai',
  },
];

export default data;
