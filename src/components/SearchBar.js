import React from 'react';
import { View, TextInput , StyleSheet } from 'react-native';

import { Feather} from '@expo/vector-icons';

function SearchBar({term, onTermChange, onTermSubmit}) {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' style= {styles.iconStyle}/>
           <TextInput 
           style ={styles.textInput} 
           placeholder = 'Search'
           value = {term}
           onChangeText={newTerm => onTermChange(newTerm)}
           onEndEditing = {()=>onTermSubmit()}
           
           />

        </View>
        
    );
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor : 'grey',
        height : 50,
        borderRadius : 5,
        marginHorizontal : 10,
        marginTop : 10,
        flexDirection : 'row',
        marginBottom : 10,

    },
    textInput:{
        fontSize : 18,
        flex : 1,

    },
    iconStyle : {
        fontSize : 30,
        alignSelf : 'center',
        marginHorizontal : 15,

    },
    
})
export default SearchBar;