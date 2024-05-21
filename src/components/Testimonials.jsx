import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import Modal from './Modal';
import { createRoot } from 'react-dom';
import App from '../App';

const Testimonials = () => {

  const closeModal = () => {
    feedback[0].open = false;
    feedback[1].open = false;
    feedback[2].open = false;
    const root = createRoot(document.getElementById('root'));
    root.render(<App />);
  };

  return (
    <>
      <section style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        height: '100vh', marginLeft: '7.5em'
      }}
        id="clients"
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>

        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-0 mb-6 relative z-[1]">
          <h2 className={styles.heading2}>
            What professionals are <br className="sm:block hidden" /> saying about kudzu
          </h2>
          <div className="w-full md:mt-0 mt-6">
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              Everything you need to know about how destroy kudzu and consequences of methods.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[2]">
          {feedback.map((card) =>
            <>
              <FeedbackCard key={card.id} id={card.id} {...card} />
              <Modal isOpen={card.open} onClose={closeModal} title={card.title2} content={card.content2} />
            </>)}
        </div>
      </section>
    </>
  );
};

export default Testimonials;