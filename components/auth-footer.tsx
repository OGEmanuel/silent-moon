import { Colors, Typography } from "@/constants/theme";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import CustomText from "./text";

const AuthFooter = (props: { location?: "login" | "intro" }) => {
  const { location = "intro" } = props;

  return (
    <CustomText style={styles.mainStyle}>
      ALREADY HAVE AN ACCOUNT?{" "}
      {location === "login" ? (
        <Link href={"/(auth)/signup"} style={styles.linkText}>
          SIGN UP
        </Link>
      ) : (
        <Link href={"/(auth)/login"} style={styles.linkText}>
          LOG IN
        </Link>
      )}
    </CustomText>
  );
};

export default AuthFooter;

const styles = StyleSheet.create({
  mainStyle: {
    textAlign: "center",
    fontSize: Typography.fontSize,
    letterSpacing: Typography.letterSpacing,
    lineHeight: Typography.lineHeight,
    color: Colors.light.textSec,
  },
  linkText: {
    color: Colors.light.tint,
  },
});
