import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState:{
      channelId:null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    enterRoom: (state, action) => {
      state.channelId = action.payload.channelId;
    },
    },
});

export const { enterChannel } = appSlice.actions;
export const selectRoomId = (state) => state.app.channelId;

export default appSlice.reducer;
