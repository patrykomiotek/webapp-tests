import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { PersonalInfoStep } from './PersonalInfoStep';
import { IncomeDetailsStep } from './IncomeDetailsStep';
import { ReviewStep } from './ReviewStep';
import { Button } from '@atoms/Button';
import { nextStep, prevStep } from 'store/formWizardTypes';

export const FormWizard = () => {
  const wizardState = useSelector((state: RootState) => state.wizard);
  const dispatch = useDispatch();

  const renderStep = () => {
    if (wizardState.currentStep === 1) {
      // personal info
      return <PersonalInfoStep />;
    } else if (wizardState.currentStep === 2) {
      // income details
      return <IncomeDetailsStep />;
    } else if (wizardState.currentStep === 3) {
      return <ReviewStep />;
    }
  };

  return (
    <div>
      <p>Step: {wizardState.currentStep}</p>
      {renderStep()}
      <Button onClick={() => dispatch(prevStep())}>Prev step</Button>
      <Button onClick={() => dispatch(nextStep())}>Next step</Button>
    </div>
  );
};
