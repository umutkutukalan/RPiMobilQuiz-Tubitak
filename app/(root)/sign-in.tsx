import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Switch, StyleSheet } from "react-native";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);  // Forgot password ekranını kontrol etmek için bir durum ekliyoruz.

  // Şifre sıfırlama işlemi (e-posta) için kullanılan state
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      {forgotPassword ? (
        <View>
          {/* Forgot Password Formu */}
          <Text style={styles.title}>Forgot Password</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter your email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={() => console.log("Password reset link sent")}>
            <Text style={styles.buttonText}>Send Reset Link</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setForgotPassword(false)}>
            <Text style={styles.toggleLink}>Back to Sign In</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          {/* Normal Sign In / Sign Up Formu */}
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
              <TouchableOpacity
                onPress={() => setForgotPassword(true)}  // Forgot password formuna geçiş yapıyoruz
              >
                <Text style={styles.forgotPassword}>Forgot password?</Text>
              </TouchableOpacity>
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
                onPress={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Sign in" : "Sign up"}
              </Text>
            </Text>
          </View>
        </View>
      )}
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


