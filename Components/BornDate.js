import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
import {useState} from "react";
import DateTimePicker from "@react-native-community/datetimepicker";


function BornDate({
    containerStyle,
    textStyle,
    inputStyle,
    initialValue,
    btnStyle,
    textBtnStyle,
    handleChangeDate
}) {

    const [open, setOpen] = useState(false)
  return (
    <View style={containerStyle}>
    <Text style={textStyle}>Data de naixement</Text>
    <TextInput
      style={inputStyle}
      value={initialValue.toLocaleDateString("es-ES")}
      editable={false}
      placeholder="Fes click aqui per afegir la teva data de naixement"
    />
    <TouchableOpacity style={btnStyle} onPress={() => setOpen(true)}>
      <Text style={textBtnStyle}>Cambiar data</Text>
    </TouchableOpacity>
    {open && (
      <DateTimePicker
        value={initialValue}
        mode="date"
        display="default"
        onChange={(event,value) => {
            setOpen(false)
            handleChangeDate(event,value)
        }}
        dateFormat="dd/MM/yyyy"
      />
    )}
  </View>
  )
}

export default BornDate