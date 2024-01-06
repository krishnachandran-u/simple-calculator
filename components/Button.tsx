import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Animated } from "react-native";

const { height, width } = Dimensions.get("window");

interface ButtonProps {
    text: string;
    color?: string;
}

const Button = ({ text, color }: ButtonProps) => {
    const [scaleAnimation] = useState(new Animated.Value(1));

    const handlePressIn = () => {
        Animated.spring(scaleAnimation, {
            toValue: 0.8,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnimation, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.root}>
            <TouchableOpacity
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                activeOpacity={0.8}
            >
                <Animated.View style={[styles.main, { backgroundColor: color ? color : "#720d5d", transform: [{ scale: scaleAnimation }] }]}>
                    <Text style={styles.text}>{text}</Text>
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        root: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
        },

        main: {
            borderRadius: Math.min(width / 7, height / 9) / 2,
            height: Math.min(width / 6, height / 8),
            width: Math.min(width / 6, height / 8),
            justifyContent: "center",
            alignItems: "center",
        },

        text: {
            color: "white",
            fontFamily: 'Roboto-Light',
            fontSize: Math.min(width / 14, height / 17),
        }
    }
);

export default Button;
