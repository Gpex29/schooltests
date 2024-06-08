import useStore from '../store/store';

function Progressbar() {
  const data = useStore((state) => state.data);
  const currentQuestion = useStore((state) => state.currentQuestion);
  
  return (
    <div className='flex flex-row gap-1 m-3'>
      {data.ids.map((id: number) => (
        <div
          key={id}
          className={`h-2 w-12 ${
            id < currentQuestion
              ? 'bg-black'
              : id === currentQuestion
              ? 'bg-red-700'
              : 'bg-slate-300'
          }`}
        ></div>
      ))}
    </div>
  );
}

export default Progressbar;
