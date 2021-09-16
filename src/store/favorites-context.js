import { createContext, useState } from "react";

const FavortiesContext = createContext({
    favorties:[],
    totalFavorites : 0,
    addFavorties: (favMeetup) => {},
    removeFavorties: (meetupId) => {},
    itemIsFavorites: (meetupId) => {}
});

export function FavortiesContextProvider(props){
    const [userFavorites, setUserFavorties] = useState([])

    function addFavortiesHandler(favMeetup){
        setUserFavorties(preFavMeetup => {
            return preFavMeetup.concat(favMeetup)
        })
    }
    function removeFavortiesHandler(meetupId){
        setUserFavorties(preFavMeetup => {
            return preFavMeetup.filter(meetup => meetup.id !== meetupId)
        })
    }
    function itemIsFavoritesHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId)
    }
    const context = {
        favorties:userFavorites,
        totalFavorites:userFavorites.length,
        addFavorties: addFavortiesHandler,
        removeFavorties: removeFavortiesHandler,
        itemIsFavorites: itemIsFavoritesHandler
    }
    return <FavortiesContext.Provider value={context}>
        {props.children}
    </FavortiesContext.Provider>
}

export default FavortiesContext;