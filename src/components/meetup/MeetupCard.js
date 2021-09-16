import style from './MeetupCard.module.css'
import Card from '../ui/Card';
import { useContext } from "react";
import FavortiesContext from '../../store/favorites-context';
function MeetupCard(props){
    const favContect = useContext(FavortiesContext);
    const itemIsFav = favContect.itemIsFavorites(props.id)
    function tggleFavortiesHandler(){
        if(itemIsFav){
            favContect.removeFavorties(props.id) 
        }
        else{
            favContect.addFavorties({
                id:props.id,
                title: props.title,
                description: props.description,
                image:props.image,
                address:props.address
            })
        }
    }
    return (
        <li className={style.item}>  
        <Card> 
            <div className={style.image}>
            <img src={props.image} alt={props.title} />
            </div>
            <div className={style.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
            </div>
            <div className={style.actions}>
            <button onClick={tggleFavortiesHandler}>{itemIsFav ? 'Remove' : 'To Favorties'}</button>
            </div>
        </Card>
        </li>
      );
}
export default MeetupCard;