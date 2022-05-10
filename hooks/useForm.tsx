import { ChangeEvent, useState } from 'react';

export const useForm = (validateValue: (value: any) => {}) => {
  const [values, setValues] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(values);
  const hasError = !valueIsValid && isTouched;

  const valueChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues(target.value);
  };

  const inputBluer = () => {
    setIsTouched(true);
    console.log('Saliste del campo sin ingresar nada');
  };

  const reset = () => {
    setValues('');
    setIsTouched(false);
  };

  return { values, valueIsValid, hasError, valueChange, inputBluer, reset };
};
