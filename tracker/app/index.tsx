import { Link } from "expo-router";
import { Text, View } from "react-native";

const Index = () => {
  return (
    <View
      style={{
        backgroundColor: 'grey',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ color: 'white', fontSize: 20 }}>
        Welcome to home page of application
      </Text>
      <Link href="/about">Go to About page</Link>
      <Link href="/profile">Go to Profile page</Link>
    </View>
  );
};

export default Index;