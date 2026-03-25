import SafeAreaWrapper from "@/components/safe-area-wrapper";
import { getFullWidth } from "@/lib/utils";
import { Image, StyleSheet, View } from "react-native";
import Hero from "./hero";
import TopicList from "./topic-list";

const ChooseTopicScreen = () => {
  return (
    <SafeAreaWrapper style={styles.mainWrapper}>
      <Hero />
      <View style={styles.bgImage}>
        <Image
          source={require("../../assets/images/topic-bg.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <TopicList />
    </SafeAreaWrapper>
  );
};

export default ChooseTopicScreen;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    position: "relative",
    gap: 30,
  },
  bgImage: {
    width: getFullWidth(),
    height: "100%",
    position: "absolute",
    top: 170,
    zIndex: -10,
  },
});
