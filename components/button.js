function LaxzButton(props) {
  return (
    <TouchableOpacity style={{ }}>
      <Text style={{
        color: "blue",
        backgroundColor: "#fafafa",
        height: 50,
        width: 100,
        padding: 10,
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
      }}>{ props.name }</Text>
    </TouchableOpacity>
  )
}