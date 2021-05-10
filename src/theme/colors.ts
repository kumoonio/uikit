import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#23af91",
  primaryBright: "#23af91",
  primaryDark: "#23af91",
  secondary: "#24AE8F",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#000000",
  backgroundDisabled: "#333232",
  contrast: "#191326",
  invertedContrast: "#000000",
  input: "#212121",
  tertiary: "#0d7377",
  text: "#24AE8F",
  textDisabled: "#BDC2C4",
  textSubtle: "#24AE8F",
  borderColor: "#E9EAEB",
  card: "#0b0b0b",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #0d7377 0%, #0d7377 100%)",
  },
};


export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#24AE8F",
  background: "#000000",
  backgroundDisabled: "#333232",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#212121",
  primaryDark: "#0098A1",
  tertiary: "#0d7377",
  text: "#24AE8F",
  textDisabled: "#BDC2C4",
  textSubtle: "#24AE8F",
  borderColor: "#E9EAEB",
  card: "#0b0b0b", 
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #0d7377 0%, #0d7377 100%)",
  },
};
