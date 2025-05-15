import {
  FormWizardActionType,
  FormWizardState,
  NEXT_STEP,
  PREVIOUS_STEP,
  RESET_WIZARD,
  SUBMIT_WIZARD_SUCCESS,
  UPDATE_INCOME_DETAILS,
  UPDATE_PERSONAL_INFO,
} from './formWizardTypes';

export const initialWizardState: FormWizardState = {
  currentStep: 1,
  personalInfo: {
    firstName: '',
    lastName: '',
    age: 0,
  },
  incomeDetails: {
    annualIncome: 0,
    employmentStatus: 'open',
  },
  isSubmitted: false,
};

export const formWizardReducer = (
  state: FormWizardState = initialWizardState,
  action: FormWizardActionType,
) => {
  switch (action.type) {
    case NEXT_STEP: {
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    }
    case PREVIOUS_STEP: {
      if (state.currentStep !== 1) {
        return {
          ...state,
          currentStep: state.currentStep - 1,
        };
      }
      return state;
    }
    case UPDATE_PERSONAL_INFO: {
      return {
        ...state,
        personalInfo: action.payload,
      };
    }
    case UPDATE_INCOME_DETAILS: {
      return {
        ...state,
        incomeDetails: action.payload,
      };
    }
    case SUBMIT_WIZARD_SUCCESS: {
      return {
        ...state,
        isSubmitted: true,
      };
    }
    case RESET_WIZARD: {
      return initialWizardState;
    }
    default: {
      return state;
    }
  }
};
