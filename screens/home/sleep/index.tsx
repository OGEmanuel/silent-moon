import SafeAreaWrapper from "@/components/safe-area-wrapper";
import CustomText from "@/components/text";
import { StyleSheet } from "react-native";

const SleepScreen = () => {
  return (
    <SafeAreaWrapper style={styles.mainWrapper}>
      <CustomText>HOME SCREEN</CustomText>
    </SafeAreaWrapper>
  );
};

export default SleepScreen;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
