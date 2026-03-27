import CustomText from "@/components/text";
import { Colors, Size } from "@/constants/theme";
import { getLineHeight } from "@/lib/utils";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

const DAYS = [
  {
    id: 1,
    label: "SU",
    value: "Sunday",
  },
  {
    id: 2,
    label: "M",
    value: "Monday",
  },
  {
    id: 3,
    label: "T",
    value: "Tuesday",
  },
  {
    id: 4,
    label: "W",
    value: "Wednesday",
  },
  {
    id: 5,
    label: "TH",
    value: "Thursday",
  },
  {
    id: 6,
    label: "F",
    value: "Friday",
  },
  {
    id: 7,
    label: "S",
    value: "Saturday",
  },
];

const DayPicker = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const onSelect = (id: number) => {
    if (selected.includes(id)) {
      const updated = selected.filter((item) => item !== id);
      setSelected(updated);
    } else {
      setSelected((prev) => [...prev, id]);
    }
  };

  return (
    <View style={styles.wrapper}>
      {DAYS.map((day) => (
        <Pressable
          key={day.id}
          style={[
            styles.selector,
            selected.includes(day.id) ? styles.selected : styles.unSelected,
          ]}
          onPress={() => onSelect(day.id)}
        >
          <CustomText
            style={[
              styles.selectorText,
              selected.includes(day.id)
                ? styles.selectedText
                : styles.unSelectedText,
            ]}
          >
            {day.label}
          </CustomText>
        </Pressable>
      ))}
    </View>
  );
};

export default DayPicker;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Size.regular,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  selector: {
    width: 40.75,
    height: 40.75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 99,
  },
  selectorText: {
    fontSize: 14,
    lineHeight: getLineHeight(14, 165),
  },
  selectedText: {
    color: Colors.light.textAltForeGround,
  },
  selected: {
    backgroundColor: Colors.light.text,
  },
  unSelectedText: {
    color: Colors.light.textSec,
  },
  unSelected: {
    borderWidth: 1,
    borderColor: Colors.light.textSec,
  },
});
