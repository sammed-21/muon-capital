import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "listSlice",
  initialState: {
    list: [],
  },
  reducers: {
    addList: (state, action) => {
      // console.log("action called", action);
      state.list.push(action.payload);
    },
    addCard: (state, action) => {
      // console.log("action called", action.payload.desc);
      state.list.forEach((item) => {
        if (item.id === action.payload.parentId) {
          if (Object.hasOwn(item, "children")) {
            item.children.push(action.payload);
          } else {
            item.children = [];
            item.children.push(action.payload);
          }
        }
      });
    },
    updateTodo: (state, action) => {
      state.list.forEach((list) => {
        if (list.id === action.payload.id) {
          return {
            todos: state.list.children.forEach((todo) => {
              if (todo.id === action.payload.parentId) {
                return {
                  ...todo,
                  children: todo.children.map((child) => {
                    if (child.id === action.payload.id) {
                      return {
                        ...child,
                        title: action.payload.title,
                        desc: action.payload.desc,
                      };
                    }
                    return child;
                  }),
                };
              }
              return todo;
            }),
          };
        }
        return list;
      });
      console.log(action);
    },
  },
});

export const { addList } = listSlice.actions;
export const { updateTodo } = listSlice.actions;
export const { addCard } = listSlice.actions;
export default listSlice.reducer;
