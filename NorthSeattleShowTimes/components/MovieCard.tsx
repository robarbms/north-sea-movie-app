import { Text, View, ImageBackground, Image, type TextProps, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Rating from './Rating';
import Showtimes from './Showtimes';
const saturdaynightBackdrop = require('../assets/images/backdrops/saturdaynight.jpg');
const saturdaynightPoster = require('../assets/images/posters/saturdaynight.jpg');
const venomBackdrop = require('../assets/images/backdrops/venom.jpg');
const venomPoster = require('../assets/images/posters/venom.jpg');
const terririer3Backdrop = require('../assets/images/backdrops/terrifier3.jpg');
const terririer3Posters = require('../assets/images/posters/terrifier3.jpg');


export default function MovieCard(props: any) {
    const images = [
        {
            poster: saturdaynightPoster,
            backdrop: saturdaynightBackdrop,
        },
        {
            poster: venomPoster,
            backdrop: venomBackdrop,
        },
        {
            poster: terririer3Posters,
            backdrop: terririer3Backdrop,
        }
    ];

    return (
        <View style={styles.page} collapsable={false}>
            <View style={styles.topContainer}>
                <ImageBackground source={images[props.id - 1].backdrop} style={styles.image}>
                </ImageBackground>
                <LinearGradient
                colors={['rgba(0,0,0,0)', '#000']}
                style={styles.gradient}
                >
                    <Rating rating={props.rating} />
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.info}>{props.mpaaRating} - {props.genre}</Text>
                </LinearGradient>
            </View>
            <View style={styles.bottomContainer}>
                <Showtimes showtimes={props.showtimes} />
                <View style={styles.synopsisContainer}>
                    <Text style={styles.synopsisTitle}>Synopsis</Text>
                    <Text style={styles.synopsis}>{props.synopsis}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#000",
        height: "100%",
    },
    topContainer: {
        flex: 2,
    },
    bottomContainer: {
        flex: 2,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        height: "100%",
    },
    gradient:{
        ...StyleSheet.absoluteFillObject, // Makes the gradient cover the entire ImageBackground
        justifyContent: 'flex-end',
        height: "100%",
        padding: "5%",
    },
    title: {
        fontSize: 30,
        color: "#fff",
    },
    info: {
        fontSize: 14,
        color: "#fff",
    },
    synopsis: {
        color:"#fff",
    },
    synopsisContainer: {
        maxHeight: 200,
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    synopsisTitle: {
        fontSize: 20,
        color: "#fff",
    }
});