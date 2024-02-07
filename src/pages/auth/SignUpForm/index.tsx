// SignUpForm.tsx
import React from 'react';
import Text from '../../../components/Text';
import PasswordInput from '../../../components/PasswordInput';
import SubmitButton from '../../../components/SubmitButton';
import CheckboxInput from '../components/CheckboxInput';
import TextDivider from '../components/TextDivider';
import AuthOptionMessage from '../components/AuthOptionMessage';
import IconButton from '../../../components/IconButton';
import TextInput from '../../../components/TextInput';

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
      className={`w-full h-[80%] lg:w-[58%] lg:h-full p-[30px] lg:p-[80px] xl:px-[120px] flex flex-col items-center justify-between  ${containerAnimation}`}
    >
      {/* header */}
      <div className='w-full h-auto flex flex-col items-center'>
        {/* textos */}
        <div className='w-full h-auto flex flex-col items-center justify-between text-center gap-2'>
          <Text weight='medium' color='primary' size='title'>
            Create a new account
          </Text>
          <Text weight='regular' color='secondary' size='extraLarge'>
            Please enter your details to sign up.
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
      <div className='w-full h-auto flex flex-col justify-between items-center gap-6 '>
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

        {/* Agree with Terms and Conditions */}
        <div className='w-full h-auto flex flex-col sm:flex-row justify-start items-center gap-1'>
          <CheckboxInput
            labelText='You agree to our'
            anchorText='Terms and Conditions'
          />
        </div>
      </div>

      {/* Button SignIn */}
      <SubmitButton text='Register' />

      {/* Sign Up */}
      <AuthOptionMessage
        paragraphText='Do you already have an account?'
        textButton='Sign In'
        onClick={() => handleStepChange(0)}
      />
    </div>
  );
};

export default SignUpForm;
