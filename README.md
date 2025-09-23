# 📱 RPi Mobile Quiz - TÜBİTAK

**Mobil Quiz Uygulaması** - Öğretmenler ve öğrenciler için tasarlanmış modern bir sınav ve quiz yönetim sistemi.

[![React Native](https://img.shields.io/badge/React%20Native-0.76.7-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-~52.0.37-black.svg)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue.svg)](https://www.typescriptlang.org/)
[![NativeWind](https://img.shields.io/badge/NativeWind-4.1.23-38bdf8.svg)](https://www.nativewind.dev/)

## 🎯 Proje Hakkında

RPi Mobile Quiz, TÜBİTAK projesi kapsamında geliştirilmiş, eğitim kurumları için tasarlanmış kapsamlı bir mobil quiz ve sınav yönetim sistemidir. Uygulama, öğretmenlerin kolayca sınavlar oluşturmasına ve öğrencilerin bu sınavlara katılmasına olanak tanır.

### ✨ Temel Özellikler

- 🎓 **Öğretmen Paneli**: Sınav oluşturma, soru ekleme, öğrenci yönetimi
- 📚 **Öğrenci Sistemi**: Sınavlara katılma, sonuçları görüntüleme
- 📱 **Cross-Platform**: iOS, Android ve Web desteği
- 🎨 **Modern UI/UX**: NativeWind ile responsive tasarım
- 🔐 **Güvenli Kimlik Doğrulama**: JWT tabanlı oturum yönetimi
- 📊 **Gerçek Zamanlı Sonuçlar**: Anlık sınav takibi
- 🎯 **QR Kod Desteği**: Hızlı sınav katılımı

## 🚀 Kurulum

### Ön Gereksinimler

- [Node.js](https://nodejs.org/) (v16 veya üzeri)
- [npm](https://www.npmjs.com/) veya [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (opsiyonel)
- iOS geliştirme için [Xcode](https://developer.apple.com/xcode/) (macOS)
- Android geliştirme için [Android Studio](https://developer.android.com/studio)

### 1. Projeyi İndirin

```bash
git clone https://github.com/umutkutukalan/RPiMobilQuiz-Tubitak.git
cd RPiMobilQuiz-Tubitak
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```

veya

```bash
yarn install
```

### 3. Geliştirme Sunucusunu Başlatın

```bash
npx expo start
```

### 4. Uygulamayı Çalıştırın

Çıktıda göreceğiniz seçenekler:

- **📱 Expo Go**: QR kod ile telefonunuzda test edin
- **🤖 Android Emulator**: Android Studio emülatörü
- **📱 iOS Simulator**: Xcode iOS simülatörü (sadece macOS)
- **🌐 Web**: Tarayıcıda çalıştırın

## 📂 Proje Yapısı

```
RPiMobilQuiz-Tubitak/
├── app/                      # Expo Router - Ana uygulama dosyaları
│   ├── (root)/              # Ana navigasyon yapısı
│   │   └── (tabs)/          # Tab navigasyon sayfaları
│   │       ├── index.tsx    # Ana sayfa
│   │       ├── quiz/        # Quiz modülü
│   │       ├── qr/          # QR kod modülü
│   │       └── user/        # Kullanıcı profil modülü
│   ├── sign-in.tsx          # Giriş sayfası
│   └── _layout.tsx          # Ana layout
├── components/              # Yeniden kullanılabilir bileşenler
├── hooks/                   # Custom React Hooks
│   ├── Session/            # Kimlik doğrulama hooks
│   └── User/               # Kullanıcı yönetimi hooks
├── services/               # API servis katmanı
├── context/                # React Context providers
├── config/                 # Konfigürasyon dosyaları
├── assets/                 # Resimler, ikonlar, fontlar
│   ├── fonts/             # Rubik font ailesi
│   ├── icons/             # SVG ikonlar
│   └── images/            # Uygulama resimleri
└── lib/                   # Yardımcı kütüphaneler
```

## 🛠 Kullanılan Teknolojiler

### Ana Framework
- **React Native** (0.76.7) - Cross-platform mobil uygulama geliştirme
- **Expo** (~52.0.37) - React Native geliştirme platformu
- **TypeScript** (5.3.3) - Tip güvenli JavaScript

### UI & Styling
- **NativeWind** (4.1.23) - Tailwind CSS for React Native
- **Tailwind CSS** (3.4.17) - Utility-first CSS framework
- **Expo Vector Icons** - İkon kütüphanesi
- **Lottie React Native** - Animasyonlar

### Navigasyon
- **Expo Router** (~4.0.17) - File-based routing
- **React Navigation** - Stack ve Tab navigasyon

### Veri Yönetimi
- **Axios** (1.8.2) - HTTP client
- **Expo Secure Store** - Güvenli veri saklama
- **React Context** - State management

### Diğer Özellikler
- **Expo Image Picker** - Resim seçme
- **Expo Haptics** - Dokunmatik geri bildirim
- **React Native WebView** - Web görünümü
- **React Native Gesture Handler** - Gelişmiş dokunma
- **React Native Reanimated** - Performanslı animasyonlar

## 📱 Platform Desteği

| Platform | Durum | Notlar |
|----------|-------|--------|
| 📱 iOS | ✅ Destekleniyor | iOS 13+ |
| 🤖 Android | ✅ Destekleniyor | Android 6+ |
| 🌐 Web | ✅ Destekleniyor | Modern tarayıcılar |
| 📱 iPad | ✅ Destekleniyor | Tablet optimizasyonu |

## 🔧 Geliştirme Komutları

```bash
# Geliştirme sunucusunu başlat
npm start

# Android'de çalıştır
npm run android

# iOS'te çalıştır (sadece macOS)
npm run ios

# Web'de çalıştır
npm run web

# Testleri çalıştır
npm test

# Kodu lintle
npm run lint

# Projeyi sıfırla
npm run reset-project
```

## 🏗 API Konfigürasyonu

Uygulama, backend API ile iletişim kurmak için `config/config.ts` dosyasını kullanır. API endpoint'lerini bu dosyadan yapılandırabilirsiniz:

```typescript
// config/config.ts
export const API_BASE_URL = 'https://your-api-domain.com';
```

## 👥 Kullanıcı Rolleri

### 🎓 Öğretmen
- Sınav oluşturma ve düzenleme
- Soru havuzu yönetimi
- Öğrenci sonuçlarını görüntüleme
- QR kod oluşturma
- Profil yönetimi

### 📚 Öğrenci
- Aktif sınavları görüntüleme
- Sınavlara katılma
- QR kod ile hızlı katılım
- Sonuçları görüntüleme
- Profil düzenleme

## 🎨 Tasarım Sistemi

Uygulama, tutarlı bir tasarım dili kullanır:

- **Renkler**: Modern ve accessible renk paleti
- **Tipografi**: Rubik font ailesi
- **Spacing**: Tailwind CSS spacing sistemi
- **Animasyonlar**: Lottie ve Reanimated
- **İkonlar**: Expo Vector Icons

## 🔒 Güvenlik

- JWT tabanlı kimlik doğrulama
- Secure Store ile şifreli veri saklama
- API iletişiminde HTTPS
- Input validasyonu ve sanitizasyon

## 🚀 Production Build

### Android APK
```bash
expo build:android
```

### iOS IPA
```bash
expo build:ios
```

### Web Deployment
```bash
npm run web
# dist/ klasörünü web sunucunuza yükleyin
```

## 📞 İletişim

**E-posta**: kutukalanumut@gmail.com  
**Proje**: TÜBİTAK Mobil Quiz Sistemi

## 📄 Lisans

Bu proje TÜBİTAK projesi kapsamında geliştirilmiştir.

---
