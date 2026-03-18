import CheckIcon from "@/components/jsx-icons/check-icon";
import SafeAreaWrapper from "@/components/safe-area-wrapper";
import CustomText from "@/components/text";
import Button from "@/components/ui/button";
import InputField from "@/components/ui/text-input";
import { Colors, Size, Typography } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { revalidateLogic, useForm } from "@tanstack/react-form";
import { Checkbox } from "expo-checkbox";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import z from "zod";
import AuthHeader from "./auth-header";

const formSchema = z.object({
  username: z.string().min(2, {
    error: "Username must be at least 2 characters",
  }),
  email: z.email("Invalid email"),
  password: z.string().min(8, {
    error: "Password must be at least 8 characters",
  }),
  acceptPolicy: z.boolean().refine((val) => val === true, {
    error: "You must accept the policy",
  }),
});

const SignupScreen = () => {
  const [showPassword, setShowPassword] = useState(true);
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      acceptPolicy: false,
    },
    validationLogic: revalidateLogic(),
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      form.reset();
      console.log(value);
      router.push("/get-started");
    },
  });

  return (
    <SafeAreaWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Size.regular}
        style={styles.keyboardContainerStyle}
      >
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.mainContent}>
            <AuthHeader location="signup" />
            <View style={styles.formWrapper}>
              <View style={styles.inputFieldWrapper}>
                <form.Field name="username">
                  {(field) => (
                    <InputField
                      placeholder="Username"
                      field={field}
                      autoCapitalize={"words"}
                    >
                      {field.state.value.trim() !== "" &&
                        field.state.meta.isValid && <CheckIcon />}
                    </InputField>
                  )}
                </form.Field>
                <form.Field name="email">
                  {(field) => (
                    <InputField
                      placeholder="Email"
                      inputMode="email"
                      keyboardType="email-address"
                      textContentType="emailAddress"
                      autoCapitalize="none"
                      field={field}
                    >
                      {field.state.value.trim() !== "" &&
                        field.state.meta.isValid && <CheckIcon />}
                    </InputField>
                  )}
                </form.Field>
                <form.Field name="password">
                  {(field) => (
                    <InputField
                      placeholder="Password"
                      textContentType="password"
                      secureTextEntry={showPassword}
                      autoCapitalize="none"
                      field={field}
                    >
                      <Pressable onPress={() => setShowPassword(!showPassword)}>
                        {showPassword ? (
                          <Ionicons
                            name="eye"
                            size={24}
                            color={Colors.light.text}
                          />
                        ) : (
                          <Ionicons
                            name="eye-off"
                            size={24}
                            color={Colors.light.text}
                          />
                        )}
                      </Pressable>
                    </InputField>
                  )}
                </form.Field>
                <form.Field name="acceptPolicy">
                  {(field) => (
                    <View>
                      <View style={styles.checkboxWrapper}>
                        <CustomText style={styles.checkboxLabel}>
                          I have read the{" "}
                          <CustomText
                            style={[styles.checkboxLabel, styles.labelSpan]}
                          >
                            Privace Policy
                          </CustomText>
                        </CustomText>
                        <Checkbox
                          style={styles.checkbox}
                          value={field.state.value}
                          onValueChange={field.handleChange}
                          color={
                            field.state.value ? Colors.light.tint : undefined
                          }
                        />
                      </View>
                      {field.state.meta.errors.length > 0 && (
                        <CustomText style={styles.error}>
                          {field.state.meta.errors
                            .map((e) => e?.message)
                            .join(", ")}
                        </CustomText>
                      )}
                    </View>
                  )}
                </form.Field>
              </View>
              <Button label="GET STARTED" onPress={form._handleSubmit} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaWrapper>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  keyboardContainerStyle: {
    flex: 1,
  },
  scrollViewContent: {
    gap: Size.regular,
    flexGrow: 1,
  },
  mainContent: {
    gap: 40,
  },
  formWrapper: {
    paddingHorizontal: Size.regular,
    gap: 30,
  },
  inputFieldWrapper: {
    gap: Size.regular,
  },
  checkboxWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkboxLabel: {
    fontSize: Typography.fontSize,
    letterSpacing: Typography.letterSpacing,
    lineHeight: Typography.lineHeight,
    color: Colors.light.textSec,
  },
  labelSpan: {
    color: Colors.light.tint,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
  },
  error: {
    color: "red",
  },
});
