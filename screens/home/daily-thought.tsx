import PlayIcon from "@/components/jsx-icons/play";
import Thought1Icon from "@/components/jsx-icons/thought-1";
import Thought2Icon from "@/components/jsx-icons/thought-2";
import Thought3Icon from "@/components/jsx-icons/thought-3";
import { Colors } from "@/constants/theme";
import { Pressable, StyleSheet, View } from "react-native";
import TitleText from "./title-text";

const DailyThought = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.decor1}>
        <Thought1Icon />
      </View>
      <View style={styles.decor2}>
        <Thought2Icon />
      </View>
      <View style={styles.decor3}>
        <Thought3Icon />
      </View>
      <TitleText
        title="Daily Thought"
        subTitle="MEDITATION"
        duration="3-10 MIN"
      />
      <Pressable style={styles.playIconView}>
        <PlayIcon />
      </Pressable>
    </View>
  );
};

export default DailyThought;

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: Colors.light.dailyThought,
    borderRadius: 10,
    paddingVertical: 27,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconView: {
    position: "absolute",
    zIndex: 50,
  },
  playIconView: {
    width: 40,
    height: 40,
    borderRadius: 99,
    backgroundColor: Colors.light.background,
    alignItems: "center",
    justifyContent: "center",
  },
  decor1: {
    position: "absolute",
  },
  decor2: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  decor3: {
    position: "absolute",
    right: 128,
    bottom: 0,
  },
});
