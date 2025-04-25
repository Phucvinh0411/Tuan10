import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateInput, calculateResult } from './bmiSlice';

const BMICalculator = () => {
    const dispatch = useDispatch();
    const { formData, result, error } = useSelector((state) => state.bmi);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateInput({ name, value }));
    };

    const handleCalculate = () => {
        dispatch(calculateResult());
    };

    return (
        <div>
            <h2>Tính BMI</h2>
            <div>
                <label>
                    Cân nặng (kg):
                    <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        placeholder="Nhập cân nặng"
                    />
                </label>
            </div>
            <div>
                <label>
                    Chiều cao (cm):
                    <input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleInputChange}
                        placeholder="Nhập chiều cao"
                    />
                </label>
            </div>
            <button onClick={handleCalculate}>Tính BMI</button>
            {result && <p>Kết quả BMI: {result}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default BMICalculator;