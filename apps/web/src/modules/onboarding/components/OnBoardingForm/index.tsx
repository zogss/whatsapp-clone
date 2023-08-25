'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Avatar from '~/components/Avatar';
import InputWithLabel from '~/components/form/InputWithLabel';
import { useStateProvider } from '~/contexts/StateContext';
import { OnBoardingFormType, onBoardingSchema } from '~/schemas';

const defaultValues: Partial<OnBoardingFormType> = {
  name: '',
  about: '',
  email: '',
  profileImage: '/default_avatar.png',
};

const OnBoardingForm: React.FC = () => {
  //* hooks
  const [{ userInfo }] = useStateProvider();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OnBoardingFormType>({
    mode: 'onBlur',
    resolver: zodResolver(onBoardingSchema),
    defaultValues: {
      ...defaultValues,
      name: userInfo?.name || defaultValues.name,
      email: userInfo?.email || defaultValues.email,
      profileImage: userInfo?.profileImage || defaultValues.profileImage,
    },
  });

  //* handlers
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  //* render
  return (
    <form onSubmit={onSubmit} className="flex gap-6 mt-6">
      <div className="flex flex-col items-center justify-center mt-5 gap-6">
        <InputWithLabel
          {...register('name')}
          error={errors.name?.message}
          label
          labelText="Name"
        />
        <InputWithLabel
          {...register('about')}
          error={errors.about?.message}
          label
          labelText="About"
        />
      </div>
      <div>
        <Controller
          name="profileImage"
          control={control}
          render={({ field: { ref, ...rest }, fieldState: { error } }) => (
            <Avatar {...rest} error={error?.message} type="xl" />
          )}
        />
      </div>
    </form>
  );
};

export default OnBoardingForm;
