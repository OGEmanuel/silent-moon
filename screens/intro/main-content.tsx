import Button from "@/components/button";
import CustomText from "@/components/text";
import { Colors, Typography } from "@/constants/theme";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

const MainContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainWrapper}>
        <View style={styles.innerWrapper}>
          <CustomText style={[styles.textStyle, styles.textStyleLg]}>
            We are what we do
          </CustomText>
          <CustomText style={[styles.textStyle, styles.textStyleSm]}>
            Thousand of people are usign silent moon for smalls meditation
          </CustomText>
        </View>
      </View>
      <View style={styles.footerWrapper}>
        <Button label="SIGN UP" />
        <CustomText style={[styles.textStyle, styles.footerTextStyle]}>
          ALREADY HAVE AN ACCOUNT?{" "}
          <Link href={"/"} style={styles.linkText}>
            LOG IN
          </Link>
        </CustomText>
      </View>
    </View>
  );
};

export default MainContent;

const styles = StyleSheet.create({
  container: {
    gap: 62,
  },
  mainWrapper: {
    alignItems: "center",
  },
  innerWrapper: {
    width: 298,
    alignItems: "center",
    gap: 15,
  },
  footerWrapper: {
    paddingHorizontal: 20,
    gap: 20,
  },
  textStyle: {
    textAlign: "center",
  },
  footerTextStyle: {
    fontSize: Typography.fontSize,
    letterSpacing: Typography.letterSpacing,
    lineHeight: Typography.lineHeight,
    color: Colors.light.textBlack,
  },
  linkText: {
    color: Colors.light.tint,
  },
  textStyleLg: {
    fontFamily: "helveticaBold",
    fontSize: 30,
  },
  textStyleSm: {
    fontFamily: "helveticaRegular",
  },
});
