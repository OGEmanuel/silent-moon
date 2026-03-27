import CustomText from "@/components/text";
import { Colors } from "@/constants/theme";
import { getLetterSpacing, getLineHeight } from "@/lib/utils";
import { StyleSheet, View } from "react-native";

const TitleText = (props: {
  title: string;
  subTitle: string;
  duration: string;
  location?: "rec" | "quick";
}) => {
  const { title, subTitle, duration, location = "quick" } = props;
  return (
    <View
      style={[location === "quick" ? styles.innerWrapper : styles.recWrapper]}
    >
      <CustomText
        style={[styles.title, location === "quick" && styles.quickTitleColor]}
      >
        {title}
      </CustomText>
      <View style={styles.subWrapper}>
        <CustomText
          style={[
            styles.subTitle,
            location === "quick"
              ? styles.quickSubTitleColor
              : styles.recSubTitleColor,
          ]}
        >
          {subTitle}
        </CustomText>
        <View
          style={[
            styles.dot,
            location === "quick" ? styles.quickDotBg : styles.recDotBg,
          ]}
        ></View>
        <CustomText
          style={[
            styles.subTitle,
            location === "quick"
              ? styles.quickSubTitleColor
              : styles.recSubTitleColor,
          ]}
        >
          {duration}
        </CustomText>
      </View>
    </View>
  );
};

export default TitleText;

const styles = StyleSheet.create({
  innerWrapper: {
    gap: 10,
  },
  recWrapper: {
    gap: 6,
  },
  quickSubTitleColor: {
    color: Colors.light.tintSec,
  },
  recSubTitleColor: {
    color: Colors.light.textSec,
  },
  subTitle: {
    fontSize: 11,
    lineHeight: getLineHeight(11),
    letterSpacing: getLetterSpacing(11),
  },
  subWrapper: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  quickTitleColor: {
    color: Colors.light.background,
  },
  title: {
    fontFamily: "helveticaBold",
    fontSize: 18,
    lineHeight: getLineHeight(18),
  },
  quickDotBg: {
    backgroundColor: Colors.light.tintSec,
  },
  recDotBg: {
    backgroundColor: Colors.light.textSec,
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 99,
  },
});
