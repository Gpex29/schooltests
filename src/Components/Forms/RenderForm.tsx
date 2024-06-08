import getForm from '.';

const RenderForm = (type) => {
  const Component = getForm(type);
  return <Component />;
};

export default RenderForm;