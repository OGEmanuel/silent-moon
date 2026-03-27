import Logo from "@/components/logo";
import CustomText from "@/components/text";
import { Colors, Size } from "@/constants/theme";
import { getLineHeight } from "@/lib/utils";
import { StyleSheet, View } from "react-native";

const HomeHero = () => {
  return (
    <View style={styles.wrapper}>
      <Logo />
      <View style={styles.textWrapper}>
        <CustomText style={styles.headerText}>Good Morning, Afsar</CustomText>
        <CustomText style={styles.subHeaderText}>
          We Wish you have a good day
        </CustomText>
      </View>
    </View>
  );
};

export default HomeHero;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Size.regular,
    alignItems: "center",
    gap: 40,
  },
  textWrapper: {
    alignSelf: "flex-start",
    gap: 10,
  },
  headerText: {
    fontSize: 28,
    fontFamily: "helveticaBold",
    lineHeight: getLineHeight(28),
    color: Colors.light.text,
  },
  subHeaderText: {
    fontFamily: "helveticaLight",
    fontSize: Size.regular,
    lineHeight: getLineHeight(Size.regular),
    color: Colors.light.textSec,
  },
});
