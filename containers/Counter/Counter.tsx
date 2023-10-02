import Button from '@/components/Button/Button';
import NumberInput from '@/components/NumberInput/NumberInput';
import {
  DEFAULT_COUNTER_INTERVAL,
  DEFAULT_COUNTER_VALUE,
} from '@/constants/common';
import useCounter from '@/hooks/useCounter';
import { CookieManager } from '@/utils/CookieManager';
import React, { useEffect, useState } from 'react';

export interface CounterProps {
  name: string;
  hasInterval?: boolean;
}

const Counter: React.FC<CounterProps> = ({ hasInterval, name }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [intervalValue, setIntervalValue] = useState<number>(
    DEFAULT_COUNTER_INTERVAL
  );
  const [currentValue, setCurrentValue] = useState<number>(
    DEFAULT_COUNTER_VALUE
  );
  const { onDecrement, onIncrement, value } = useCounter(
    currentValue,
    intervalValue
  );
  const intervalCookieKey = `${name}_interval`;
  const valueCookieKey = `${name}_value`;

  const setInitialDataByName = () => {
    const initialInterval =
      CookieManager.get(intervalCookieKey) ?? `${DEFAULT_COUNTER_INTERVAL}`;
    const initialValue =
      CookieManager.get(valueCookieKey) ?? `${DEFAULT_COUNTER_VALUE}`;
    setIntervalValue(parseInt(initialInterval));
    setCurrentValue(parseInt(initialValue));
  };

  useEffect(() => {
    setInitialDataByName();
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) return;

    CookieManager.set(intervalCookieKey, intervalValue.toString());
    CookieManager.set(valueCookieKey, value.toString());
  }, [intervalValue, value]);

  const disableButtons = isNaN(intervalValue);

  return (
    <div className='flex flex-col gap-4 p-6 rounded-lg border-2 border-gray-500'>
      {name ? (
        <h2 className='text-center text-2xl font-bold border-b-2 pb-4 border-gray-400'>
          {name}
        </h2>
      ) : null}

      {hasInterval ? (
        <NumberInput
          label='Interval'
          value={intervalValue}
          onChange={setIntervalValue}
        />
      ) : null}

      <div className='flex gap-4 justify-center'>
        <Button
          disabled={disableButtons}
          label='Increment (+)'
          onClick={onIncrement}
        />
        <Button
          disabled={disableButtons}
          type='DANGER'
          label='Decrement (-)'
          onClick={onDecrement}
        />
      </div>

      <p className='pt-4 flex items-center justify-center border-t-2 border-gray-400'>
        <span className='text-3xl'>Count:</span>
        <b className='text-5xl pl-2'>{value}</b>
      </p>
    </div>
  );
};

export default Counter;
