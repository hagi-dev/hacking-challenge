import { useState, useEffect } from 'react';

export const useCan = (error: Record<string, boolean>, requiredFields: number) => {
  const [can, setCan] = useState(false);

  useEffect(() => {
    const hasErrors = Object.values(error).some((value) => value === true);
    const allFieldsFilled = Object.values(error).length === requiredFields;
    setCan(!hasErrors && allFieldsFilled);
  }, [error, requiredFields]);

  return can;
};