import useStore from '../store/store';

const Question = () => {
  const data = useStore((state) => state.data);
  const currentQuestion = useStore((state) => state.currentQuestion);
  return <p>{data[currentQuestion].question}</p>;
};

export default Question;