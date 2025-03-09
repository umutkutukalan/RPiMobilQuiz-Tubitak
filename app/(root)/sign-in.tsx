import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, Switch, StyleSheet } from "react-native";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Sayfa yüklendiğinde ve state değiştiğinde mesaj göster
  useEffect(() => {
    console.log("📌 AuthForm yüklendi!");
  }, []);

  useEffect(() => {
    console.log("🔄 isSignUp değişti:", isSignUp);
  }, [isSignUp]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignUp ? "Sign Up" : "Sign In"}</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
          />
          <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.eyeIconText}>{showPassword ? "Hide" : "Show"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {isSignUp && (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={!showPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm your password"
          />
        </View>
      )}

      {!isSignUp && (
        <View style={styles.rememberMeContainer}>
          <Switch value={rememberMe} onValueChange={setRememberMe} />
          <Text style={styles.rememberMeLabel}>Remember me</Text>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={() => console.log(isSignUp ? "Sign Up Pressed" : "Sign In Pressed")}>
        <Text style={styles.buttonText}>{isSignUp ? "Sign Up" : "Sign In"}</Text>
      </TouchableOpacity>

      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <Text
            style={styles.toggleLink}
            onPress={() => {
              setIsSignUp(!isSignUp);
              console.log("🔁 Toggle butonuna basıldı, yeni isSignUp:", !isSignUp);
            }}
          >
            {isSignUp ? "Sign in" : "Sign up"}
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
  },
  input: {
    paddingVertical: 12,
    paddingLeft: 10,
    borderColor: "#d1d5db",
    borderWidth: 1,
    borderRadius: 8,
  },
  passwordContainer: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
  eyeIconText: {
    color: "#3b82f6",
    fontWeight: "500",
  },
  rememberMeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  rememberMeLabel: {
    color: "#4b5563",
    marginLeft: 8,
  },
  forgotPassword: {
    color: "#3b82f6",
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#0f1117",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
  },
  toggleContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  toggleText: {
    color: "#4b5563",
  },
  toggleLink: {
    color: "#3b82f6",
    fontWeight: "600",
  },
});
