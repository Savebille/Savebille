import React from 'react';
import Text from '../../../components/Text';
import PasswordInput from '../../../components/PasswordInput';
import CheckboxInput from '../components/CheckboxInput';
import TextDivider from '../components/TextDivider';
import AuthOptionMessage from '../components/AuthOptionMessage';
import IconButton from '../../../components/IconButton';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';

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
      className={`w-full h-full lg:w-[58%] px-[30px] py-[80px] lg:px-[80px] xl:px-[120px] flex flex-col items-center justify-between  ${containerAnimation}`}
    >
      {/* header */}
      <div className='w-full h-auto flex flex-col items-center justify-between gap-4'>
        {/* avatar */}
        <div className='w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] overflow-hidden rounded-full shadow-xl'>
          <img
            src='src/assets/img/LoginAvatar.png'
            alt='user avatar'
            className='object-cover object-center'
          />
        </div>

        {/* textos */}
        <div className='w-full h-auto flex flex-col items-center justify-between text-center gap-2'>
          <Text weight='medium' color='primary' size='title'>
            Welcome back
          </Text>
          <Text weight='regular' color='secondary' size='extraLarge'>
            Please enter your details to sign in.
          </Text>
        </div>
      </div>

      {/* buttons */}
      <div className='w-full h-auto flex flex-col justify-between lg:flex-row lg:justify-center items-center gap-2'>
        <IconButton
          iconSource='src/assets/img/google.svg'
          iconAltText='google icon'
        />
      </div>

      {/* OR */}
      <TextDivider text='OR' />

      {/* form */}
      <div className='w-full h-auto flex flex-col justify-between items-center sm:gap-6'>
        {/* inputs */}
        <form className='w-full h-auto flex flex-col justify-between gap-6'>
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
        <div className='sm:w-full sm:h-auto sm:flex sm:flex-row hidden justify-between items-center gap-2'>
          <CheckboxInput
            labelText='Remember me'
            anchorText='Forgot password?'
          />
        </div>
      </div>

      {/* remember password mobile*/}
      <div className='w-full h-auto flex flex-col sm:hidden justify-between items-center gap-2'>
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
