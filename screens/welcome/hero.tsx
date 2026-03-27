import Logo from "@/components/logo";
import CustomText from "@/components/text";
import { Colors } from "@/constants/theme";
import { getLetterSpacing, getLineHeight } from "@/lib/utils";
import { StyleSheet, View } from "react-native";

const Hero = () => {
  return (
    <View style={styles.wrapper}>
      <Logo location="welcome" />
      <View style={styles.textWrapper}>
        <CustomText
          style={[styles.textStyle, styles.headerText, styles.fontWeight]}
        >
          <CustomText style={[styles.textStyle, styles.headerText]}>
            Hi Afsar, Welcome
          </CustomText>{" "}
          to Silent Moon
        </CustomText>
        <CustomText style={[styles.textStyle, styles.descText]}>
          Explore the app, Find some peace of mind to prepare for meditation.
        </CustomText>
      </View>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  wrapper: {
    gap: 75,
    alignItems: "center",
  },
  textWrapper: {
    alignItems: "center",
    gap: 15,
  },
  textStyle: {
    textAlign: "center",
  },
  fontWeight: {
    fontFamily: "helveticaLight",
  },
  headerText: {
    fontSize: 30,
    width: 270,
    lineHeight: getLineHeight(30, 137),
    letterSpacing: getLetterSpacing(30, 1),
    color: Colors.light.textAlt,
    fontFamily: "helveticaMedium",
  },
  descText: {
    color: Colors.light.tintSec,
    width: 317,
  },
});
