import { zipToStore } from '@entities/input-zip-to';

import { InputElements, Load, Status, Success } from '@shared/types';
import { renderDisabled, renderError, renderLoad, renderSuccess } from '@shared/ui';

export const watchers = (elements: InputElements) => {
  zipToStore.error.state.watch((state) => {
    if (elements.error.textContent !== state) {
      renderError(elements.error, state);
    }
  });

  zipToStore.status.state.watch((state) => {
    renderDisabled(elements.input, false);
    renderSuccess(elements.success, '');
    renderLoad(elements.load, '');

    if (state === Status.Success) {
      renderSuccess(elements.success, Success.Correct);
    }

    if (state === Status.Loading) {
      renderLoad(elements.load, Load.Request);
      renderDisabled(elements.input, true);
    }
  });
};
