import { ActivityIndicator, Dimensions, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-web-swiper';
import styled from 'styled-components/native';
import { BlurView } from 'expo-blur';
import { makeImgPath } from '../utilities';

const API_KEY = 'ccd99a5e501b0e6837f59f274e56b389';

const Container = styled.ScrollView`
  background-color: white;
`;

const View = styled.View`
  flex: 1;
`;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BgImg = styled.Image``;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

const Poster = styled.Image`
  width: 100px;
  height: 150px;
  border-radius: 5px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Column = styled.View`
  width: 40%;
  margin-left: 15px;
`;

const Overview = styled.Text`
  color: rgba(250, 250, 205, 0.7);
  margin-top: 10px;
`;

const Votes = styled(Overview)`
  font-size: 12px;
`;

const { height: SCREN_HEIGHT } = Dimensions.get('window');
const Movies: React.FC<NativeStackScreenProps<any, 'Movies'>> = () => {
  const [loading, setLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState([]);

  const getNowPlaying = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=us`
      )
    ).json();
    setNowPlaying(results);
    setLoading(false);
  };

  useEffect(() => {
    console.log(loading);
    getNowPlaying();
    console.log(loading);
  }, []);

  return loading ? (
    <Loader>
      <ActivityIndicator size='large' color='teal' />
    </Loader>
  ) : (
    <Container>
      <Swiper
        loop
        timeout={4}
        controlsEnabled={false}
        containerStyle={{ width: '100%', height: SCREN_HEIGHT / 3 }}
      >
        {nowPlaying.map((movie) => (
          <View key={movie.id}>
            <BgImg
              blurRadius={10}
              source={{ uri: makeImgPath(movie.backdrop_path) }}
              style={StyleSheet.absoluteFill}
            />
            <BlurView tint='dark' style={StyleSheet.absoluteFill}>
              <Wrapper>
                <Poster source={{ uri: makeImgPath(movie.poster_path) }} />
                <Column>
                  <Title>{movie.original_title}</Title>
                  <Overview>{movie.overview.slice(0, 80)}...</Overview>
                  {movie.vote_average > 0 ? (
                    <Votes>🌟{movie.vote_average}/10</Votes>
                  ) : null}
                </Column>
              </Wrapper>
            </BlurView>
          </View>
        ))}
      </Swiper>
    </Container>
  );
};

export default Movies;
