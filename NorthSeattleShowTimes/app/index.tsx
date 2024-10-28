import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import PagerView from 'react-native-pager-view';
import { theaters, movies, showtimes } from "../data/data";
import MovieCard from "@/components/MovieCard";
import MovieNav from "@/components/MovieNav";

export default function Index() {
  const [activePage, setActivePage] = useState(0);
  const theater = theaters[0];
  const theaterShowtimes = showtimes.filter(showtime => showtime.theaterId === theater.id);
  const movieShowtimes = showtimes.map(showtime => {
    const movie: any = movies.find(movie => movie.id === showtime.movieId);
    if (movie){
        movie.showtimes = showtime.times;
        return movie;
    }
    else {
      return {
        title: 'Movie not found'
      }
    }
  });

  return (
    <>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={(e) => setActivePage(e.nativeEvent.position)}
      >
        {movieShowtimes.map((movie, index) => <MovieCard key={index} {...movie} />)}
      </PagerView>
      <MovieNav activePage={activePage} style={styles.navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 3,
  },
  navigation: {
    flex: 1,
  }
});