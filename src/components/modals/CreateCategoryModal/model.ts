import { FormInstance } from 'antd/es/form/Form';
import { createEvent, sample } from 'effector';
import { createGate } from 'effector-react';

import {
  ChangeCategoryFieldsType,
  EditCategoryFormPayloadType,
} from 'components/modals/CreateCategoryModal/types';
import { createCategoryFx, editCategoryFx } from 'models/categories';
import {
  CategoryCreatingPayloadType,
  CategoryEditingPayLoadType,
} from 'models/categories/types';
import { $user, UserType } from 'models/user';

export const FormApiGate = createGate<{ formApi: FormInstance }>();

export const finishCreatingForm = createEvent<
  ChangeCategoryFieldsType & { onSuccess: VoidFunction }
>();

export const finishEditingForm = createEvent<
  EditCategoryFormPayloadType & { onSuccess: VoidFunction }
>();

sample({
  clock: finishCreatingForm,
  source: $user,
  fn: (
    user,
    payload
  ): CategoryCreatingPayloadType &
    Pick<UserType, 'token'> & { onSuccess: VoidFunction } => ({
    name: payload.name,
    color: payload.color,
    token: user.token,
    onSuccess: payload.onSuccess,
  }),
  target: createCategoryFx,
});

sample({
  clock: finishEditingForm,
  source: $user,
  fn: (
    user,
    editingFormPayload
  ): CategoryEditingPayLoadType &
    Pick<UserType, 'token'> & { onSuccess: VoidFunction } => ({
    id: editingFormPayload.id,
    name: editingFormPayload.name,
    color: editingFormPayload.color,
    onSuccess: editingFormPayload.onSuccess,
    token: user.token,
  }),
  target: editCategoryFx,
});
