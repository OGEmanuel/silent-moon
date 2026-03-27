import SafeAreaWrapper from "@/components/safe-area-wrapper";
import CustomText from "@/components/text";
import { StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <SafeAreaWrapper style={styles.mainWrapper}>
      <CustomText>PROFILE SCREEN</CustomText>
    </SafeAreaWrapper>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
