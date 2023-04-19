import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";


export const NavigationButton = ({
  stylesBtn,
  screenToNavigate,
  text,
  styleText
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={stylesBtn}
      onPress={() => navigation.navigate(screenToNavigate)}
    >
      <Text style={styleText}>{text}</Text>
    </TouchableOpacity>
  );
};
