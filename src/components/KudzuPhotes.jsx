import { useState } from "react";
import { forestAKudzu, forestBKudzu, arrow } from "../assets";
import Modal from "./Modal";

const KudzuPhotoes = () => {
    let title = "11111";
    let content = "11111";
    const [show, setShow] = useState(false);

    let title2 = "2222";
    let content2 = "2222";
    const [show1, setShow1] = useState(false);

    const OnClickPhotoes = (num) => {
        if (num === 0) {
            setShow(!show);
        } else {
            setShow1(!show1);
        }
    };

    return (
        <div className="w-4/5 mx-auto p-4 rounded-lg">
            <div className="flex justify-center items-center">
                <img
                    src={forestBKudzu}
                    alt="Forest B Kudzu"
                    className="h-[30em] w-[30em] object-cover mx-4 border border-gray-200 rounded cursor-pointer"
                    onClick={() => OnClickPhotoes(0)}
                />
                <img
                    src={arrow}
                    alt="Arrow"
                    className="h-[10em] w-[10em] mx-4"
                />
                <img
                    src={forestAKudzu}
                    alt="Forest A Kudzu"
                    className="h-[30em] w-[30em] object-cover mx-4 border border-gray-200 rounded cursor-pointer"
                    onClick={() => OnClickPhotoes(1)}
                />
                <Modal isOpen={show} onClose={() => setShow(false)} title={title} content={content} />
                <Modal isOpen={show1} onClose={() => setShow1(false)} title={title2} content={content2} />
            </div>
        </div>
    );
};

export default KudzuPhotoes;