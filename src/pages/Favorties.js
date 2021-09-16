import { useContext } from "react";
import FavortiesContext from "../store/favorites-context";
import MeetupList from "../components/meetup/MeetupList";
function FavortiesPage() {
  const favContect = useContext(FavortiesContext);
  let content;
  if (favContect.totalFavorites === 0) {
    content = <p>You dont have Favorties yet. Add somthing !</p>;
  } else {
    content = <MeetupList meetups={favContect.favorties} />;
  }
  return (
    <section>
      <h1>Favorties Meetup </h1>
      {content}
    </section>
  );
}

export default FavortiesPage;
