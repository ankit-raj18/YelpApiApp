import React from 'react';
import { View, Text , StyleSheet , FlatList , TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

import ResultsDetails from './ResultsDetails';


function ResultsList({title , results , navigation}) {
    return (
       <View style={styles.container}>
           <Text style={styles.titleSheet}>{title}</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator= {false}
            data = {results}
            keyExtractor = {(result) => result.id}
            renderItem = {({item})=>{
                    return (
                    <TouchableOpacity onPress={()=> navigation.navigate('ResultsShow' , {id : item.id} )}>
                        <ResultsDetails result = {item}/>
                    </TouchableOpacity>
                    )}}   />

       </View>
    );
};
const styles = StyleSheet.create({
    titleSheet: {
            fontSize : 20,
            fontWeight : 'bold',
            marginLeft : 10,
            marginBottom : 5,
    },
    container : {
        marginBottom : 10,
    }
    
})

export default withNavigation (ResultsList);