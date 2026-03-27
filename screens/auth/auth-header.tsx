import ArrowIcon from "@/components/jsx-icons/arrow-icon";
import FacebookLogo from "@/components/jsx-icons/facebook-logo";
import GoogleLogo from "@/components/jsx-icons/google-logo";
import CustomText from "@/components/text";
import Button from "@/components/ui/button";
import { Colors, Size, Typography } from "@/constants/theme";
import { getFullWidth } from "@/lib/utils";
import { useNavigation } from "expo-router";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";

const AuthHeader = (props: { location?: "login" | "signup" }) => {
  const { location = "login" } = props;
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/auth-bg.png")}
        style={styles.bgImage}
      />
      <View style={styles.mainWrapper}>
        <Pressable
          onPress={() => navigate.goBack()}
          style={styles.arrowWrapper}
        >
          <ArrowIcon />
        </Pressable>
        <View style={styles.bodyWrapper}>
          <View style={styles.headerBtnWrapper}>
            <CustomText style={styles.mainText}>
              {location === "login" ? "Welcome Back!" : "Create your account "}
            </CustomText>
            <View style={styles.btnWrapper}>
              <Button
                variant="icon"
                label="CONTINUE WITH FACEBOOK"
                icon={<FacebookLogo />}
                style={styles.facebookBtn}
                textStyle={styles.facebookBtnText}
              />
              <Button
                variant="icon"
                label="CONTINUE WITH GOOGLE"
                icon={<GoogleLogo />}
                style={styles.googleBtn}
              />
            </View>
          </View>
          <CustomText style={styles.subText}>OR LOG IN WITH EMAIL</CustomText>
        </View>
      </View>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  mainWrapper: {
    paddingTop: Size.md,
    gap: 16,
    paddingHorizontal: Size.regular,
  },
  bgImage: {
    width: getFullWidth(),
    height: 428.24,
    position: "absolute",
  },
  arrowWrapper: {
    width: 55,
    height: 55,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: Colors.light.tintSec,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
  },
  bodyWrapper: {
    gap: 28,
  },
  headerBtnWrapper: {
    gap: 33,
  },
  btnWrapper: {
    gap: Size.regular,
  },
  mainText: {
    fontFamily: "helveticaBold",
    fontSize: 28,
    textAlign: "center",
    lineHeight: 28 * (135 / 100),
  },
  facebookBtn: {
    backgroundColor: "#7583CA",
  },
  facebookBtnText: {
    color: Colors.light.btnPryText,
  },
  googleBtn: {
    borderWidth: 1,
    borderColor: Colors.light.tintSec,
    backgroundColor: Colors.light.background,
  },
  subText: {
    textAlign: "center",
    fontFamily: "helveticaBold",
    color: Colors.light.textSec,
    fontSize: Typography.fontSize,
    letterSpacing: Typography.letterSpacing,
    lineHeight: Typography.lineHeight,
  },
});
