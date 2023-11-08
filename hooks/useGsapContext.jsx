import { useMemo } from 'react';

const useGsapContext = () => {
    const ctx = useMemo(() => gsap.context(() => {}, scope), [scope]);
  return ctx;

};

export default useGsapContext;