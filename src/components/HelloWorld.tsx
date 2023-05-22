import React, { useEffect } from 'react';

export default function HelloWorld() {
  useEffect(() => {
    console.log('Hello world!');
  }, []);

  return null;
}

