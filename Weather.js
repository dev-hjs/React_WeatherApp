import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { Iconicons } from "@expo/vector-icons";

export default class Weather extends Component {
    render(){
        return <LinearGradient colors={["#00c6fb", "#005bea"]} style={styles.container}>
            <View style={styles.upper}>
       
              <Text style={styles.temp}>35도</Text>
            </View>
            <View style={styles.lower}>
              <Text style={styles.title}>비가 내리고 있습니다.</Text>
              <Text style={styles.subtitle}>더 많은 정보를 위해서 알아보기</Text>
            </View>
          </LinearGradient>;
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    upper: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"      
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
})
