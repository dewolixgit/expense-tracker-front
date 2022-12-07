import { createEffect } from 'effector';

import { TrackerInitialDataType } from 'models/initialData/types';

export const getInitialDataFx = createEffect<void, TrackerInitialDataType>();
