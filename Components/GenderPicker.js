import { Text, View, StyleSheet,Dimensions } from "react-native";
import { Picker } from "@react-native-picker/picker";

const windowWidth = Dimensions.get("window").width;

function GenderPicker({gender,handleGenderPicker,inputStyle={},textStyle={},inputPickerStyle}) {
  const genderOptions = [
    { label: "Sense especificar", value: "no_specify" },
    { label: "Masculí", value: "masculi" },
    { label: "Femení", value: "femeni" },
    { label: "No binari", value: "no_binari" },
  ];
  return (
    <View style={inputStyle}>
      <Text style={textStyle}>Gènere</Text>
      <Picker
        style={inputPickerStyle}
        selectedValue={gender}
        height={100}
        onValueChange={(value) => handleGenderPicker(value)}
      >
        {genderOptions.map((option, index) => (
          <Picker.Item key={index} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  );
}


export default GenderPicker;
