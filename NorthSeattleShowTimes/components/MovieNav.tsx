import { Text, View, ImageBackground, Image, type TextProps, StyleSheet } from 'react-native';
const saturdaynightBackdrop = require('../assets/images/backdrops/saturdaynight.jpg');
const saturdaynightPoster = require('../assets/images/posters/saturdaynight.jpg');
const venomBackdrop = require('../assets/images/backdrops/venom.jpg');
const venomPoster = require('../assets/images/posters/venom.jpg');
const terririer3Backdrop = require('../assets/images/backdrops/terrifier3.jpg');
const terririer3Posters = require('../assets/images/posters/terrifier3.jpg');

export default function MovieNav(props: any) {
    const { activePage } = props;
    return (
        <View style={styles.container}>
            <Image source={saturdaynightPoster} style={styles[activePage === 0 ? "activePoster": "poster"]} />
            <Image source={venomPoster} style={styles[activePage === 1 ? "activePoster": "poster"]} />
            <Image source={terririer3Posters} style={styles[activePage === 2 ? "activePoster": "poster"]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#000',
        gap: 10,
    },
    poster: {
        width: 50,
        height: 80,
        borderWidth: 2,
        borderColor: '#000',
        borderStyle: "solid",
    },
    activePoster: {
        width: 50,
        height: 80,
        borderWidth: 2,
        borderColor: '#fff',
        borderStyle: "solid",
    }
});
