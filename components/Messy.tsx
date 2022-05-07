import React, { Component, useCallback, useEffect, useState, FC } from 'react';

const codes =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+{}|:\'<>?-=[]\\;\',./';

const Messy: FC<{ children: any; gap?: number; delay?: number }> = ({
  children,
  ...props
}) => {
  const [resultStr, setResultStr] = useState('');

  const messyLetters = useCallback((str: string, gap = 80, delay = 0) => {
    const strLength = str.length;
    const resultStr = Array.from({ length: strLength }).fill(0);
    let i = 0;

    function generateStr(start: number, length: number) {
      for (let i = start; i < length; i++) {
        resultStr[i] = codes[~~(Math.random() * codes.length)];
      }
    }

    const messyTimer = setInterval(() => {
      resultStr[i] = str[i];
      generateStr(++i, strLength);
      setResultStr(resultStr.join(''));
      i >= str.length && clearInterval(messyTimer);
    }, gap);
  }, []);

  useEffect(() => {
    const content = children || '';
    const gap = props.gap ? +props.gap : 80;
    messyLetters(content + '', gap);
  }, [children, messyLetters, props.delay, props.gap]);

  return <section>{resultStr}</section>;
};

export default Messy;
