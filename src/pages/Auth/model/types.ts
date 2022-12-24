export type AuthFormFieldsType = {
  email: string;
  password: string;
};

export type AuthFormType = {
  isRegistering: boolean;
  fields: AuthFormFieldsType;
};
