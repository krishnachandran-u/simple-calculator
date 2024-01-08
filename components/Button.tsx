import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Animated } from "react-native";

const { height, width } = Dimensions.get("window");

interface ButtonProps {
    text: string;
    color?: string;
    onPress?: () => void;
}

const Button = ({ text, color, onPress }: ButtonProps) => {
    const [pressAnimation] = useState(new Animated.Value(0));

    const handlePressIn = () => {
        Animated.parallel([
            Animated.timing(pressAnimation, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.spring(pressAnimation, {
                toValue: 1.2,
                friction: 3,
                tension: 40,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const handlePressOut = () => {
        Animated.parallel([
            Animated.timing(pressAnimation, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.spring(pressAnimation, {
                toValue: 1,
                friction: 3,
                tension: 40,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const animatedStyle = {
        transform: [
            {
                scale: pressAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1.2],
                }),
            },
            {
                rotate: pressAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                }),
            },
        ],
    };

    return (
        <View style={styles.root}>
            <TouchableOpacity
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                activeOpacity={0.8}
                onPress={onPress}
            >
                <Animated.View style={[styles.main, { backgroundColor: color ? color : "#f5eff4" }, animatedStyle]}>
                    <Text style={styles.text}>{text}</Text>
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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
        color: "#000000",
        fontFamily: 'Roboto-Light',
        fontSize: Math.min(width / 14, height / 17),
    }
});

export default Button;
