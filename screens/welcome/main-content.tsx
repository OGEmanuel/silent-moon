import Button from "@/components/ui/button";
import { Size } from "@/constants/theme";
import { getFullWidth } from "@/lib/utils";
import { useRouter } from "expo-router";
import { Image, Platform, StyleSheet, View } from "react-native";

const MainContent = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../assets/images/welcome.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
        <View style={styles.btnWrapper}>
          <Button
            label="GET STARTED"
            variant="secondary"
            onPress={() => router.push("/choose-topic")}
          />
        </View>
      </View>
    </View>
  );
};

export default MainContent;

const styles = StyleSheet.create({
  imageWrapper: {
    width: getFullWidth(),
    height: "auto",
    marginTop: Platform.OS === "ios" ? -120 : -200,
    position: "relative",
  },
  btnWrapper: {
    position: "absolute",
    top: Platform.OS === "ios" ? 525 : 625,
    alignItems: "stretch",
    zIndex: 50,
    width: getFullWidth(),
    paddingHorizontal: Size.regular,
    flexDirection: "column",
  },
});
