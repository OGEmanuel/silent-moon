import SafeAreaWrapper from "@/components/safe-area-wrapper";
import { StyleSheet } from "react-native";
import Hero from "./hero";
import MainContent from "./main-content";

const IntroScreen = () => {
  return (
    <SafeAreaWrapper style={styles.mainWrapper}>
      <Hero />
      <MainContent />
    </SafeAreaWrapper>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  mainWrapper: {
    gap: 100,
  },
});
