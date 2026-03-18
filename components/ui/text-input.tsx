import { Colors, Size } from "@/constants/theme";
import { FormFieldApi, getLetterSpacing, getLineHeight } from "@/lib/utils";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import CustomText from "../text";

interface InputFieldProps<TValue = string> extends TextInputProps {
  field: FormFieldApi<TValue>;
}

const InputField = <TValue = string,>(props: InputFieldProps<TValue>) => {
  const {
    field,
    multiline,
    maxLength,
    numberOfLines,
    textAlignVertical,
    placeholder,
    keyboardType,
    inputMode,
    autoCapitalize,
    secureTextEntry,
    textContentType,
    children,
  } = props;

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.inputWrapper}>
        <TextInput
          value={field.state.value as string}
          onChangeText={(text) => field.handleChange(text as TValue)}
          placeholder={placeholder}
          keyboardType={keyboardType}
          inputMode={inputMode}
          multiline={multiline}
          autoCapitalize={autoCapitalize}
          maxLength={maxLength}
          numberOfLines={numberOfLines}
          textAlignVertical={textAlignVertical}
          textContentType={textContentType}
          style={styles.inputStyle}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={Colors.light.textSec}
        />
        {children && <View style={styles.actionView}>{children}</View>}
      </View>
      {field.state.meta.errors.length > 0 && (
        <CustomText style={styles.error}>
          {field.state.meta.errors.map((e) => e?.message).join(", ")}
        </CustomText>
      )}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  mainWrapper: {
    gap: 8,
  },
  inputWrapper: {
    position: "relative",
  },
  inputStyle: {
    backgroundColor: Colors.light.backgroundSec,
    borderWidth: 0.15,
    borderColor: Colors.light.textSec,
    height: 63,
    borderRadius: 15,
    paddingHorizontal: Size.regular,
    fontSize: 16,
    lineHeight: getLineHeight(16),
    letterSpacing: getLetterSpacing(16),
    fontFamily: "helveticaLight",
  },
  actionView: {
    position: "absolute",
    top: 20,
    right: 21,
  },
  error: {
    color: "red",
  },
});
