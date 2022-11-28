import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Data, isLike, Like, Tweet } from "../../routers/Tweets";

interface getDataState {
  currentPosts: Array<Data>;
  id: string;
  currentPage: number;
  postPerPage: number;
  totalPosts: number;
  isLoaded: boolean;
  pageCount: number;
  totalPageNumber: number;
}

const initialState = {
  currentPosts: [],
  id: "",
  currentPage: 1,
  postPerPage: 10,
  totalPosts: 0,
  isLoaded: false,
  pageCount: 1,
  totalPageNumber: 0,
} as getDataState;

export const getDataSlice = createSlice({
  name: "setTweetData",
  initialState: initialState,
  reducers: {
    changGetDataState(state, action: PayloadAction<any>) {
      state.totalPosts = action.payload.totalPosts;
      state.totalPageNumber = action.payload.totalPageNumber;
      state.id = action.payload.id;
    },
    changeCurrentPosts(state, action: PayloadAction<[]>) {
      state.currentPosts = action.payload;
    },
    addCurrentPosts(state, action: PayloadAction<[]>) {
      state.currentPosts.push(...action.payload);
    },
    changeCurentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setPageCount(state, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },

    changeTotalPosts(state, action: PayloadAction<number>) {
      state.totalPosts = action.payload;
    },
    changeIsLoaded(state, action: PayloadAction<boolean>) {
      state.isLoaded = action.payload;
    },
    changeIsOpened(state, action: PayloadAction<boolean>) {
      state.currentPosts.map((t) => {
        return (t.is_opened = action.payload);
      });
    },
  },
});

export const {
  changGetDataState,
  changeCurentPage,
  changeCurrentPosts,
  changeIsOpened,
  changeTotalPosts,
  changeIsLoaded,
  setPageCount,
  addCurrentPosts,
} = getDataSlice.actions;

// export const { changeIsOpened } = getIsOpenedSlice.actions;

export default getDataSlice.reducer;
