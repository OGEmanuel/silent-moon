import BasicsIcon from "@/components/jsx-icons/basics-icon";
import RelaxationIcon from "@/components/jsx-icons/relaxation-icon";
import CustomText from "@/components/text";
import Button from "@/components/ui/button";
import { Colors, Size } from "@/constants/theme";
import { getLetterSpacing, getLineHeight } from "@/lib/utils";
import { StyleSheet, View } from "react-native";

const CARDS = [
  { id: 1, title: "Basics", category: "COURSE", icon: <BasicsIcon /> },
  { id: 2, title: "Relaxation", category: "MUSIC", icon: <RelaxationIcon /> },
];

const QuickActions = () => {
  return (
    <View style={styles.cardsWrapper}>
      {CARDS.map((card) => (
        <View
          key={card.id}
          style={[
            styles.verticalCourseView,
            card.category.toLowerCase() === "course"
              ? styles.courseCard
              : styles.musicCard,
          ]}
        >
          <View>
            <View
              style={[
                card.category.toLowerCase() === "course"
                  ? styles.courseIconView
                  : styles.musicIconView,
              ]}
            >
              {card.icon}
            </View>
            <View
              style={[
                styles.textwrapper,
                card.category.toLowerCase() === "music" &&
                  styles.musicTextWrapper,
              ]}
            >
              <CustomText
                style={[
                  styles.courseTitle,
                  card.category.toLowerCase() === "course" &&
                    styles.courseCourseTitle,
                ]}
              >
                {card.title}
              </CustomText>
              <CustomText
                style={[
                  styles.subTexts,
                  card.category.toLowerCase() === "course"
                    ? styles.courseCategory
                    : styles.musicCategory,
                ]}
              >
                {card.category}
              </CustomText>
            </View>
          </View>
          <View style={styles.footer}>
            <CustomText
              style={[
                styles.subTexts,
                card.category.toLowerCase() === "course"
                  ? styles.duration
                  : styles.musicCategory,
              ]}
            >
              3-10 MIN
            </CustomText>
            <Button
              label="START"
              style={[
                styles.btn,
                card.category.toLowerCase() === "music" && styles.musicBtn,
              ]}
              textStyle={[
                styles.btnText,
                card.category.toLowerCase() === "music" && styles.musicBtnText,
              ]}
              variant="secondary"
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default QuickActions;

const styles = StyleSheet.create({
  cardsWrapper: {
    flexDirection: "row",
    gap: Size.regular,
  },
  courseCard: {
    backgroundColor: Colors.light.tint,
  },
  musicCard: {
    backgroundColor: Colors.light.musicCardBg,
  },
  verticalCourseView: {
    position: "relative",
    borderRadius: 10,
    paddingBottom: 15,
    overflow: "hidden",
    gap: 36,
    flex: 1,
  },
  musicIconView: {
    position: "absolute",
  },
  courseIconView: {
    alignSelf: "flex-end",
  },
  courseCourseTitle: {
    color: Colors.light.textAlt,
  },
  courseTitle: {
    fontSize: 18,
    lineHeight: getLineHeight(18),
    fontFamily: "helveticaBold",
  },
  musicTextWrapper: {
    paddingTop: 90,
  },
  textwrapper: {
    paddingHorizontal: 15,
    gap: 9.55,
  },
  courseCategory: {
    color: Colors.light.category,
  },
  musicCategory: {
    color: Colors.light.musicText,
  },
  subTexts: {
    fontSize: 11,
    lineHeight: getLineHeight(11),
    letterSpacing: getLetterSpacing(11),
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  duration: {
    color: Colors.light.tintSec,
  },
  musicBtn: {
    backgroundColor: Colors.light.text,
  },
  btn: {
    height: 35,
    width: 70,
  },
  btnText: {
    fontSize: 12,
    lineHeight: getLineHeight(12),
    letterSpacing: getLetterSpacing(12),
  },
  musicBtnText: {
    color: Colors.light.textAltForeGround,
  },
});
