import { Colors } from "@/constants/theme";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

const CustomText = (props: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) => {
  const { children, style } = props;

  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "helveticaRegular",
    fontSize: 16,
    color: Colors.light.text,
  },
});
