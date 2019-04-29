export default function platformStyles(appStyle) {
  return {
    knob: {
      width: 70,
      height: 9,
      marginTop: 10,
      borderRadius: 3,
      backgroundColor: appStyle.agendaKnobColor
    },
    weekdays: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      flexDirection: "row",
      justifyContent: "space-around",
      marginLeft: 15,
      marginRight: 15,
      paddingTop: 15,
      paddingBottom: 7,
      backgroundColor: appStyle.calendarBackground
    }
  };
}
