import SafeAreaWrapper from "@/components/safe-area-wrapper";
import CustomText from "@/components/text";
import { StyleSheet } from "react-native";

const GetStartedScreen = () => {
  return (
    <SafeAreaWrapper style={styles.mainWrapper}>
      <CustomText>GET STARTED</CustomText>
    </SafeAreaWrapper>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
