import React from 'react';
import { View, Text , StyleSheet , Image} from 'react-native';


function ResultsDetails({result}) {
    return (
        <View style={styles.conatiner}>
            <Image style={styles.image} source = {{ uri: result.image_url}} />
            <Text style={styles.name} >{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>

        </View>
    );
};
const styles = StyleSheet.create({
    conatiner:{
            marginLeft : 10,
    },
    image : {
            width : 250,
            height : 130,
            borderRadius : 5,
            marginBottom : 5,
    },
    name: {
        fontWeight : 'bold',
        
    }
})

export default ResultsDetails;