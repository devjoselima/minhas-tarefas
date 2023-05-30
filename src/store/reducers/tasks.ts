import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Task from '../../models/Task';
import * as enums from '../../utils/enums/Task';

type StateTask = {
  items: Task[];
};

const initialState: StateTask = {
  items: [
    {
      id: 1,
      description: 'Estudar Javascript revendo o exercicio do modulo 7',
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUDED,
      title: 'Estudar javascript'
    },

    {
      id: 2,
      description: 'Estudar react terminando o exercicio do modulo 32',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.PENDING,
      title: 'Estudar React'
    },

    {
      id: 3,
      description: 'Entregar trabalho online da faculdade',
      priority: enums.Priority.URGENT,
      status: enums.Status.PENDING,
      title: 'Fazer trabalho da faculdade'
    }
  ]
};

const tasksSlices = createSlice({
  name: 'tarefas',
  initialState, //initialState: initialState
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((task) => task.id !== action.payload);
    }
  }
});

export const { remove } = tasksSlices.actions;
export default tasksSlices.reducer;
