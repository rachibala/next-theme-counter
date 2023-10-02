import {
  DEFAULT_COUNTER_INTERVAL,
  DEFAULT_COUNTER_VALUE,
} from '@/constants/common';
import { useEffect, useState } from 'react';

const useCounter = (
  initialValue = DEFAULT_COUNTER_VALUE,
  interval = DEFAULT_COUNTER_INTERVAL
) => {
  const [value, setValue] = useState<number>(initialValue);
  const [intervalValue, setIntervalValue] = useState<number>(interval);

  useEffect(() => {
    setIntervalValue(interval);
  }, [interval]);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onIncrement = () => {
    setValue(value + intervalValue);
  };

  const onDecrement = () => {
    setValue(value - intervalValue);
  };

  return { value, onIncrement, onDecrement };
};

export default useCounter;
