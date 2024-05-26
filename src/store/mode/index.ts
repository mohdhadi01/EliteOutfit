import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum MODE {
    DARK,
    LIGHT,
}

const initialState = {
    mode: MODE.LIGHT,
};

const darkModeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setMode(state, { payload }: PayloadAction<{ mode: MODE }>) {
            state.mode = payload.mode;
            return state;
        },
    },
});

export const { setMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
