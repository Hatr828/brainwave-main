import { feedback } from "../constants";
import { createRoot } from 'react-dom';
import App from '../App';


const FeedbackCard = ({ id, content, name, title, img,}) =>
  {
const openModal = () =>
{
   feedback[id].open = true;
  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
};

  return (
    <div onClick={openModal} className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-0   feedback-card cursor-pointer">
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
)};


export default FeedbackCard;
