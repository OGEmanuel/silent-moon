import CustomText from "@/components/text";
import { Colors, Size } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, Pressable, StyleSheet, View } from "react-native";

type PickerMode = "date" | "time";

const Timer = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [mode, setMode] = useState<PickerMode>("date");
  const [show, setShow] = useState<boolean>(false);

  const showMode = (currentMode: PickerMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode("time");
  };
  return (
    <View style={styles.wrapper}>
      {Platform.OS === "ios" && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"time"}
          display="spinner"
          is24Hour={false}
          locale="en-US"
          onChange={(event: DateTimePickerEvent, selectedDate?: Date) => {
            setShow(false);

            if (event.type === "set" && selectedDate) {
              setDate(selectedDate);
            }
          }}
        />
      )}
      {Platform.OS === "android" && (
        <>
          <Pressable
            onPress={showTimepicker}
            style={({ pressed }) => [
              styles.androidTimer,
              pressed && styles.pressed,
            ]}
          >
            <MaterialIcons name="timer" size={40} color={Colors.light.text} />
            <CustomText style={styles.androidTimeText}>
              {date.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })}
            </CustomText>
          </Pressable>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={(event: DateTimePickerEvent, selectedDate?: Date) => {
                setShow(false);

                if (event.type === "set" && selectedDate) {
                  setDate(selectedDate);
                }
              }}
            />
          )}
        </>
      )}
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 7.5,
    borderRadius: Size.regular,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: Colors.light.backgroundAlt,
    height: 212,
    justifyContent: "center",
    alignItems: "center",
  },
  androidTimeText: {
    fontFamily: "helveticaBold",
    fontSize: 40,
  },
  pressed: {
    opacity: 0.75,
  },
  androidTimer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
