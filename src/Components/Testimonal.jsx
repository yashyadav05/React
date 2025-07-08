
import { useState } from "react";
import Card from "./Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonal(props) {
    const [index,setIndex] = useState(0)
  let review = props.reviews;
  const leftShiftHandler = () => {
       if(index > 0){
        setIndex(index - 1)
       }
       else{
        setIndex(review.length -1)
       }
  };
  const rightShiftHandler = () => {
    if(index + 1 >= review.length){
        setIndex(0)
    }else{
        setIndex(index + 1)
    }
  };
  const surpriseMe = () => {
   let random =  Math.floor(Math.random() * review.length)
   setIndex(random)
  };
  return (
    <div>
      <Card reviews={review[index]} />
      <div className="mt-3 mb-3 gap-10 flex justify-center">
        <button onClick={leftShiftHandler} className="text-violet-400">
          <FaChevronLeft />
        </button>
        <button onClick={rightShiftHandler} className="text-violet-400">
          <FaChevronRight />
        </button>
      </div>
      <button
        onClick={surpriseMe}
        className="bg-violet-400 text-white w-30 h-10 rounded-md"
      >
        Surprise me
      </button>
    </div>
  );
}
