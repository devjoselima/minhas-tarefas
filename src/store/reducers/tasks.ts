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
    },
    edit: (state, action: PayloadAction<Task>) => {
      const indexTask = state.items.findIndex(
        (t) => t.id === action.payload.id
      );

      if (indexTask >= 0) {
        state.items[indexTask] = action.payload;
      }
    },
    register: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const taskExist = state.items.find(
        (task) =>
          task.title.toLowerCase() === action.payload.title.toLowerCase()
      );

      if (taskExist) {
        alert('Ja existe uma tarefa com esse nome');
      } else {
        const lastTask = state.items[state.items.length - 1];

        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        };

        state.items.push(newTask);
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: number; finished: boolean }>
    ) => {
      const indexTask = state.items.findIndex(
        (t) => t.id === action.payload.id
      );

      if (indexTask >= 0) {
        state.items[indexTask].status = action.payload.finished
          ? enums.Status.CONCLUDED
          : enums.Status.PENDING;
      }
    }
  }
});

export const { remove, edit, register, changeStatus } = tasksSlices.actions;
export default tasksSlices.reducer;
