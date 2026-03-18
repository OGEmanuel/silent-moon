import { Colors, Typography } from "@/constants/theme";
import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextProps,
  View,
  ViewProps,
} from "react-native";
import GoogleLogo from "./jsx-icons/google-logo";
import CustomText from "./text";

const Button = (props: {
  onPress?: () => void;
  label: string;
  variant?: "primary" | "secondary" | "icon";
  style?: StyleProp<ViewProps>;
  textStyle?: StyleProp<TextProps>;
}) => {
  const { onPress, label, variant = "primary", style, textStyle } = props;

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.buttonStyle,
        variant !== "icon" && styles.buttonPlainStyle,
        variant === "icon" && styles.buttonIconStyle,
        variant === "primary" && styles.primaryButton,
        variant === "secondary" && styles.secondaryButton,
        style,
      ]}
    >
      {variant === "icon" && (
        <View style={styles.iconView}>
          <GoogleLogo />
        </View>
      )}
      <CustomText
        style={[
          styles.buttonText,
          variant === "primary" && styles.primaryButtonText,
          variant === "icon" && styles.iconText,
          textStyle,
        ]}
      >
        {label}
      </CustomText>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonPlainStyle: {
    alignItems: "center",
  },
  buttonIconStyle: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  buttonStyle: {
    height: 63,
    borderRadius: 38,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: Typography.fontSize,
    letterSpacing: Typography.letterSpacing,
    lineHeight: Typography.lineHeight,
  },
  primaryButtonText: {
    color: Colors.light.btnPryText,
  },
  primaryButton: {
    backgroundColor: Colors.light.tint,
  },
  iconText: {
    textAlign: "center",
  },
  iconView: {
    position: "absolute",
    left: 40,
  },
  secondaryButton: {
    backgroundColor: Colors.light.tintSec,
  },
});
