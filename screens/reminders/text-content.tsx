import CustomText from "@/components/text";
import { Colors, Size } from "@/constants/theme";
import { getLineHeight } from "@/lib/utils";
import { StyleSheet, View } from "react-native";

const TextContent = (props: {
  header: string;
  subHeader: string;
  variant?: "hero";
}) => {
  const { header, subHeader, variant } = props;

  return (
    <View style={[styles.wrapper, variant && styles.hero]}>
      <CustomText style={styles.headerText}>{header}</CustomText>
      <CustomText style={styles.subHeaderText}>{subHeader}</CustomText>
    </View>
  );
};

export default TextContent;

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: Size.regular,
    gap: 15,
  },
  hero: {
    paddingTop: 48,
  },
  headerText: {
    fontSize: Size.md,
    width: 260,
    fontFamily: "helveticaBold",
    lineHeight: getLineHeight(Size.md, 135),
  },
  subHeaderText: {
    color: Colors.light.textSec,
    fontFamily: "helveticaLight",
    lineHeight: getLineHeight(16, 165),
  },
});
