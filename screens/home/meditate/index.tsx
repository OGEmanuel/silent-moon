import SafeAreaWrapper from "@/components/safe-area-wrapper";
import CustomText from "@/components/text";
import { StyleSheet } from "react-native";

const MeditateScreen = () => {
  return (
    <SafeAreaWrapper style={styles.mainWrapper}>
      <CustomText>MEDITATE SCREEN</CustomText>
    </SafeAreaWrapper>
  );
};

export default MeditateScreen;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
