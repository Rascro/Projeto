import React, {useState} from 'react';
import { ScrollView, StyleSheet, View, Text, Animated} from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context';
import ImagenService from '../service/imagens';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function Home ({navigation}) {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const [refreshing, setRefreshing] = useState(false);
  const [imagen, setImagens] = useState([]);

  const fetchImagens = async () => {
    const data = await ImagenService.getAllImagens();
    setImagens(data);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchImagens();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    fetchImagens();
  }, []);

  return (
    <View>
    <Animated.View style={[styles.header,
      {
        height: scrollY.interpolate({
        inputRange:[ 40, 120, 140 ],
        outputRange: [ 140, 20, 0 ],
        extrapolate: 'clamp'
      }),
       opacity: scrollY.interpolate({
        inputRange:[1, 75, 170],
        outputRange:[1, 0.5, 0],
        extrapolate: 'clamp'
       })
      }
      ]}> 
      <Animated.Text style= {{ 
        width: scrollY.interpolate({ 
            inputRange:[0, 180], 
            outputRange: [240,160],
            extrapolate: 'clamp'
            }), fontSize: 30, marginTop: 50, marginLeft: 100,
            opacity: scrollY.interpolate({
                inputRange:[1, 75, 170],
                outputRange:[1, 1, 0],
                extrapolate: 'clamp'
               })
        }}
            
            
            > 
      Wonder Bakery
      </Animated.Text>
    </Animated.View>
    <ScrollView 
    scrollEventThrottle={16}
    style={styles.scrollView} onScroll={Animated.event([{
        nativeEvent: {
            contentOffset: { y: scrollY }
        },
    }],
    { useNativeDriver: false })}
    >
    {movies.map((imagen) => (
          <Card style={styles.card} key={imagen.id}>
            <Card.Content>
            </Card.Content>
            <Card.Cover
              style={styles.cover}
              source={{ uri: imagen.cover.url }}
            />
          </Card>
        ))}
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffff',
  },
  card: {
    backgroundColor: '#B59D68',
    margin:10,
  },
  header: {
    backgroundColor: '#FFD966',
  },

});