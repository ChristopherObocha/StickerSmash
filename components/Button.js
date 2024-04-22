import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({label, theme, onPress}) {

  const styles = StyleSheet.create({
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    additionalPrimaryStyles: {
      borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18,
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: theme === 'primary' ? '#fff' : 'transparent',
    },
    buttonLabel: {
      color: theme === 'primary' ? '#25292e' : '#fff',
      fontSize: 16,
    },
    buttonIcon: {
      paddingRight: 8,
    }
  });


  if(theme === "primary") {
    return (
      <View style={[styles.buttonContainer, styles.additionalPrimaryStyles]}>
        <Pressable style={styles.button} onPress={onPress}>
          <FontAwesome 
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
};