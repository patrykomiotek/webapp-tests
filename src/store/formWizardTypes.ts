export interface PersonalInfoData {
  firstName: string;
  lastName: string;
  age: number;
}

export interface IncomeDetailsData {
  annualIncome: number;
  employmentStatus: string; // TODO: enum
}

export interface FormWizardState {
  currentStep: number; // TODO: enum
  personalInfo: PersonalInfoData;
  incomeDetails: IncomeDetailsData;
  isSubmitted: boolean;
  error?: object;
}

export const NEXT_STEP = 'wizard/NEXT_STEP';
export const PREVIOUS_STEP = 'wizard/PREVIOUS_STEP';
export const UPDATE_PERSONAL_INFO = 'wizard/UPDATE_PERSONAL_INFO';
export const UPDATE_INCOME_DETAILS = 'wizard/UPDATE_INCOME_DETAILS';
export const SUBMIT_WIZARD_SUCCESS = 'wizard/SUBMIT_WIZARD_SUCCESS';
export const RESET_WIZARD = 'wizard/RESET_WIZARD';

export const nextStep = () => ({ type: NEXT_STEP });
export const prevStep = () => ({ type: PREVIOUS_STEP });
export const updatePersonalInfo = (data: PersonalInfoData) => ({
  type: UPDATE_PERSONAL_INFO,
  payload: data,
});
export const updateIncomeDetails = (data: IncomeDetailsData) => ({
  type: UPDATE_INCOME_DETAILS,
  payload: data,
});
export const submitWizardSuccess = () => ({ type: SUBMIT_WIZARD_SUCCESS });
export const resetWizard = () => ({ type: RESET_WIZARD });

export type FormWizardActionType =
  | {
      type: 'wizard/NEXT_STEP';
    }
  | {
      type: 'wizard/PREVIOUS_STEP';
    }
  | {
      type: 'wizard/UPDATE_PERSONAL_INFO';
      payload: PersonalInfoData;
    }
  | {
      type: 'wizard/UPDATE_INCOME_DETAILS';
      payload: IncomeDetailsData;
    }
  | {
      type: 'wizard/SUBMIT_WIZARD_SUCCESS';
    }
  | {
      type: 'wizard/RESET_WIZARD';
    };
