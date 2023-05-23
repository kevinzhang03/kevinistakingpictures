import React from 'react';
import clsx from 'clsx';

import { useState, useEffect } from 'react';
import { useAuthStateChanged } from '../Hooks/useAuthStateChanged';

import { auth, providerGoogle, providerGithub } from './config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from '@firebase/auth';
import InputText from '../Atoms/InputText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

//TODO do not allow users to sign in when already signed in

export default function FirebaseLogin() {
  const [newAccount, setNewAccount] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  useAuthStateChanged(isAuthenticated => {
    setAuthenticated(isAuthenticated);
  }); 

  const authenticateUser = async () => {
    try {
      newAccount
        ? await createUserWithEmailAndPassword(auth, email, password)
        : await signInWithEmailAndPassword(auth, email, password);
    } catch(err) {
      console.error(err);
    }
  };

  const authenticateUserGoogle = async () => {
    try {
      await signInWithPopup(auth, providerGoogle);
    } catch(err) {
      console.error(err);
    }
  };
  
  const authenticateUserGithub = async () => {
    try {
      await signInWithPopup(auth, providerGithub);
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

  useEffect(() => {
    console.log(newAccount);
  }, [newAccount]);

  return (
    <div className="w-full p-8 my-4 lg:flex justify-evenly bg-white/50 rounded-3xl shadow-lg">
      <div className="w-full lg:w-4/12 flex flex-col gap-y-4">
        <div className="flex flex-col md:flex-row w-full min-h-[2.5rem] gap-2">
          <button
            disabled={!newAccount}
            onClick={() => setNewAccount(false)}
            className={clsx(
              'flex-1 p-2 select-none rounded-sm transition-color duration-300',
              !newAccount
                ? 'pointer-events-none text-antique-200 bg-antique-400'
                : 'text-antique-700 bg-antique-200 hover:bg-antique-300 active:bg-antique-400'
            )}
          >
            existing account
          </button>
          <button
            disabled={newAccount}
            onClick={() => setNewAccount(true)}
            className={clsx(
              'flex-1 p-2 select-none rounded-sm transition-color duration-300',
              newAccount
                ? 'pointer-events-none text-antique-200 bg-antique-400'
                : 'text-antique-700 bg-antique-200 hover:bg-antique-300 active:bg-antique-400'
            )}
          >
            new account
          </button>
        </div>
        <label htmlFor="new account email" className="text-xs text-antique-700/50">
          email
          <InputText
            id="new account email"
            type="email"
            placeholder="email"
            disabled={authenticated}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="new account password" className="text-xs text-antique-700/50">
          password
          <InputText
            id="new account password"
            type="password"
            placeholder="password"
            disabled={authenticated}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className={clsx('flex w-full h-10 space-x-2', authenticated && 'opacity-50 pointer-events-none')}>
          <button
            onClick={authenticateUser}
            className="flex-1 select-none
              text-antique-700
              bg-antique-200 hover:bg-antique-300 active:bg-antique-400
              rounded-sm transition-color duration-300"
          >
            <span className={clsx(authenticated && 'blur-1')}>
              {newAccount ? (
                'sign up'
              ) : (
                'sign in'
              )}
            </span>
          </button>
          <button
            onClick={authenticateUserGoogle}
            className="flex-none w-10 p-2 select-none
              text-antique-700
              bg-antique-200 hover:bg-antique-300 active:bg-antique-400
              rounded-sm transition-all duration-300"
          >
            <FontAwesomeIcon icon={brands('google')}/>
          </button>
          <button
            onClick={authenticateUserGithub}
            className="flex-none w-10 p-2 select-none
              text-antique-700
              bg-antique-200 hover:bg-antique-300 active:bg-antique-400
              rounded-sm transition-all duration-300"
          >
            <FontAwesomeIcon icon={brands('github')}/>
          </button>
        </div>
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
