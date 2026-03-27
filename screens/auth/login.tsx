import AuthFooter from "@/components/auth-footer";
import SafeAreaWrapper from "@/components/safe-area-wrapper";
import CustomText from "@/components/text";
import Button from "@/components/ui/button";
import InputField from "@/components/ui/text-input";
import { Colors, Size, Typography } from "@/constants/theme";
import { getLineHeight } from "@/lib/utils";
import Ionicons from "@expo/vector-icons/Ionicons";
import { revalidateLogic, useForm } from "@tanstack/react-form";
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
import { z } from "zod";
import AuthHeader from "./auth-header";

const formSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(8, {
    error: "Password must be at least 8 characters",
  }),
});

const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validationLogic: revalidateLogic(),
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      form.reset();
      console.log(value);
      router.push("/home");
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
            <AuthHeader />
            <View style={styles.formWrapper}>
              <View style={styles.inputFieldWrapper}>
                <form.Field name="email">
                  {(field) => (
                    <InputField
                      placeholder="Email"
                      inputMode="email"
                      keyboardType="email-address"
                      textContentType="emailAddress"
                      field={field}
                    />
                  )}
                </form.Field>
                <form.Field name="password">
                  {(field) => (
                    <InputField
                      placeholder="Password"
                      textContentType="password"
                      secureTextEntry={hidePassword}
                      autoCapitalize="none"
                      field={field}
                    >
                      <Pressable onPress={() => setHidePassword(!hidePassword)}>
                        {hidePassword ? (
                          <Ionicons
                            name="eye"
                            size={Size.md}
                            color={Colors.light.text}
                          />
                        ) : (
                          <Ionicons
                            name="eye-off"
                            size={Size.md}
                            color={Colors.light.text}
                          />
                        )}
                      </Pressable>
                    </InputField>
                  )}
                </form.Field>
              </View>
              <View style={styles.formCtaWrapper}>
                <Button label="LOG IN" onPress={form._handleSubmit} />
                <CustomText style={styles.ctaText}>Forgot Password?</CustomText>
              </View>
            </View>
          </View>
          <AuthFooter location="login" />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  keyboardContainerStyle: {
    flex: 1,
  },
  scrollViewContent: {
    justifyContent: "space-between",
    paddingBottom: Platform.OS === "android" ? 10 : null,
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
  formCtaWrapper: {
    gap: Size.regular,
  },
  ctaText: {
    textAlign: "center",
    fontSize: Typography.fontSize,
    lineHeight: getLineHeight(Typography.fontSize, 120),
    letterSpacing: Typography.letterSpacing,
  },
  inputFieldWrapper: {
    gap: Size.regular,
  },
});
