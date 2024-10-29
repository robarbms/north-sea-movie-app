import React, {useState, useRef} from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import PagerView from 'react-native-pager-view';
import { theaters, movies, showtimes } from "../data/data";
import MovieCard from "@/components/MovieCard";
import MovieNav from "@/components/MovieNav";

export default function Index() {
  const [activePage, setActivePage] = useState(0);
  const pageref = useRef<PagerView>(null);
  const movieShowtimes = showtimes.map(showtime => {
    const movie: any = movies.find(movie => movie.id === showtime.movieId);
    if (movie){
        movie.showtimes = showtime.times;
        return movie;
    }
    else {
      return {
        title: 'Movie not found',
        backdrop: '',
      }
    }
  });

  return (
    <SafeAreaView style={styles.areaView}>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={(e) => setActivePage(e.nativeEvent.position)}
        ref={pageref}
      >
        {movieShowtimes.map((movie, index) => <MovieCard key={index} isActive={activePage === index} {...movie} />)}
      </PagerView>
      <MovieNav pageref={pageref} activePage={activePage} style={styles.navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#000",
  },
  pagerView: {
    flex: 8,
  },
  navigation: {
    flex: 1,
  }
});