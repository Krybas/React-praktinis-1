
const Message = ({ feedback }) => {
    return feedback ? <p className="text-xl font-semibold text-center">{feedback}</p> : null;
};

export default Message;
