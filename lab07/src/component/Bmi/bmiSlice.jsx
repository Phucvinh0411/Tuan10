import { createSlice } from '@reduxjs/toolkit';

const bmiSlice = createSlice({
    name: 'bmi',
    initialState: {
        formData: {
            weight: '',
            height: '',
        },
        result: null,
        error: null,
    },
    reducers: {
        updateInput: (state, action) => {
            const { name, value } = action.payload;
            state.formData[name] = value;
        },
        calculateResult: (state) => {
            const { weight, height } = state.formData;
            if (weight && height && Number(weight) > 0 && Number(height) > 0) {
                const heightInMeters = Number(height) / 100; // Chuyển cm sang m
                const bmi = (Number(weight) / (heightInMeters * heightInMeters)).toFixed(2);
                state.result = bmi;
                state.error = null;
            } else {
                state.result = null;
                state.error = 'Vui lòng nhập cân nặng và chiều cao hợp lệ';
            }
        },
    },
});

// Export actions
export const { updateInput, calculateResult } = bmiSlice.actions;

// Export reducer
export default bmiSlice.reducer;