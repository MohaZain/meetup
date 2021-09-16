import MeetupCard from "./MeetupCard";
import style from './MeetupList.module.css'
function MeetupList(props){
   return ( 
    <ul className={style.list}>
        {props.meetups.map(meetup => 
        <MeetupCard key={meetup.id}
            id = {meetup.id}
            title = {meetup.title}
            image = {meetup.image}
            description = {meetup.description}
            address = {meetup.adress}
        />)}
    </ul>
)
}
export default MeetupList;