const Modal = ({ isOpen, onClose, title, content }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                    <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75"></div>
                    <div className="modal-border">
                        <div className="modal-content border border-gray-500 bg-gray-900 p-8 rounded shadow-md min-w-[600px] min-h-[400px] relative">
                            <h2 className="text-xl font-bold text-gray-300">{title}</h2>
                            <button onClick={onClose} className="absolute top-0 right-0 m-4 text-gray-300">
                                Close
                            </button>
                            <div className="mt-8">
                                <p className="text-gray-300">{content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;