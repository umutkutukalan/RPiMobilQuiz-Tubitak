import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet } from "react-native";

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [userType, setUserType] = useState("öğrenci");
  const [inviteCode, setInviteCode] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false); // Şifremi unuttum sayfası için state

  return (
    <View style={styles.container}>
      {isForgotPassword ? ( // Eğer şifremi unuttum sayfası açık ise
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.title}>Şifremi Unuttum</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>E-posta</Text>
            <TextInput
              style={styles.input}  // Genişliği %100 yapan stil
              placeholder="E-posta adresinizi girin"
              keyboardType="email-address"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={() => console.log("E-posta gönderildi")}>
            <Text style={styles.buttonText}>Gönder</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsForgotPassword(false)}>
            <Text style={styles.toggleText}>Geri Dön</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.title}>{isSignUp ? "Kayıt Ol" : "Giriş Yap"}</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Email adresinizi girin" keyboardType="email-address" />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Şifre</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                placeholder="Şifrenizi girin"
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
                <Text style={styles.eyeIconText}>{showPassword ? "Gizle" : "Göster"}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {isSignUp && (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Şifreyi Onayla</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={!showPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Şifrenizi tekrar girin"
              />
            </View>
          )}

          {!isSignUp && (
            <View style={styles.rememberMeContainer}>
              <Switch
                value={rememberMe}
                onValueChange={(value) => setRememberMe(value)} // Düzeltilmiş
              />
              <Text style={styles.rememberMeLabel}>Beni Hatırla</Text>
              <TouchableOpacity onPress={() => setIsForgotPassword(true)}>
                <Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
              </TouchableOpacity>
            </View>
          )}

          {isSignUp && (
            <View style={styles.registrationContainer}>
              <Text style={styles.label}>Kayıt Türü:</Text>
              <View style={styles.radioGroup}>
                <TouchableOpacity
                  style={[styles.radioButton, userType === "öğrenci" && styles.radioButtonChecked]}
                  onPress={() => setUserType("öğrenci")}
                >
                  <Text style={styles.radioLabel}>Öğrenci</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.radioButton, userType === "eğitmen" && styles.radioButtonChecked]}
                  onPress={() => setUserType("eğitmen")}
                >
                  <Text style={styles.radioLabel}>Eğitmen</Text>
                </TouchableOpacity>
              </View>

              {userType === "eğitmen" && (
                <TextInput
                  style={styles.input}
                  placeholder="Eğitmen Davet Kodu"
                  value={inviteCode}
                  onChangeText={setInviteCode}
                />
              )}
            </View>
          )}

          <TouchableOpacity style={styles.button} onPress={() => console.log(isSignUp ? "Kayıt Olundu" : "Giriş Yapıldı")}>
            <Text style={styles.buttonText}>{isSignUp ? "Kayıt Ol" : "Giriş Yap"}</Text>
          </TouchableOpacity>

          <View style={styles.toggleContainer}>
            <Text style={styles.toggleText}>
              {isSignUp ? "Zaten bir hesabın var mı? " : "Hesabın yok mu? "}
              <Text style={styles.toggleLink} onPress={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? "Giriş Yap" : "Kayıt Ol"}
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
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 16,
    width: "100%", // Input container'ın genişliği %100
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
  },
  input: {
    width: "100%", // Giriş kutularının genişliği %100 olacak
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
  registrationContainer: {
    marginBottom: 16,
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  radioButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  radioButtonChecked: {
    backgroundColor: "#1E90FF",
  },
  radioLabel: {
    fontSize: 16,
    color: "#333",
  },
  button: {
    width: "100%", // Butonun genişliği %100 olacak
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
  forgotPasswordContainer: {
    alignItems: "center",
    width: "100%", // Bu container'ın genişliğini %100 yapıyoruz
  },
  forgotPasswordText: {
    marginTop: 16,
    color: "#3b82f6",
    fontWeight: "500",
  },
});

