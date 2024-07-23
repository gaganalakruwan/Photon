// MachineryList.tsx - All Machinery List

import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MDisplayBox from '../../components/MDisplayBox/MDisplayBox';
import styles from './style';

const MachineryList: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Machinery</Text>
        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="search" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="options" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <Text style={styles.tabActive}>Types</Text>
        <Text style={styles.tab}>New Products</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {machineryData.map((item, index) => (
          <MDisplayBox
            key={index}
            imageSource={item.imageSource}
            title={item.title}
            description={item.description}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MachineryList;
