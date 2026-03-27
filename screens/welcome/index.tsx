import SafeAreaWrapper from "@/components/safe-area-wrapper";
import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";
import Hero from "./hero";
import MainContent from "./main-content";

const WelcomeScreen = () => {
  return (
    <SafeAreaWrapper style={styles.mainWrapper}>
      <Hero />
      <MainContent />
    </SafeAreaWrapper>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    backgroundColor: Colors.light.tint,
  },
});
