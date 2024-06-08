import { create } from 'zustand';
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware';
import data from '../../fakeData.json';

const useStore = create(
  persist(
    (set, get: () => Partial<PersistOptions>) => ({
      data,
      currentQuestion: 1,
      answers: [],
      timeIsUp: false,
      setNextQuestion: () => {
        set({ currentQuestion: get().currentQuestion + 1 });
      },
      setAnswer: (answer: object) => {
        set({answers: [...get().answers, answer]});
      },
      endTime: () => set({ timeIsUp: true }),
    }),
    {
      name: 'scholl-tests',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useStore;
