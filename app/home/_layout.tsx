import HomeIcon from "@/components/jsx-icons/home-icon";
import MeditateIcon from "@/components/jsx-icons/meditate-icon";
import MoonIcon from "@/components/jsx-icons/moon-icon";
import MusicIcon from "@/components/jsx-icons/music-icon";
import ProfileIcon from "@/components/jsx-icons/profile-icon";
import CustomText from "@/components/text";
import { Colors } from "@/constants/theme";
import { getLetterSpacing, getLineHeight } from "@/lib/utils";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

const SCREENS = [
  { id: 1, route: "index", name: "Home" },
  { id: 2, route: "sleep", name: "Sleep" },
  { id: 3, route: "meditate", name: "Meditate" },
  { id: 4, route: "music", name: "Music" },
  { id: 5, route: "profile", name: "Profile" },
];

const HomeLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: Colors.light.tabIconSelected,
        tabBarStyle: {
          height: 112,
          paddingTop: 28,
          boxShadow: "2px -5px 17px 0px #54575C1A",
          borderWidth: 0,
          borderColor: "transparent",
        },
      }}
    >
      {SCREENS.map((screen) => (
        <Tabs.Screen
          key={screen.id}
          name={screen.route}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabBarLabelView}>
                <View
                  style={[styles.iconView, focused && styles.activeIconViewBg]}
                >
                  {screen.name === "Home" ? (
                    <HomeIcon fill={focused ? "white" : "#A0A3B1"} />
                  ) : screen.name === "Sleep" ? (
                    <MoonIcon fill={focused ? "white" : "#A0A3B1"} />
                  ) : screen.name === "Meditate" ? (
                    <MeditateIcon fill={focused ? "white" : "#A0A3B1"} />
                  ) : screen.name === "Music" ? (
                    <MusicIcon fill={focused ? "white" : "#A0A3B1"} />
                  ) : (
                    screen.name === "Profile" && (
                      <ProfileIcon fill={focused ? "white" : "#A0A3B1"} />
                    )
                  )}
                </View>
                <CustomText
                  style={[
                    styles.tabBarLabelText,
                    focused && styles.activeTabBarLabelText,
                  ]}
                >
                  {screen.name}
                </CustomText>
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default HomeLayout;

const styles = StyleSheet.create({
  iconView: {
    width: 46,
    height: 46,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  activeIconViewBg: {
    backgroundColor: Colors.light.tabIconSelected,
  },
  tabBarLabelView: {
    gap: 5,
    alignItems: "center",
    width: 64,
  },
  activeTabBarLabelText: {
    color: Colors.light.tabIconSelected,
  },
  tabBarLabelText: {
    color: Colors.light.tabIconDefault,
    fontSize: 14,
    lineHeight: getLineHeight(14, 108),
    letterSpacing: getLetterSpacing(14, 0),
  },
});
