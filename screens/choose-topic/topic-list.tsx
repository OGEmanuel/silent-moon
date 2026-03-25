import Choice1Icon from "@/components/jsx-icons/choice-1-icon";
import Choice2Icon from "@/components/jsx-icons/choice-2-icon";
import Choice3Icon from "@/components/jsx-icons/choice-3-icon";
import Choice4Icon from "@/components/jsx-icons/choice-4-icon";
import Choice5Icon from "@/components/jsx-icons/choice-5-icon";
import Choice6Icon from "@/components/jsx-icons/choice-6-icon";
import Choice8Icon from "@/components/jsx-icons/choice-8-icon";
import CustomText from "@/components/text";
import { Colors, Size } from "@/constants/theme";
import { getLineHeight } from "@/lib/utils";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

type ChoiceListType = {
  id: number;
  title: string;
  wrapperStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  icon: React.ReactNode;
};

const TopicList = () => {
  const ChoiceList = [
    {
      id: 1,
      title: "Reduce Stress",
      wrapperStyle: styles.firstChoice,
      textStyle: styles.firstChoiceText,
      icon: <Choice1Icon />,
    },
    {
      id: 2,
      title: "Improve Performance",
      wrapperStyle: styles.secondChoice,
      textStyle: styles.secondChoiceText,
      icon: <Choice2Icon />,
    },
    {
      id: 3,
      title: "Increase Happiness",
      wrapperStyle: styles.thirdChoice,
      textStyle: styles.thirdChoiceText,
      icon: <Choice3Icon />,
    },
    {
      id: 4,
      title: "Reduce Anxiety",
      wrapperStyle: styles.fourthChoice,
      textStyle: styles.thirdChoiceText,
      icon: <Choice4Icon />,
    },
    {
      id: 5,
      title: "Personal Growth",
      wrapperStyle: styles.fifthChoice,
      textStyle: styles.firstChoiceText,
      icon: <Choice5Icon />,
    },
    {
      id: 6,
      title: "Better Sleep",
      wrapperStyle: styles.sixthChoice,
      textStyle: styles.sixthChoiceText,
      icon: <Choice6Icon />,
    },
    {
      id: 7,
      title: "Reduce Stress",
      wrapperStyle: styles.firstChoice,
      textStyle: styles.firstChoiceText,
      icon: <Choice1Icon />,
    },
    {
      id: 8,
      title: "Reduce Stress",
      wrapperStyle: styles.eighthChoice,
      textStyle: styles.firstChoiceText,
      icon: <Choice8Icon />,
    },
  ];

  const RenderChoiceList = (props: { listItem: ChoiceListType }) => {
    const { listItem } = props;
    return (
      <Pressable style={[styles.choiceWrapper, listItem.wrapperStyle]}>
        {listItem.icon}
        <CustomText style={[styles.choiceText, listItem.textStyle]}>
          {listItem.title}
        </CustomText>
      </Pressable>
    );
  };

  return (
    <ScrollView style={styles.scrollViewWrapper}>
      <View style={styles.contentWrapper}>
        <View style={styles.innerViewWrapper}>
          {ChoiceList.filter((item) => item.id % 2 !== 0).map((item) => (
            <RenderChoiceList key={item.id} listItem={item} />
          ))}
        </View>
        <View style={styles.innerViewWrapper}>
          {ChoiceList.filter((item) => item.id % 2 === 0).map((item) => (
            <RenderChoiceList key={item.id} listItem={item} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default TopicList;

const styles = StyleSheet.create({
  choiceWrapper: {
    borderRadius: 10,
    paddingBottom: 17,
    overflow: "hidden",
    alignItems: "center",
  },
  choiceText: {
    fontSize: 16,
    fontFamily: "helveticaBold",
    lineHeight: getLineHeight(16),
    paddingLeft: 16,
    width: 140,
    alignSelf: "flex-start",
  },
  firstChoiceText: {
    color: Colors.light.textAlt,
  },
  secondChoiceText: {
    color: Colors.light.textAltSec,
  },
  thirdChoiceText: {
    color: Colors.light.text,
  },
  sixthChoiceText: {
    color: Colors.light.tintSec,
  },
  firstChoice: {
    backgroundColor: Colors.light.tint,
    gap: 40,
  },
  secondChoice: {
    backgroundColor: Colors.light.secondChoiceBg,
    gap: 16,
    paddingTop: 9,
  },
  thirdChoice: {
    backgroundColor: Colors.light.thirdChoiceBg,
    gap: 16,
  },
  fourthChoice: {
    backgroundColor: Colors.light.fourthChoiceBg,
    gap: 34,
    paddingTop: 15,
  },
  fifthChoice: {
    backgroundColor: Colors.light.fifthChoiceBg,
    gap: 24,
    paddingTop: 9,
  },
  sixthChoice: {
    backgroundColor: Colors.light.text,
    gap: 32,
    paddingTop: 10,
  },
  eighthChoice: {
    backgroundColor: Colors.light.eighthChoiceBg,
    gap: 45,
    paddingTop: 17,
  },
  scrollViewWrapper: {
    gap: 24,
    flexDirection: "column",
    paddingHorizontal: Size.regular,
    flex: 1,
    flexGrow: 1,
  },
  contentWrapper: {
    flexDirection: "row",
    gap: 24,
    paddingBottom: Platform.OS === "android" ? Size.regular : null,
  },
  innerViewWrapper: {
    flex: 1,
    gap: Size.regular,
  },
});
