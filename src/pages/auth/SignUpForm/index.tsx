// SignUpForm.tsx
import React from 'react';
import PasswordInput from '../../../components/PasswordInput';
import CheckboxInput from '../components/CheckboxInput';
import TextDivider from '../components/TextDivider';
import AuthOptionMessage from '../components/AuthOptionMessage';
import IconButton from '../../../components/IconButton';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import TextHeaders from '../../../components/TextHeaders';
import GoogleIcon from '../../../../public/assets/google.svg';

interface SignUnFormProps {
  containerAnimation: string;
  handleStepChange: (nextStep: number) => void;
}

const SignUpForm: React.FC<SignUnFormProps> = ({
  containerAnimation,

  handleStepChange,
}) => {
  return (
    <div
      id='sign-up'
      className={`w-full h-full lg:w-[58%] px-[30px] py-[80px] lg:px-[80px] xl:px-[120px] flex flex-col items-center justify-between  ${containerAnimation}`}
    >
      {/* header */}
      <div className='w-full h-auto flex flex-col items-center'>
        {/* textos */}
        <TextHeaders
          title='Create a new account'
          subtitle='Please enter your details to sign up.'
        />
      </div>

      {/* buttons */}
      <div className='w-full h-auto flex flex-col justify-between lg:flex-row lg:justify-center items-center gap-2'>
        <IconButton iconSource={GoogleIcon} iconAltText='google icon' />
      </div>

      {/* OR */}
      <TextDivider text='OR' />

      {/* form */}
      <div className='w-full h-auto flex flex-col justify-between items-center sm:gap-6 '>
        {/* inputs */}
        <form className='w-full h-auto flex flex-col justify-between gap-6'>
          {/* name */}
          <TextInput
            labelText='First name'
            placeHolder='What is your name?'
            type='text'
            idName='name'
          />

          {/* email */}
          <TextInput
            labelText='Email'
            placeHolder='What is your email?'
            type='email'
            idName='email'
          />

          {/* password */}
          <PasswordInput idName='password-sign-up' />
        </form>

        {/* Agree with Terms and Conditions desktop*/}
        <div className='sm:w-full sm:h-auto sm:flex sm:flex-row hidden justify-start items-center gap-1'>
          <CheckboxInput
            labelText='You agree to our'
            anchorText='Terms and Conditions'
          />
        </div>
      </div>

      {/* Agree with Terms and Conditions mobile*/}
      <div className='w-full h-auto flex flex-col sm:hidden justify-start items-center gap-2'>
        <CheckboxInput
          labelText='You agree to our'
          anchorText='Terms and Conditions'
        />
      </div>

      {/* Button SignIn */}
      <Button text='Register' />

      {/* Sign Up */}
      <AuthOptionMessage
        anchorHref='#sign-in'
        paragraphText='Do you already have an account?'
        textButton='Sign In'
        onClick={() => handleStepChange(0)}
      />
    </div>
  );
};

export default SignUpForm;
