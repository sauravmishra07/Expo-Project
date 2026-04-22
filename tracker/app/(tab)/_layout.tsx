import { Tabs } from 'expo-router';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { View } from 'react-native';

const TabRoot = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => {
            return (
                <View style={{
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'green',
                    borderRadius: 100,
                    marginBottom: 20,
                }}>
                    <FontAwesome name="info" size={20} color={'white'} />
                </View>
            )
          },
        }}
      />

      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cog" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabRoot;