import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {ReduxState} from '../../type';
import style from './style';
import {colors} from '../../constants/colors';

type propTypes = {
  color?: String;
};

const Spinner = ({color}: propTypes) => {
  const {loading, spinnerMessage} = useSelector(
    (state: ReduxState) => state?.spinner,
  );

  if (loading) {
    return (
      <View style={style.container}>
        <View
          style={{
            backgroundColor: 'transparent',
            position: 'absolute',
            flex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.3,
          }}></View>
        <ActivityIndicator
          size={'large'}
          color={color ? color : colors.green}
        />
        <Text style={style.textContent}>{spinnerMessage}</Text>
        {/* </View> */}
      </View>
    );
  } else return <></>;
};

export default Spinner;
