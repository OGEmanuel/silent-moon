/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { getLetterSpacing, getLineHeight } from "@/lib/utils";
import { Platform } from "react-native";

const tintColorLight = "#8E97FD";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#3F414E",
    btnPryText: "#F6F1FB",
    textSec: "#A1A4B2",
    textBlack: "#000",
    textAlt: "#FFECCC",
    textAltSec: "#FEF9F3",
    textAltForeGround: "#FEFFFE",
    background: "#fff",
    backgroundSec: "#F2F3F7",
    backgroundAlt: "#F5F5F9",
    tint: tintColorLight,
    tintSec: "#EBEAEC",
    icon: "#687076",
    tabIconDefault: "#A0A3B1",
    tabIconSelected: tintColorLight,
    secondChoiceBg: "#FA6E5A",
    thirdChoiceBg: "#FEB18F",
    fourthChoiceBg: "#FFCF86",
    fifthChoiceBg: "#6CB28E",
    eighthChoiceBg: "#D9A5B5",
    category: "#F7E8D0",
    musicCardBg: "#FFC97E",
    musicText: "#524F53",
    dailyThought: "#333242",
    recList1Bg: "#FCF5EB",
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

export const Typography = {
  fontSize: 14,
  letterSpacing: getLetterSpacing(14),
  lineHeight: getLineHeight(14),
};

export const Size = {
  regular: 20,
  md: 24,
};
