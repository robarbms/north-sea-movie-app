import { Text, View, ImageBackground, Image, type TextProps, StyleSheet } from 'react-native';


export default function Rating(props: any) {
    return (
        <View style={styles.container}>
            <View style={styles.imdb}>
                <Text style={styles.imdbText}>IMDB</Text>
            </View>
            <View>
                <Text style={styles.text}>{props.rating / 10} / 10</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 12,
        color: "#fff",
        marginTop: 3,
    },
    imdb: {
        backgroundColor: '#f5c518',
        color: "#000",
        padding: 3,
        borderRadius: 4,
        marginRight: 10,
        fontSize: 12,
    },
    imdbText: {
        fontSize: 12,
        fontWeight: "bold",
    }
});