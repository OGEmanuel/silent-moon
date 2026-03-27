import SafeAreaWrapper from "@/components/safe-area-wrapper";
import { Size } from "@/constants/theme";
import { ScrollView, StyleSheet, View } from "react-native";
import DailyThought from "./daily-thought";
import HomeHero from "./hero";
import QuickActions from "./quick-actions";
import Recommended from "./recommended";

const HomeScreen = () => {
  return (
    <SafeAreaWrapper style={styles.mainWrapper}>
      <ScrollView
        style={styles.scrollView}
        contentInsetAdjustmentBehavior="never"
      >
        <View style={styles.mainContentView}>
          <View style={styles.topSection}>
            <HomeHero />
            <View style={styles.innerWrapper}>
              <QuickActions />
              <DailyThought />
            </View>
          </View>
          <Recommended />
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  innerWrapper: {
    paddingHorizontal: Size.regular,
    gap: Size.regular,
  },
  mainContentView: {
    flex: 1,
    paddingTop: 24,
    gap: 40,
  },
  topSection: {
    gap: 30,
  },
});
