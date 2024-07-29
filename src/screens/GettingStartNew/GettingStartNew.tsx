/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useRef} from 'react';
import {View, StatusBar, FlatList, Animated} from 'react-native';
import style from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Header from './Header/Header';
import {consumerSlides} from './data';
import Pagination from './Pagination/Pagination';
import Slide from './Slide/Slide';
import {useDeviceOrientation} from '@react-native-community/hooks';
import { CustomNavigationType, SlideType } from '../../../types';
import { colors } from '../../constants/colors';

type buttonStateType = {
  prev: boolean;
  next: boolean;
  skip: boolean;
};

const GettingStartNew: React.FunctionComponent = () => {
  const navigation = useNavigation<CustomNavigationType>();
  const orientation = useDeviceOrientation();
  const initButtonState: buttonStateType = {
    prev: false,
    next: false,
    skip: false,
  };
  const [buttonState, setButtonState] = useState(initButtonState);
  const [index, setIndex] = useState(1);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (flatListRef) {
          flatListRef?.current?.scrollToIndex({index: 0});
        }
      };
    }, []),
  );

  useEffect(() => {
    setTimeout(() => {
      const slides = consumerSlides;
      if (flatListRef && index >= 1 && index < slides.length) {
        flatListRef?.current?.scrollToIndex({index: index - 1});
      } else if (flatListRef && index >= 1 && index >= slides.length) {
        flatListRef?.current?.scrollToIndex({index: slides.length - 1});
      }
    }, 200);
  }, [orientation]);



  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {useNativeDriver: false},
    )(event);
  };

  const handlePrevPress = () => {
    if (flatListRef && index > 1) {
      flatListRef?.current?.scrollToIndex({index: index - 2});
    }
  };

  const handleNextPress = () => {
    const slides =  consumerSlides;
    if (flatListRef && index < slides.length) {
      flatListRef?.current?.scrollToIndex({index: index});
    } else if (flatListRef && index >= slides.length) {
      navigation.navigate('MAIN_HOME' as never);
    }
  };

  const handleOnViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: any}) => {
      if (viewableItems && !isNaN(viewableItems[0]?.index)) {
        setIndex(viewableItems[0].index + 1);
        if (viewableItems[0].index === 0) {
          handleButtonState('prev', true);
        } else if (viewableItems[0].index > 0) {
          handleButtonState('prev', false);
        }
      }
    },
  ).current;

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const handleButtonState = (
    name: 'prev' | 'next' | 'skip',
    state: boolean,
  ) => {
    let _buttonState = buttonState;
    _buttonState[name] = state;
    setButtonState({..._buttonState});
  };

  return (
    <SafeAreaView style={[{flex:1}, style.safeAreaView]}>
      <StatusBar
        backgroundColor={colors.iconBlack}
        barStyle="light-content"
      />
      <View style={style.container}>
       
        <FlatList
          ref={flatListRef}
          data={consumerSlides}
          renderItem={({item}: {item: SlideType}) => {
            return <Slide slide={item} />;
          }}
          style={style.slideContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment="center"
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
        <Pagination
          data={consumerSlides}
          scrollX={scrollX}
          onNextPress={handleNextPress}
          onPrevPress={handlePrevPress}
          prevButtonDisabled={buttonState.prev}
          nextButtonDisabled={buttonState.next}
        />
      </View>
    </SafeAreaView>
  );
};

export default GettingStartNew;
