import React , {useState , useEffect} from 'react';
import { View , Text , FlatList , Image , StyleSheet } from 'react-native';
import yelp from '../api/yelp';

function ResultsShowScreen({navigation}) {
    const [result , setResult] = useState(null);
    const id = navigation.getParam('id');
 
    console.log(result);
     const getResult = async (id) => {
          const response =  await yelp.get(`/${id}`)
          setResult (response.data);
   };

   useEffect (()=> {
        getResult(id);

   }, []);

   if(!result){
       return null;
   };

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList 
            data ={result.photos}
            keyExtractor = {(photo) => photo}
            renderItem = {(item)=> {
            return <Image style= {styles.imageStyle} source = {{ uri : item }}/>
            }}    
            />
        </View>
    );
};
const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height : 130,
    }
    
})

export default ResultsShowScreen;