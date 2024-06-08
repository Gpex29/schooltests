/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import data from '../../fakeData.json';

const useStore = create(
  persist(
    (set, get: () => any) => ({
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
