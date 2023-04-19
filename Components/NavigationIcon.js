import Icon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const NavigationIcon = ({stylesIcon = {}, screenToNavigate = "initialScreen", iconName, size}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screenToNavigate)}
    >
      <Icon style={stylesIcon} name={iconName} size={size}/>
    </TouchableOpacity>
  );
};
