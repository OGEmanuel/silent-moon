import SafeAreaWrapper from "@/components/safe-area-wrapper";
import CustomText from "@/components/text";
import { StyleSheet } from "react-native";

const MusicScreen = () => {
  return (
    <SafeAreaWrapper style={styles.mainWrapper}>
      <CustomText>Music SCREEN</CustomText>
    </SafeAreaWrapper>
  );
};

export default MusicScreen;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
