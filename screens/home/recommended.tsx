import Recommend1Icon from "@/components/jsx-icons/recommend-1";
import CustomText from "@/components/text";
import { Colors, Size } from "@/constants/theme";
import { getLineHeight } from "@/lib/utils";
import { FlatList, StyleSheet, View } from "react-native";
import TitleText from "./title-text";

type RecListType = {
  id: number;
  title: string;
  icon: React.ReactNode;
};

const REC_LIST = [
  { id: 1, title: "Focus", icon: <Recommend1Icon /> },
  { id: 2, title: "Happiness", icon: <Recommend1Icon /> },
  { id: 3, title: "Focus", icon: <Recommend1Icon /> },
  { id: 4, title: "Happiness", icon: <Recommend1Icon /> },
];

const Recommended = () => {
  const RenderRecList = (props: { RecList: RecListType }) => {
    const { RecList } = props;
    return (
      <View style={styles.mainContent}>
        <View style={styles.iconView}>
          <Recommend1Icon />
        </View>
        <TitleText
          title={RecList.title}
          subTitle="MEDITATION"
          duration="3-10 MIN"
          location="rec"
        />
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <CustomText style={styles.header}>Recommended for you</CustomText>
      <FlatList
        data={REC_LIST}
        horizontal={true}
        renderItem={(item) => <RenderRecList RecList={item.item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({
  wrapper: {
    gap: Size.regular,
  },
  header: {
    paddingHorizontal: Size.regular,
    fontSize: 24,
    lineHeight: getLineHeight(24),
    fontFamily: "helveticaMedium",
  },
  iconView: {
    width: 162,
    height: 113.5,
    borderRadius: 10,
    backgroundColor: Colors.light.recList1Bg,
  },
  mainContent: {
    paddingHorizontal: Size.regular,
    gap: 10.5,
  },
});
