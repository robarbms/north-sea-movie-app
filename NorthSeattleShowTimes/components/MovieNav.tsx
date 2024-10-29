import { View, Image, TouchableHighlight, StyleSheet } from 'react-native';
const saturdaynightPoster = require('../assets/images/posters/saturdaynight.jpg');
const venomPoster = require('../assets/images/posters/venom.jpg');
const terririer3Posters = require('../assets/images/posters/terrifier3.jpg');
const conclavePosters = require('../assets/images/posters/conclave.jpg');
const smile2Posters = require('../assets/images/posters/smile2.jpg');
const weliveintimePosters = require('../assets/images/posters/weliveintime.jpg');
const thesubstancePosters = require('../assets/images/posters/thesubstance.jpg');
const beetlejuicebeetlejuicePosters = require('../assets/images/posters/beetlejuicebeetlejuice.jpg');

export default function MovieNav(props: any) {
    const { activePage, pageref } = props;
    const clickHandler = (page: number) => () => pageref.current.setPage(page);
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={clickHandler(0)}>
                <Image source={saturdaynightPoster} style={styles[activePage === 0 ? "activePoster": "poster"]} />
            </TouchableHighlight>
            <TouchableHighlight onPress={clickHandler(1)}>
                <Image source={venomPoster} style={styles[activePage === 1 ? "activePoster": "poster"]} />
            </TouchableHighlight>
            <TouchableHighlight onPress={clickHandler(2)}>
                <Image source={terririer3Posters} style={styles[activePage === 2 ? "activePoster": "poster"]} />
            </TouchableHighlight>
            <TouchableHighlight onPress={clickHandler(3)}>
                <Image source={conclavePosters} style={styles[activePage === 3 ? "activePoster": "poster"]} />
            </TouchableHighlight>
            <TouchableHighlight onPress={clickHandler(4)}>
                <Image source={smile2Posters} style={styles[activePage === 4 ? "activePoster": "poster"]} />
            </TouchableHighlight>
            <TouchableHighlight onPress={clickHandler(5)}>
                <Image source={weliveintimePosters} style={styles[activePage === 5 ? "activePoster": "poster"]} />
            </TouchableHighlight>
            <TouchableHighlight onPress={clickHandler(6)}>
                <Image source={thesubstancePosters} style={styles[activePage === 6 ? "activePoster": "poster"]} />
            </TouchableHighlight>
            <TouchableHighlight onPress={clickHandler(7)}>
                <Image source={beetlejuicebeetlejuicePosters} style={styles[activePage === 7 ? "activePoster": "poster"]} />
            </TouchableHighlight>
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
        width: 30,
        height: 40,
        borderRadius: 2,
    },
    activePoster: {
        width: 60,
        height: 80,
        borderRadius: 2,
    }
});
