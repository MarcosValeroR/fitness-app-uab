import React from "react";
import { Text, View, TextInput } from "react-native";

function Input({
  containerStyle,
  textStyle,
  labelText,
  inputStyle,
  initialValue,
  handleChange,
  secure = false,
  keyboardType = "default",
  editable = true,
}) {
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{labelText}</Text>
      <TextInput
        secureTextEntry={secure}
        keyboardType={keyboardType}
        style={inputStyle}
        value={initialValue}
        onChangeText={handleChange}
        editable={editable}
      />
    </View>
  );
}

export default Input;
