import "./profile.css";
import img from "../assets/pfp.png";
export default function profile() {
  return (
    <div className='profile'>
      <div className='image'>
        <img src={img} alt=""/> 
      </div>
        <div className='name'> Herra </div>
      <div className='content'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          repellat iure voluptatibus minus explicabo laboriosam sunt! Reiciendis
          repudiandae maxime nam illo culpa! Inventore doloribus, illo nobis
          accusantium debitis quisquam odio?
        </p>
      </div>
      <div className='buttons'>
        <button> View Profile </button>
        <button> Contact </button>
      </div>
    </div>
  );
}
