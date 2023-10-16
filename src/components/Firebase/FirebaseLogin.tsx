import React from 'react';
import clsx from 'clsx';

import { useState } from 'react';
import { useAuthStateChanged } from '../Hooks/useAuthStateChanged';

import { auth } from './config/firebase';
import { signInWithEmailAndPassword, signOut } from '@firebase/auth';
import InputText from '../Atoms/InputText';

//TODO do not allow users to sign in when already signed in

export default function FirebaseLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  useAuthStateChanged(isAuthenticated => {
    setAuthenticated(isAuthenticated);
  }); 

  const authenticateUser = async () => {
    try {
      signInWithEmailAndPassword(auth, email, password);
    } catch(err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch(err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full p-8 my-4 lg:flex justify-evenly bg-white/50 rounded-3xl shadow-lg">
      <div className="w-full lg:w-4/12 flex flex-col gap-y-4">
        <label htmlFor="account email" className="text-xs text-antique-700/50">
          email
          <InputText
            id="account email"
            type="email"
            placeholder="email"
            disabled={authenticated}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="account password" className="text-xs text-antique-700/50">
          password
          <InputText
            id="account password"
            type="password"
            placeholder="password"
            disabled={authenticated}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className={clsx('flex w-full h-10 space-x-2 my-4', authenticated && 'opacity-50 pointer-events-none')}>
          <button
            onClick={authenticateUser}
            className="flex-1 select-none
              text-antique-700
              bg-antique-200 hover:bg-antique-300 active:bg-antique-400
              rounded-sm transition-color duration-300"
          >
            <span className={clsx(authenticated && 'blur-1')}>
              sign in
            </span>
          </button>
        </div>
        {authenticated && (
          <div className="mt-4 w-full">
            <button
              disabled={!authenticated}
              onClick={logOut}
              className={clsx(
                'w-full p-2 select-none',
                'text-periwinkle-700',
                'bg-periwinkle-200 hover:bg-periwinkle-300 active:bg-periwinkle-400',
                'rounded-sm transition-color duration-300',
                !authenticated && 'pointer-events-none opacity-50'
              )}
            >
              <span className={clsx(!authenticated && 'blur-1')}>sign out</span>
            </button>
          </div>
        )}
        {authenticated ? (
          <span className="text-antique-900">
            signed in as: {auth.currentUser?.email}
          </span>
        ) : (
          <span className="italic text-antique-700/50 select-none pointer-events-none">
            you're not signed in
          </span>
        )}
      </div>
    </div>
  );
}
