import useStore from '../../store/store';
import Button from '../Button';
import Question from '../Question';
import { Formik, Field, Form } from 'formik';

const SingleChoiceForm = () => {
  const setNextQuestion = useStore((state) => state.setNextQuestion);
  const data = useStore((state) => state.data);
  const currentQuestion = useStore((state) => state.currentQuestion);
  const options = data[currentQuestion].options;
  const setAnswer = useStore((state) => state.setAnswer);

  return (
    <Formik
      key={currentQuestion}
      initialValues={{
        [currentQuestion]: '',
      }}
      onSubmit={(answer) => {
        setAnswer(answer);
        setNextQuestion();
      }}
    >
      <Form className='flex flex-col space-y-3 m-3'>
        <Question />
        {options.map((option: string) => (
          <label key={`${option}+${currentQuestion}`}>
            <Field
              type='radio'
              name={currentQuestion}
              className='accent-red-700'
              value={option}
            />
            {option}
          </label>
        ))}
        <Button />
      </Form>
    </Formik>
  );
};
export default SingleChoiceForm;
