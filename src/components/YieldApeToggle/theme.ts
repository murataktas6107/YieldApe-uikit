import { darkColors, lightColors } from "../../theme/colors";
import { YieldApeToggleTheme } from "./types";

export const light: YieldApeToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: YieldApeToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
