import SafeAreaWrapper from "@/components/safe-area-wrapper";
import Button from "@/components/ui/button";
import { Size } from "@/constants/theme";
import { useRouter } from "expo-router";
import { Platform, StyleSheet, View } from "react-native";
import DayPicker from "./day-picker";
import TextContent from "./text-content";
import Timer from "./timer";

const RemindersScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaWrapper style={styles.wrapper}>
      <View style={styles.bigWrapper}>
        <View style={styles.innerWrapper}>
          <TextContent
            variant="hero"
            header="What time would you like to meditate?"
            subHeader="Any time you can choose but We recommend first thing in the morning."
          />
          <Timer />
          <TextContent
            header="Which day would you like to meditate?"
            subHeader="Everyday is best, but we recommend picking
at least five."
          />
        </View>
        <DayPicker />
      </View>
      <View style={styles.btnWrapper}>
        <Button label="SAVE" onPress={() => router.push("/home")} />
        <Button
          label="NO THANKS"
          style={styles.thanksBtn}
          variant="secondary"
          onPress={() => router.push("/home")}
        />
      </View>
    </SafeAreaWrapper>
  );
};

export default RemindersScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
  },
  innerWrapper: {
    gap: 16,
  },
  bigWrapper: {
    gap: 24,
  },
  btnWrapper: {
    paddingHorizontal: Size.regular,
    paddingBottom: Platform.OS === "android" ? Size.regular : null,
  },
  thanksBtn: {
    backgroundColor: "transparent",
  },
});
