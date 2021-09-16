import {useHistory} from 'react-router-dom'
import NewMeetupForm from "../components/meetup/NewMeetupForm";

function NewMeetupPage(){
    const history = useHistory();
    function OnAddHandler(meetupData){
        const url = 'https://react-getting-started-e4785-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
        fetch(
                url,
                {
                    method :'POST',
                    body: JSON.stringify(meetupData),
                    headers: {
                        'Content-Type':'application/json'
                    }
                }
            ).then(() => {
                history.replace('/');
            });
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAdd={OnAddHandler} />
        </section>
    )
}

export default NewMeetupPage;