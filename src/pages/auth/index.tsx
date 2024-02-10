import React, { useEffect, useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import IMAGES from '../../shared/constants/images';

const Auth: React.FC = () => {
  const [step, setStep] = useState(0);
  const [containerAnimation, setContainerAnimation] =
    useState('hiddeContainer');

  const handleStepChange = (nextStep: number) => {
    setContainerAnimation('hiddeContainer');
    setTimeout(() => {
      setStep(nextStep);
      setContainerAnimation('showContainer');
    }, 300);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setContainerAnimation('showContainer');
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [step]);

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      {/* main container */}
      <div className='bg-h-white flex flex-col-reverse lg:flex-row justify-between rounded-3xl shadow-lg max-w-[1438px] max-h-[954px] w-[90%] h-[80%]'>
        {step === 0 && (
          <SignInForm
            containerAnimation={containerAnimation}
            handleStepChange={handleStepChange}
          />
        )}

        {step === 1 && (
          <SignUpForm
            containerAnimation={containerAnimation}
            handleStepChange={handleStepChange}
          />
        )}

        {/* img */}

        <div className='hidden lg:block lg:w-[42%] lg:h-full overflow-hidden'>
          <img
            src={IMAGES.BANNER}
            alt='Login Banner'
            className='w-full h-full object-cover object-center rounded-t-3xl lg:rounded-r-3xl lg:rounded-l-none'
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Auth);
