import React from 'react';
import { useState, useEffect } from 'react';

export const useStorage = () => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [url, setUrl] = useState<string | null>(null);
};