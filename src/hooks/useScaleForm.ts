import { useEffect } from 'react';
import { useState } from 'react';

export const useScaleForm = () => {
  const [isScale, setIsScale] = useState(false);

  useEffect(() => {
    setIsScale(true);
  },[]);

  return isScale;
};