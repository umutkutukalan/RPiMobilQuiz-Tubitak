import { signback } from "@/constants";
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
  ScrollView,
  Image,
} from "react-native";

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [userType, setUserType] = useState("öğrenci");
  const [isForgotPassword, setIsForgotPassword] = useState(false);

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
    <ScrollView className="flex-1 bg-white relative">
      {/* Üstte mavi tonlarında w-full, belirli yükseklikte alan ve ortasında daire */}
      <View className="w-full h-[300px] bg-blue-700 relative flex justify-center items-center">
        <Image
          source={signback}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </View>
      <View className="absolute left-1/2 top-[260px] w-44 h-44 rounded-full bg-blue-800 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
        <Text className="text-white text-6xl font-bold">RPQ</Text>
      </View>
      <View className="flex-1 justify-center px-5 mb-5">
        <ScrollView showsVerticalScrollIndicator={false} className="py-20">
          {isForgotPassword ? (
            <View className="flex-1 justify-center p-4">
              <Text className="text-2xl font-bold text-center mb-5 text-blue-700">
                Şifremi Unuttum
              </Text>
              <View className="mb-4">
                <Text className="text-lg font-medium text-blue-600">
                  E-posta
                </Text>
                <TextInput
                  className="border border-blue-300 p-3 rounded-xl bg-white"
                  placeholder="E-posta adresinizi girin"
                  keyboardType="email-address"
                  onChangeText={(text) => setResetPasswordData({ email: text })}
                />
              </View>
              <TouchableOpacity
                className="bg-blue-600 p-3 rounded-xl mt-2 shadow"
                onPress={handleResetPassword}
              >
                <Text className="text-white text-center text-lg font-bold">
                  Gönder
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsForgotPassword(false)}>
                <Text className="text-blue-500 text-center mt-4">Geri Dön</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text className="text-3xl font-bold text-center mb-5 text-blue-800">
                {isSignUp ? "Kayıt Ol" : "Giriş Yap"}
              </Text>
              {isSignUp && (
                <>
                  <View className="mb-4">
                    <Text className="text-lg font-medium text-blue-600">
                      Email
                    </Text>
                    <TextInput
                      className="border border-blue-300 p-3 rounded-xl bg-white"
                      placeholder="Email adresinizi girin"
                      keyboardType="email-address"
                      onChangeText={(text) =>
                        setUserData({ ...userData, email: text })
                      }
                    />
                  </View>
                  <View className="mb-4">
                    <Text className="text-lg font-medium text-blue-600">
                      Şifre
                    </Text>
                    <View className="flex-row border border-blue-300 p-3 rounded-xl bg-white">
                      <TextInput
                        className="flex-1"
                        secureTextEntry={!showPassword}
                        value={userData.password}
                        onChangeText={(text) =>
                          setUserData({ ...userData, password: text })
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
                    <Text className="text-lg font-medium text-blue-600">
                      İsim
                    </Text>
                    <TextInput
                      className="border border-blue-300 p-3 rounded-xl bg-white"
                      placeholder="İsminizi giriniz"
                      onChangeText={(text) =>
                        setUserData({ ...userData, name: text })
                      }
                    />
                  </View>
                  <View className="mb-4">
                    <Text className="text-lg font-medium text-blue-600">
                      Soyisim
                    </Text>
                    <TextInput
                      className="border border-blue-300 p-3 rounded-xl bg-white"
                      placeholder="Soyisminizi giriniz"
                      onChangeText={(text) =>
                        setUserData({ ...userData, surname: text })
                      }
                    />
                  </View>
                  <View className="mb-4">
                    <Text className="text-lg font-medium text-blue-600">
                      Telefon
                    </Text>
                    <TextInput
                      className="border border-blue-300 p-3 rounded-xl bg-white"
                      placeholder="Telefonunuzu giriniz"
                      keyboardType="phone-pad"
                      onChangeText={(text) =>
                        setUserData({ ...userData, phone: text })
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
                        setUserDataLogin({ ...userDataLogin, email: text })
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
                          setUserDataLogin({ ...userDataLogin, password: text })
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
                        onValueChange={(value) => setRememberMe(value)}
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
                  <Text className="text-lg font-medium text-blue-600">
                    Kayıt Türü:
                  </Text>
                  <View className="flex-row gap-2 mt-2">
                    <TouchableOpacity
                      className={`px-4 py-2 border rounded-lg ${
                        userType === "öğrenci"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-300"
                      }`}
                      onPress={() => setUserType("öğrenci")}
                    >
                      <Text
                        className={`text-base ${
                          userType === "öğrenci"
                            ? "text-white font-bold"
                            : "text-gray-700"
                        }`}
                      >
                        Öğrenci
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      className={`px-4 py-2 border rounded-lg ${
                        userType === "eğitmen"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-300"
                      }`}
                      onPress={() => setUserType("eğitmen")}
                    >
                      <Text
                        className={`text-base ${
                          userType === "eğitmen"
                            ? "text-white font-bold"
                            : "text-gray-700"
                        }`}
                      >
                        Eğitmen
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {userType === "eğitmen" && (
                    <TextInput
                      className="border border-blue-300 p-3 rounded-xl bg-white mt-2"
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
                className="bg-blue-600 p-3 rounded-xl mt-2 shadow"
                disabled={isLoading}
                onPress={isSignUp ? handleRegister : handleSubmit}
              >
                <Text className="text-white text-center text-2xl font-bold">
                  {isSignUp ? "Kayıt Ol" : "Giriş Yap"}
                </Text>
              </TouchableOpacity>
              <View className="mt-4">
                <Text className="text-black text-center">
                  {isSignUp ? "Zaten bir hesabın var mı? " : "Hesabın yok mu? "}
                  <Text
                    className="text-blue-500 font-bold"
                    onPress={() => setIsSignUp(!isSignUp)}
                  >
                    {isSignUp ? "Giriş Yap" : "Kayıt Ol"}
                  </Text>
                </Text>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
