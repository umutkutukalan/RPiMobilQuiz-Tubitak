import { useAuth } from "@/context/AuthProvider";
import { useLogin } from "@/hooks/Session/useLogin";
import { useRegister } from "@/hooks/Session/useRegister";
import { useResetPassword } from "@/hooks/Session/useResetPassword";
import { Redirect, router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from "react-native";

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [userType, setUserType] = useState("öğrenci");
  const [isForgotPassword, setIsForgotPassword] = useState(false); // Şifremi unuttum sayfası için state

  const { userData, setUserData, errorMessage, isLoading, handleRegister } =
    useRegister();
  const { userDataLogin, setUserDataLogin, handleSubmit } = useLogin();
  const { resetPasswordData, setResetPasswordData, handleResetPassword } =
    useResetPassword();

  const { isAuthenticated, isAuthLoading } = useAuth();

  if (!isAuthLoading && isAuthenticated) {
    return <Redirect href="/" />;
  }

  return (
    <View className="flex-1 justify-center p-4 bg-white">
      {isForgotPassword ? ( // Eğer şifremi unuttum sayfası açık ise
        <View className="flex-1 justify-center p-4 bg-white">
          <Text className="text-2xl font-bold text-center mb-5">
            Şifremi Unuttum
          </Text>

          <View className="mb-4">
            <Text className="text-lg font-medium">E-posta</Text>
            <TextInput
              className="border border-gray-300 p-2 rounded"
              placeholder="E-posta adresinizi girin"
              keyboardType="email-address"
              onChangeText={(text) =>
                setResetPasswordData({
                  email: text,
                })
              }
            />
          </View>

          <TouchableOpacity
            className="bg-blue-500 p-2 rounded"
            onPress={handleResetPassword}
          >
            <Text className="text-white text-center">Gönder</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsForgotPassword(false)}>
            <Text className="text-blue-500 text-center">Geri Dön</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text className="text-2xl font-bold text-center mb-5">
            {isSignUp ? "Kayıt Ol" : "Giriş Yap"}
          </Text>

          {isSignUp && (
            <>
              <View className="mb-4">
                <Text className="text-lg font-medium">Email</Text>
                <TextInput
                  className="border border-gray-300 p-2 rounded"
                  placeholder="Email adresinizi girin"
                  keyboardType="email-address"
                  onChangeText={(text) =>
                    setUserData({
                      ...userData,
                      email: text,
                    })
                  }
                />
              </View>

              <View className="mb-4">
                <Text className="text-lg font-medium">Şifre</Text>
                <View className="flex-row border border-gray-300 p-2 rounded">
                  <TextInput
                    className="flex-1"
                    secureTextEntry={!showPassword}
                    value={userData.password}
                    onChangeText={(text) =>
                      setUserData({
                        ...userData,
                        password: text,
                      })
                    }
                    placeholder="Şifrenizi girin"
                  />
                  <TouchableOpacity
                    className="p-1"
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Text className="text-blue-500">
                      {showPassword ? "Gizle" : "Göster"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="mb-4">
                <Text className="text-lg font-medium">İsim</Text>
                <TextInput
                  className="border border-gray-300 p-2 rounded"
                  placeholder="İsminizi giriniz"
                  onChangeText={(text) =>
                    setUserData({
                      ...userData,
                      name: text,
                    })
                  }
                />
              </View>

              <View className="mb-4">
                <Text className="text-lg font-medium">Soyisim</Text>
                <TextInput
                  className="border border-gray-300 p-2 rounded"
                  placeholder="Soyisminizi giriniz"
                  onChangeText={(text) =>
                    setUserData({
                      ...userData,
                      surname: text,
                    })
                  }
                />
              </View>

              <View className="mb-4">
                <Text className="text-lg font-medium">Telefon</Text>
                <TextInput
                  className="border border-gray-300 p-2 rounded"
                  placeholder="Telefonunuzu giriniz"
                  keyboardType="phone-pad"
                  onChangeText={(text) =>
                    setUserData({
                      ...userData,
                      phone: text,
                    })
                  }
                />
              </View>
            </>
          )}

          {!isSignUp && (
            <>
              <View className="mb-4">
                <Text className="text-lg font-medium">Email</Text>
                <TextInput
                  className="border border-gray-300 p-2 rounded"
                  placeholder="Email adresinizi girin"
                  keyboardType="email-address"
                  onChangeText={(text) =>
                    setUserDataLogin({
                      ...userDataLogin,
                      email: text,
                    })
                  }
                />
              </View>

              <View className="mb-4">
                <Text className="text-lg font-medium">Şifre</Text>
                <View className="flex-row items-center">
                  <TextInput
                    className="flex-1 border border-gray-300 p-2 rounded"
                    secureTextEntry={!showPassword}
                    value={userDataLogin.password}
                    onChangeText={(text) =>
                      setUserDataLogin({
                        ...userDataLogin,
                        password: text,
                      })
                    }
                    placeholder="Şifrenizi girin"
                  />
                  <TouchableOpacity
                    className="p-2"
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Text className="text-blue-500">
                      {showPassword ? "Gizle" : "Göster"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="flex-row items-center justify-between mb-5">
                <View className="flex-row items-center gap-2">
                  <Switch
                    value={rememberMe}
                    onValueChange={(value) => setRememberMe(value)} // Düzeltilmiş
                  />
                  <Text className="ml-2">Beni Hatırla</Text>
                </View>
                <TouchableOpacity onPress={() => setIsForgotPassword(true)}>
                  <Text className="text-blue-500">Şifremi Unuttum</Text>
                </TouchableOpacity>
              </View>
            </>
          )}

          {isSignUp && (
            <View className="mb-4">
              <Text className="text-lg font-medium">Kayıt Türü:</Text>
              <View className="flex-row">
                <TouchableOpacity
                  style={[
                    styles.radioButton,
                    userType === "öğrenci" && styles.radioButtonChecked,
                  ]}
                  onPress={() => setUserType("öğrenci")}
                >
                  <Text style={styles.radioLabel}>Öğrenci</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.radioButton,
                    userType === "eğitmen" && styles.radioButtonChecked,
                  ]}
                  onPress={() => setUserType("eğitmen")}
                >
                  <Text style={styles.radioLabel}>Eğitmen</Text>
                </TouchableOpacity>
              </View>

              {userType === "eğitmen" && (
                <TextInput
                  className="border border-gray-300 p-2 rounded mt-2"
                  placeholder="Eğitmen Davet Kodu"
                  value={userData.invite_code}
                  onChangeText={(text) =>
                    setUserData({ ...userData, invite_code: text })
                  }
                />
              )}
            </View>
          )}

          <TouchableOpacity
            className="bg-blue-600 p-2 rounded-xl mt-2"
            disabled={isLoading}
            onPress={isSignUp ? handleRegister : handleSubmit}
          >
            <Text className="text-white text-center text-2xl">
              {isSignUp ? "Kayıt Ol" : "Giriş Yap"}
            </Text>
          </TouchableOpacity>

          <View className="mt-4">
            <Text className="text-black">
              {isSignUp ? "Zaten bir hesabın var mı? " : "Hesabın yok mu? "}
              <Text
                className="text-blue-500"
                onPress={() => setIsSignUp(!isSignUp)}
              >
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
  
});
