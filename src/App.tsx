import useStore from './store/store';
import Timer from './Components/Timer';
import RenderForm from './Components/Forms/RenderForm';
import Progressbar from './Components/Progressbar';

function App() {
  const data = useStore((state) => state.data);
  const currentQuestion = useStore((state) => state.currentQuestion);
  const timeIsUp = useStore((state) => state.timeIsUp);
  const answers = useStore((state) => state.answers);

  if (currentQuestion > data.ids.length) {
    console.log(answers)
    return (
      <div className='fixed bg-gray-300 w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center shadow-lg'>
        Тест пройден!
      </div>
    );
  }

  if (timeIsUp) {
    return (
      <div className='fixed bg-gray-300 w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center shadow-lg'>
        Время истекло!
      </div>
    );
  }

  const type = data[currentQuestion].type;

  return (
    <div className='fixed size-2/3 space-y-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg'>
      <div className='flex flex-row m-3'>
        <h1 className='font-bold text-xl'>Тестирование</h1>
        <Timer />
      </div>
      <Progressbar />
      {RenderForm(type)}
    </div>
  );
}

export default App;
