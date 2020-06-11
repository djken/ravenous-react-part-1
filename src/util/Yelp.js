const apiKey = 'yiqJNCKBhCSiCBV67sbWC5mI1Xv8ett-3pbj9QivsjKKQQIfw4SU0DKpSS2IWTZT-OJvd7ulnnMVVC8-fuJnqWJb0YhgVf0ICDpMnh-c5lBTZ2aKuOT5bXo8wpPiXnYx';

const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }));
                }
            });
    }
};


export default Yelp;
