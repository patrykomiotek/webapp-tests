import { formWizardReducer } from './formWizardReducer';
import {
  NEXT_STEP,
  PREVIOUS_STEP,
  UPDATE_PERSONAL_INFO,
  UPDATE_INCOME_DETAILS,
  SUBMIT_WIZARD_SUCCESS,
  RESET_WIZARD,
  FormWizardActionType,
} from './formWizardTypes';

const initialState = {
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

describe('formWizardReducer', () => {
  it('should return default state', () => {
    const state = formWizardReducer(initialState, {} as FormWizardActionType);
    expect(state).toStrictEqual(initialState);
  });

  it('should go to the next step', () => {
    let state = formWizardReducer(initialState, { type: NEXT_STEP });
    state = formWizardReducer(state, { type: NEXT_STEP });

    expect(state.currentStep).toEqual(3);
  });

  it('should go to the previous step', () => {
    let state = formWizardReducer(initialState, { type: NEXT_STEP });
    state = formWizardReducer(state, { type: PREVIOUS_STEP });

    expect(state.currentStep).toEqual(1);
  });

  it('should update personal info', () => {
    const state = formWizardReducer(initialState, {
      type: UPDATE_PERSONAL_INFO,
      payload: { firstName: 'Joe', lastName: 'Doe', age: 45 },
    });

    expect(state).toStrictEqual({
      currentStep: 1,
      personalInfo: {
        firstName: 'Joe',
        lastName: 'Doe',
        age: 45,
      },
      incomeDetails: {
        annualIncome: 0,
        employmentStatus: 'open',
      },
      isSubmitted: false,
    });
  });

  it('should update income details', () => {
    const state = formWizardReducer(initialState, {
      type: UPDATE_INCOME_DETAILS,
      payload: { annualIncome: 100000, employmentStatus: 'open' },
    });

    expect(state).toStrictEqual({
      currentStep: 1,
      personalInfo: {
        firstName: '',
        lastName: '',
        age: 0,
      },
      incomeDetails: {
        annualIncome: 100000,
        employmentStatus: 'open',
      },
      isSubmitted: false,
    });
  });

  it('should update send for mas submitted', () => {
    const state = formWizardReducer(initialState, {
      type: SUBMIT_WIZARD_SUCCESS,
    });

    expect(state).toStrictEqual({
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
      isSubmitted: true,
    });
  });
  it('should reset state to defaults', () => {
    let state = formWizardReducer(initialState, { type: NEXT_STEP });
    state = formWizardReducer(state, { type: RESET_WIZARD });

    expect(state).toStrictEqual(initialState);
  });
});
