/* eslint-disable no-unused-vars */

export enum Errors {
  Empty = '',
  Required = 'Required field',
  IncorrectZip = 'Incorrect ZIP',
  Incorrect = 'Incorrect data',
  IncorrectEmail = 'Incorrect Email',
  Network = 'Network Error',
}

export enum Success {
  Correct = 'Correct',
}

export enum Load {
  Request = 'Checking...',
  Loading = 'Loading...',
}

export enum Event {
  Input = 'input',
  Blur = 'blur',
  Focus = 'focus',
  Change = 'change',
}
export enum Status {
  Idle,
  Focused,
  Input,
  Filled,
  Success,
  Error,
  Loading,
  Disabled,
}

export interface InputElements {
  wrapper: HTMLDivElement;
  input: HTMLInputElement;
  select: HTMLSelectElement;
  error: HTMLDivElement;
  success: HTMLDivElement;
  load: HTMLDivElement;
}
