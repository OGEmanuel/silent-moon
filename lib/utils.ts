import { Dimensions } from "react-native";

export const getFullWidth = () => {
  return Dimensions.get("window").width;
};

export type FormFieldApi<TValue> = {
  name: string;
  state: {
    value: TValue;
    meta: {
      isTouched: boolean;
      isValid: boolean;
      errors: ({ message?: string | undefined } | undefined)[];
    };
  };
  handleBlur: () => void;
  handleChange: (value: TValue) => void;
};

export const getLineHeight = (fontSize: number, unit = 108) => {
  const lineHeight = fontSize * (unit / 100);

  return lineHeight;
};

export const getLetterSpacing = (fontSize: number, unit = 5) => {
  const letterSpacing = fontSize * (unit / 100);

  return letterSpacing;
};
