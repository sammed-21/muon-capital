import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "listSlice",
  initialState: {
    list: [],
    leftshowCart: false,
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
    // id: idEX,
    // title: newTitle,
    // desc: newDescription,
    // parentId: parentId,
    updateTodo: (state, action) => {
      const { id, title, desc, parentId } = action.payload;
      const updatedList = state.list.map((item) => {
        if (item.id === parentId) {
          const updatedChildren = item.children.map((child) => {
            if (child.id === id) {
              return { ...child, title, desc };
            }
            return child;
          });
          return { ...item, children: updatedChildren };
        }
        return item;
      });
      return { ...state, list: updatedList };
      // state.list.forEach((item) => {
      //   if (item.id === action.payload.parentId) {
      //     item.children.forEach((child) => {
      //       if (child.id == action.payload.parentId) {
      //         {
      //           child.title = action.payload.title;
      //         }
      //       }
      //       // if (child.id === action.payload.id) {
      //       //   (child.title = action.payload.title),
      //       //     (child.desc = action.payload);
      //       // }
      //     });
      //   }
      // });
      //   title: action.payload.title,
      //   desc: action.payload.desc,
      // });
    },
    showLeftBar: (state) => {
      state.leftshowCart = !state.leftshowCart;
    },
  },
});

export const { addList } = listSlice.actions;
export const { updateTodo } = listSlice.actions;
export const { addCard } = listSlice.actions;
export const { showLeftBar } = listSlice.actions;
export default listSlice.reducer;
