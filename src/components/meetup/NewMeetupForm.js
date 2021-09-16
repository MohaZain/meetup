import { useRef } from "react";
import Card from "../ui/Card";
import style from "./NewMeetupForm.module.css";
function NewMeetupForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  function SubmitHand(event) {
    event.preventDefault();
    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredAdress = addressRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    const NewMeetupData = {
      title: enteredTitle,
      image: enteredImage,
      adress: enteredAdress,
      description: enteredDescription,
    };
    // console.log(NewMeetupData);
    props.onAdd(NewMeetupData)
  }
  return (
    <Card>
      <form className={style.form} onSubmit={SubmitHand}>
        <div className={style.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleRef} />
        </div>
        <div className={style.control}>
          <label htmlFor="image">Meetup image</label>
          <input type="url" required id="image" ref={imageRef} />
        </div>
        <div className={style.control}>
          <label htmlFor="Adress">Meetup Adress</label>
          <input type="text" required id="Adress" ref={addressRef} />
        </div>
        <div className={style.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            required
            id="description"
            rows="5"
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className={style.actions}>
          <button>Add</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
