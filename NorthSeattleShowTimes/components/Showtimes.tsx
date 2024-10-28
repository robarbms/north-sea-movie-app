import { Text, View, type TextProps, StyleSheet } from 'react-native';
import Showtime from './Showtime';


export default function Showtimes(props: any) {
    const { showtimes } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Showtimes</Text>
            <View style={styles.showtimes}>
                {showtimes && Array.isArray(showtimes) && showtimes.length > 0 && showtimes.map((showtime, index) => <Showtime key={index} showtime={showtime}/>)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    title: {
        fontSize: 20,
        color: "#fff",
        marginBottom: 5,
    },
    showtimes: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginBottom: 20,
    }
});
