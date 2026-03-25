import CustomText from "@/components/text";
import { Colors, Size } from "@/constants/theme";
import { getLineHeight } from "@/lib/utils";
import { StyleSheet, View } from "react-native";

const Hero = () => {
  return (
    <View style={styles.mainWrapper}>
      <CustomText style={[styles.headerText, styles.fontBold]}>
        What Brings you{" "}
        <CustomText style={[styles.headerText, styles.fontLight]}>
          to Silent Moon?
        </CustomText>
      </CustomText>
      <CustomText style={[styles.descText, styles.fontLight]}>
        choose a topic to focus on:
      </CustomText>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  mainWrapper: {
    paddingHorizontal: Size.regular,
    paddingTop: 76,
    gap: 10,
  },
  headerText: {
    fontSize: 28,
    lineHeight: getLineHeight(28, 135),
    width: 220,
  },
  descText: {
    color: Colors.light.textSec,
    fontSize: Size.regular,
    lineHeight: getLineHeight(28, 100),
  },
  fontBold: {
    fontFamily: "helveticaBold",
  },
  fontLight: {
    fontFamily: "helveticaLight",
  },
});
