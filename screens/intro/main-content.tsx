import AuthFooter from "@/components/auth-footer";
import CustomText from "@/components/text";
import Button from "@/components/ui/button";
import { Size } from "@/constants/theme";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

const MainContent = () => {
  const router = useRouter();
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
        <Button label="SIGN UP" onPress={() => router.push("/signup")} />
        <AuthFooter />
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
    paddingHorizontal: Size.regular,
    gap: Size.regular,
  },
  textStyle: {
    textAlign: "center",
  },
  textStyleLg: {
    fontFamily: "helveticaBold",
    fontSize: 30,
  },
  textStyleSm: {
    fontFamily: "helveticaRegular",
  },
});
