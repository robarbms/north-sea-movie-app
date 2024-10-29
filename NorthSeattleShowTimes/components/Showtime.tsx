import { Text, View, StyleSheet } from 'react-native';

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
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        color: "black",
        borderRadius: 2,
    },
    text: {
        fontSize: 10,
        fontWeight: "bold",
    }
});