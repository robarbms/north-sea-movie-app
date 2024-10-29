import { Text, View, StyleSheet } from 'react-native';
import Showtime from './Showtime';


const minutesToString = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
}

export default function Showtimes(props: any) {
    const { showtimes } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Showtimes</Text>
            <View><Text style={styles.runtime}>Runtime: {minutesToString(props.duration)}</Text></View>
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
    },
    showtimes: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginBottom: 10,
    },
    runtime: {
        color: "rgba(255, 255, 255, 0.5)",
        paddingBottom: 10,
    },
});
