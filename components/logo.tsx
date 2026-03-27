import { Colors } from "@/constants/theme";
import { StyleSheet, View } from "react-native";
import LogoIcon from "./jsx-icons/logo";
import CustomText from "./text";

const Logo = (props: { location?: "welcome" | "intro" }) => {
  const { location = "intro" } = props;

  return (
    <View style={styles.logoWrapper}>
      <CustomText
        style={[styles.logoText, location === "welcome" && styles.welcomePage]}
      >
        Silent
      </CustomText>
      <LogoIcon />
      <CustomText
        style={[styles.logoText, location === "welcome" && styles.welcomePage]}
      >
        Moon
      </CustomText>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  welcomePage: {
    color: Colors.light.background,
  },
  logoText: {
    fontFamily: "helveticaBold",
  },
});
