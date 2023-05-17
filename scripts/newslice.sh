# Get the name of the slice from the user
read -p "Enter the name of the slice: " slice_name
mkdir -p "${slice_name}"
cd "${slice_name}"
# Create a new slice file with the provided name
cat <<EOF >${slice_name}.slice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface ${slice_name}State {
  value: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ${slice_name}State = {
  value: 0,
  status: 'idle',
  error: null,
};

export const fetchCount = createAsyncThunk<number, void, { rejectValue: string }>(
  '${slice_name}/fetchCount',
  async (_, thunkApi) => {
    try {
      const response = await fetch('/api/count');
      if (!response.ok) {
        throw new Error('Failed to fetch count');
      }
      const data = await response.json();
      return data.count;
    } catch (err) {
      return thunkApi.rejectWithValue(\`API request failed: \${err.message}\`);
    }
  }
);


const ${slice_name}Slice = createSlice({
  name: '${slice_name}',
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

export const { increment, decrement, incrementByAmount } = ${slice_name}Slice.actions;
// Export your actions and reducer
export default ${slice_name}Slice.reducer;
EOF


