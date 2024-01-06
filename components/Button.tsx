import React from "react";  

import { StyleSheet, Text, View, Dimensions } from "react-native";

const { height } = Dimensions.get("window")
const { width } = Dimensions.get("window")

const Button = () => {
    return (
        <View style = {styles.root}>
            <View style = {styles.main}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create((
    {
        root: {

        },

        main: {

        }
    }
))

export default Button;
