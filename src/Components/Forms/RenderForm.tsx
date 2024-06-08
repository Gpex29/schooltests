import getForm from '.';
import { QuestionComponents } from '.';

const RenderForm = (type: keyof QuestionComponents) => {
  const Component = getForm(type);
  return <Component />;
};

export default RenderForm;