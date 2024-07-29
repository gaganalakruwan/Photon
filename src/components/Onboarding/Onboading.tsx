
import React ,  {useState ,  useRef} from 'react';
import { View, Text, StyleSheet , FlatList ,  Animated } from 'react-native';
import style from '../InputText/style';  // Assuming you need this import
import slides from './slides';
import { Item } from '@syncfusion/ej2-react-navigations';


const Onboarding = () => {

  const [currentIndex ,  setCurrentIndex] = useState(0)
  const scrollX =  useRef(new Animated.Value(0)).current ;

  const viewableItemChanged =  useRef(({viewableItem})=> {
    setCurrentIndex (viewableItem[0].index);
  }).current


  const viewConfig =  useRef({viewAreaCoveragePercentThreshold:50}).current ;

  return (
    <View style={styles.container}>
       <View style={{flex:3}}></View>
      <FlatList 
          data = {slides} 
          renderItem={({item}) => <OnboardingItem item= {item}/> } 
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled 
          bounces={false}
          keyExtractor={(item) =>item.id}
          onScroll={Animated.event([{nativeEvent:{contentoffset:{x:scrollX} } } ] ,{
            useNativeDriver:false ,
          })}

          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
          />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Onboarding;
