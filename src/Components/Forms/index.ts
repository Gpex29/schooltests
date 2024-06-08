import ExtendedChoiceForm from './ExtendedChoiceForm';
import MultiplyChoiceForm from './MultiplyChoiceForm';
import ShortChoiceForm from './ShortChoiseForm';
import SingleChoiceForm from './SingleChoiceForm';

interface QuestionComponents {
  'single choice': typeof SingleChoiceForm;
  'multiple choice': typeof MultiplyChoiceForm;
  'short answer': typeof ShortChoiceForm;
  'extended answer': typeof ExtendedChoiceForm;
}

const forms: QuestionComponents = {
  'single choice': SingleChoiceForm,
  'multiple choice': MultiplyChoiceForm,
  'short answer': ShortChoiceForm,
  'extended answer': ExtendedChoiceForm,
};

const getForm = (type: keyof QuestionComponents) => forms[type];

export default getForm;
