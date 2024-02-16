import React from 'react';
import PasswordInput from '../../../components/PasswordInput';
import CheckboxInput from '../components/CheckboxInput';
import TextDivider from '../components/TextDivider';
import AuthOptionMessage from '../components/AuthOptionMessage';
import IconButton from '../../../components/IconButton';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import TextHeaders from '../../../components/TextHeaders';
import IMAGES from '../../../shared/constants/images';
import GoogleIcon from '../../../../public/assets/icons/google.svg';

interface SignInFormProps {
  containerAnimation: string;
  handleStepChange: (nextStep: number) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({
  containerAnimation,
  handleStepChange,
}) => {
  return (
    <div
      id='sign-in'
      className={`w-full h-full lg:w-[58%] p-5 sm:py-[60px] sm:px-[120px] flex flex-col items-center justify-between  ${containerAnimation}`}
    >
      {/* header */}
      <div className='w-full h-auto flex flex-col items-center justify-between gap-4'>
        {/* avatar */}
        <div className='w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] overflow-hidden rounded-full shadow-xl'>
          <img
            src={IMAGES.SAVEBILLE}
            alt='Savebille Icon'
            className='object-cover object-center'
          />
        </div>

        {/* textos */}
        <TextHeaders
          title='Welcome back'
          subtitle='Please enter your details to sign in.'
        />
      </div>

      {/* buttons */}
      <div className='w-full h-auto flex justify-center items-center'>
        <IconButton iconSource={GoogleIcon} iconAltText='google icon' />
      </div>

      {/* OR */}
      <TextDivider text='OR' />

      {/* form */}
      <div className='w-full h-auto flex flex-col justify-between items-center sm:gap-4'>
        {/* inputs */}
        <form className='w-full h-auto flex flex-col justify-between gap-4 sm:gap-6'>
          {/* email */}
          <TextInput
            labelText='Email'
            placeHolder='What is your email?'
            type='email'
            idName='email'
          />

          {/* password */}
          <PasswordInput idName='password-sign-in' />
        </form>

        {/* remember password desktop*/}
        <div className='sm:w-full sm:h-auto sm:flex sm:flex-row hidden justify-between items-center gap-1'>
          <CheckboxInput
            labelText='Remember me'
            anchorText='Forgot password?'
          />
        </div>
      </div>

      {/* remember password mobile*/}
      <div className='w-full h-auto flex flex-col sm:hidden justify-between items-center gap-1'>
        <CheckboxInput labelText='Remember me' anchorText='Forgot password?' />

      </div>
      {/* Button SignIn */}
      <Button text='Sign In' />

      {/* Sign Up */}
      <AuthOptionMessage
        anchorHref='#sign-up'
        paragraphText="Don't have an account yet?"
        textButton='Sign Up'
        onClick={() => handleStepChange(1)}
      />
    </div>
  );
};

export default SignInForm;
