
import React, {useState, createRef} from 'react';
import {View, Text, FlatList, StyleSheet, useWindowDimensions, Image, TouchableOpacity} from 'react-native';
import WelcomeMessage from '../../components/WelcomeMessage/WelcomeMessage'
import Button from '../../components/Button/Button'
import styles from './Welcome.style'

// Data will be used to compose our slides
const data = [
  {
    color: '#44b5a1',
    source: require('../../assets/message.json'),
    pagenumber:1,
    description:'Meet new programmers'
  },
  {
    color: '#fa458c',
    source: require('../../assets/scrollmessages.json'),
    pagenumber:2,
    description:'Create your own room'
  },
  {
    color: '#2ecc71',
    
    source: require('../../assets/message4.json'),
    pagenumber:3,
    description:'Chat with other programmers'
  },
];

const Welcome = ({navigation}) => {
  const windowWidth = useWindowDimensions().width;
  const slider = createRef(null);
  const [sliderState, setSliderState] = useState({
    item: 0,
    offset: 0,
  });

  const slideChanged = e => {
    const item = Math.round(e.nativeEvent.contentOffset.x / windowWidth);

    setSliderState({
      item: item,
      offset: item * windowWidth,
    });
  };

 
  const renderer = ({item}) => (
    <View style={{width: windowWidth}}>
      <View style={{...styles.slide, backgroundColor: item.color}}>
          {item.pagenumber===1?<Text style={styles.welcometext} >Welcome CodeTalks</Text>:null}
        <WelcomeMessage mysource={item.source} />
        <Text style={styles.description} >{item.description}</Text>
        {item.pagenumber===3?<Button theme='third' buttontext='Login' onPress={()=> navigation.navigate('LoginPage')}  />:null}
      </View>
    </View>
  );

 
  const button = direction => (
    <TouchableOpacity
      onPress={() =>
        slider.current.scrollToOffset({
          offset: direction === 'BACK' ? sliderState.offset - windowWidth : sliderState.offset + windowWidth,
          animated: true,
        })
      }>
      <Text style={styles.buttons}>{direction}</Text>
    </TouchableOpacity>
  );

 
  const dots = () => (
    <View style={styles.dotGroup}>
      {data.map((_, index) => (
        <View key={index} style={[styles.dot, sliderState.item === index ? styles.dotActive : null]} />
      ))}
    </View>
  );

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderer}
        ref={slider}
        keyExtractor={(_, index) => index} 
        horizontal={true} 
        pagingEnabled={true} 
        showsHorizontalScrollIndicator={false} 
        onScroll={slideChanged} 
        getItemLayout={(_, index) => ({
          length: windowWidth,
          offset: windowWidth * index,
          index,
        })} 
      />
      <View style={styles.controls}>
        {button('BACK')}
        {dots()}
        {button('NEXT')}
      </View>
    </>
  );
};



export default Welcome;
