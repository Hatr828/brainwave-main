import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { useState } from 'react';
import Modal from './Modal';

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <section style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      height: '100vh', marginLeft: '11em'
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

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => 
          <>
            <FeedbackCard onClick={openModal} key={card.id} {...card} />
        <Modal isOpen={isModalOpen} onClose={closeModal} title={card.title2} content={card.content2}/>
        </>)}
      </div>
    </section>
    </>
  );
};

export default Testimonials;