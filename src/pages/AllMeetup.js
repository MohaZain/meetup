import { useState, useEffect } from "react";
import MeetupList from "../components/meetup/MeetupList";

function AllMeetupPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const url =
      "https://react-getting-started-e4785-default-rtdb.europe-west1.firebasedatabase.app/meetups.json";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetup </h1>
      <MeetupList meetups={meetups} />
    </section>
  );
}

export default AllMeetupPage;
