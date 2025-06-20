import LottieView from "lottie-react-native";

const LoadingScreen = () => {
  return (
    <LottieView
      source={require("@/assets/lottie/loadingscreen.json")}
      autoPlay
      loop
    />
  );
};

export default LoadingScreen;
