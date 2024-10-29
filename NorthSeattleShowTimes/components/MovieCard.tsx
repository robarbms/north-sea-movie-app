import { Text, View, ImageBackground, Image, type TextProps, StyleSheet } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle, withSpring }  from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import Rating from './Rating';
import Showtimes from './Showtimes';
const saturdaynightBackdrop = require('../assets/images/backdrops/saturdaynight.jpg');
const saturdaynightPoster = require('../assets/images/posters/saturdaynight.jpg');
const venomBackdrop = require('../assets/images/backdrops/venom.jpg');
const venomPoster = require('../assets/images/posters/venom.jpg');
const terririer3Backdrop = require('../assets/images/backdrops/terrifier3.jpg');
const terririer3Posters = require('../assets/images/posters/terrifier3.jpg');
const conclaveBackdrop = require('../assets/images/backdrops/conclave.jpg');
const conclavePosters = require('../assets/images/posters/conclave.jpg');
const smile2Backdrop = require('../assets/images/backdrops/smile2.jpg');
const smile2Posters = require('../assets/images/posters/smile2.jpg');
const weliveintimeBackdrop = require('../assets/images/backdrops/weliveintime.jpg');
const weliveintimePosters = require('../assets/images/posters/weliveintime.jpg');
const thesubstanceBackdrop = require('../assets/images/backdrops/thesubstance.jpg');
const thesubstancePosters = require('../assets/images/posters/thesubstance.jpg');
const beetlejuicebeetlejuiceBackdrop = require('../assets/images/backdrops/beetlejuicebeetlejuice.jpg');
const beetlejuicebeetlejuicePosters = require('../assets/images/posters/beetlejuicebeetlejuice.jpg');

export default function MovieCard(props: any) {
    const opacity = useSharedValue(0);
    const height = useSharedValue(0)
    const posterPos = useSharedValue(50);
    const {isActive} = props;
    const fadeIn = useAnimatedStyle(() => ({
        opacity: withTiming((isActive ? 1 : 0), {duration: 300}),
    }));
    const slideIn = useAnimatedStyle(() => ({
        opacity: withTiming((isActive ? 1 : 0), {duration: 500}),
        transform: [{
            translateX: withSpring(isActive ? 0 : posterPos.value, {duration: 300}),
        }],
    }));
    const scaleIn = useAnimatedStyle(() => ({
        height: withTiming((isActive ? 400 : 350), {duration: 500}),
    }));
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
        },
        {
            poster: conclavePosters,
            backdrop: conclaveBackdrop,
        },
        {
            poster: smile2Posters,
            backdrop: smile2Backdrop,
        },
        {
            poster: weliveintimePosters,
            backdrop: weliveintimeBackdrop,
        },
        {
            poster: thesubstancePosters,
            backdrop: thesubstanceBackdrop,
        },
        {
            poster: beetlejuicebeetlejuicePosters,
            backdrop: beetlejuicebeetlejuiceBackdrop,
        },
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
                    <Animated.View style={slideIn}>
                        <Image source={images[props.id - 1].poster} style={styles.poster} />
                    </Animated.View>
                    <View style={styles.banner}>
                        <Rating rating={props.rating} />
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.info}>{props.mpaaRating} - {props.genre}</Text>
                    </View>
                </LinearGradient>
            </View>
            <Animated.View style={[{
                height: 0,
                overflow: 'hidden',
            }, scaleIn]}>
                <Showtimes showtimes={props.showtimes} duration={props.duration} />
                <View style={styles.synopsisContainer}>
                    <Text style={styles.synopsisTitle}>Synopsis</Text>
                    <Text style={styles.synopsis}>{props.synopsis}</Text>
                </View>
            </Animated.View>
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
    },
    gradient:{
        ...StyleSheet.absoluteFillObject, // Makes the gradient cover the entire ImageBackground
        height: "100%",
        paddingHorizontal: "5%",
        flexDirection: 'column',
        paddingTop: 200,
    },
    banner: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        color: "#fff",
    },
    info: {
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.5)",
    },
    synopsis: {
        color: "rgba(255, 255, 255, 0.5)",
    },
    synopsisContainer: {
        maxHeight: 200,
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    synopsisTitle: {
        fontSize: 20,
        color: "#fff",
        marginBottom: 5,
    },
    poster: {
        width: 150,
        height: 200,
        marginRight: 20,
        marginBottom: 40,
        marginTop: -150,
        borderRadius: 2,
    },
});