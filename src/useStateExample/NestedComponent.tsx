import { useState, memo } from 'react';

const NestedComponent = ({ age }: { age: number }) => {
  const [prevAge, setPrevAge] = useState(age);
  const [trend, setTrend] = useState<'older' | 'younger' | null>(null);

  if (prevAge !== age) {
    setPrevAge(age);
    setTrend(age > prevAge ? 'older' : 'younger');
  }

  return <>{trend && <p>Person got {trend}</p>}</>;
};

export default memo(NestedComponent);
