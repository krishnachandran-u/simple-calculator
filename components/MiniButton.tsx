import React from "react";

import { StyleSheet, Text, View, Dimensions } from "react-native";

const { height } = Dimensions.get("window")
const { width } = Dimensions.get('window')

interface MiniButtonProps {
    text: string;
}

const MiniButton = ({text}: MiniButtonProps) => {
    return (
        <View style = {styles.root}>
            <View style = {styles.main}>
                <Text style = {styles.text}>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create((
    {
        root: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
        },

        main: {
            borderRadius: Math.min(width/6, height/8)/2,
            height: Math.min(width/6, height/8),
            width: Math.min(width/6, height/8),
            justifyContent: "center",
            alignItems: "center",
        },

        text: {
            fontFamily: 'Roboto-Light',
            fontSize: Math.min(width/12, height/16),
            color: "white",
        }
    }
))

export default MiniButton;