import { yearStore } from '@entities/select-year';

import { Errors, InputElements, Status, Success } from '@shared/types';
import { renderError, renderSuccess } from '@shared/ui';

export const watchers = (elements: InputElements) => {
  yearStore.error.state.watch((state) => {
    if (elements.error.textContent !== state) {
      renderError(elements.error, state);
    }
  });

  yearStore.status.state.watch((state) => {
    renderSuccess(elements.success, '');
    renderError(elements.error, '');

    if (state === Status.Error) {
      renderSuccess(elements.success, '');
      renderError(elements.error, Errors.Required);
    }

    if (state === Status.Success) {
      renderError(elements.error, '');
      renderSuccess(elements.success, Success.Correct);
    }
  });
};
