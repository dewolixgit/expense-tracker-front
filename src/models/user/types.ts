export type UserType = {
  token: string | null;
};

export type UserAuthPayloadType = {
  email: string;
  password: string;
};

export type UserAuthResponseType = UserType | null;
