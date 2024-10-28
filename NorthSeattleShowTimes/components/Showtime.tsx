import { Text, View, type TextProps, StyleSheet } from 'react-native';

export default function Showtime(props: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.showtime}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 4,
        backgroundColor: '#f0f0f0',
        color: "black",
    },
    text: {
        fontSize: 10,
        fontWeight: "bold",
    }
});