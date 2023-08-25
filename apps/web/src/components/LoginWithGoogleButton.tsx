'use client';
import axios from 'axios';
import clsx from 'clsx';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { useStateProvider } from '~/contexts/StateContext';
import { API_ROUTES } from '~/utils/api.routes';
import { firebaseAuth } from '~/utils/firebase.config';

interface LoginWithGoogleButtonProps {
  redirectUrl?: string;
  className?: string;
}

const LoginWithGoogleButton: React.FC<LoginWithGoogleButtonProps> = ({
  redirectUrl = '/onboarding',
  className,
}) => {
  //* hooks
  const router = useRouter();
  const [_, dispatch] = useStateProvider();

  //* handlers
  const handleLogin = useCallback(async () => {
    const provider = new GoogleAuthProvider();

    try {
      const {
        user: { displayName, email, photoURL },
      } = await signInWithPopup(firebaseAuth, provider);

      if (!email) throw new Error('Email not found!');

      const { data } = await axios.post(API_ROUTES.VERIFY_USER, { email });

      if (!data?.status) {
        dispatch({
          type: 'SET_NEW_USER',
          payload: true,
        });
        dispatch({
          type: 'SET_USER_INFO',
          payload: {
            name: displayName,
            email: email,
            profileImage: photoURL,
            status: 'active',
          },
        });

        router.push(redirectUrl);
      }
    } catch (error) {
      toast.error('Error: ', error || 'Something went wrong!');
    }
  }, [dispatch, redirectUrl, router]);

  //* render
  return (
    <button
      type="button"
      title="Login with Google"
      onClick={handleLogin}
      className={clsx(
        'flex items-center justify-center gap-2 bg-white rounded-full pl-2 pr-5 py-2',
        className
      )}
    >
      <FcGoogle className="text-4xl" />
      <span className="text-zinc-950 text-xl">Login with google</span>
    </button>
  );
};

export default LoginWithGoogleButton;
