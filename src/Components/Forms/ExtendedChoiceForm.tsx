import { Field, Form, Formik } from 'formik';
import useStore from '../../store/store';
import Button from '../Button';
import Question from '../Question';

const ExtendedChoiceForm = () => {
  const setNextQuestion = useStore((state) => state.setNextQuestion);
  const currentQuestion = useStore((state) => state.currentQuestion);
  const setAnswer = useStore((state) => state.setAnswer);

  return (
    <Formik
      key={currentQuestion}
      initialValues={{ [currentQuestion]: '' }}
      onSubmit={(answer) => {
        setAnswer(answer);
        setNextQuestion();
      }}
    >
      <Form className='flex flex-col space-y-3 m-3'>
        <Question />
        <Field
          as='textarea'
          name={currentQuestion}
          placeholder='Write extended answer'
          className='h-52 p-3'
        />
        <Button />
      </Form>
    </Formik>
  );
};
export default ExtendedChoiceForm;
