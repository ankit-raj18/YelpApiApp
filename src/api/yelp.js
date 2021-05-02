import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',

    headers : {

        Authorization : 'Bearer _zWA0yTejMo5sfrC65eHkI_5XXfLWUQxJRukCLYwLFGE9mQRCpZIaxI57Xugbp9H3Kog3Sgk1AqsAEIJJHbpeIxlETvgwyLXGZxcCP5hjI7WvZaAfDGWX364RNmLYHYx'
    }

});