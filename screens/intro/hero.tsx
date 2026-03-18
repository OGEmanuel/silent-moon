import LogoIcon from "@/components/jsx-icons/logo";
import CustomText from "@/components/text";
import { getFullWidth } from "@/lib/utils";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

const Hero = () => {
  return (
    <View style={styles.mainWrapper}>
      <ImageBackground
        source={require("../../assets/images/intro-bg.png")}
        style={styles.bgImage}
      />
      <View style={styles.logoWrapper}>
        <CustomText style={styles.logoText}>Silent</CustomText>
        <LogoIcon />
        <CustomText style={styles.logoText}>Moon</CustomText>
      </View>
      <View style={styles.imageView}>
        <Image
          source={require("../../assets/images/intro-image.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  mainWrapper: {
    alignItems: "center",
    gap: 80,
    position: "relative",
    paddingTop: 50,
  },
  bgImage: {
    position: "absolute",
    width: getFullWidth(),
    height: 504,
  },
  logoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logoText: {
    fontFamily: "helveticaBold",
  },
  imageView: {
    width: 332.22,
    height: 242.69,
  },
});
