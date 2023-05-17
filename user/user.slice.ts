import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface userState {
  value: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: userState = {
  value: 0,
  status: 'idle',
  error: null,
};

export const fetchCount = createAsyncThunk<number, void, { rejectValue: string }>(
  'user/fetchCount',
  async (_, thunkApi) => {
    try {
      const response = await fetch('/api/count');
      if (!response.ok) {
        throw new Error('Failed to fetch count');
      }
      const data = await response.json();
      return data.count;
    } catch (err) {
      return thunkApi.rejectWithValue(`API request failed: ${err.message}`);
    }
  }
);


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCount.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCount.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value += action.payload;
      })
      .addCase(fetchCount.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? 'Unknown error';
      });
  },
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;
// Export your actions and reducer
export default userSlice.reducer;
