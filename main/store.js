import { configureStore } from '@reduxjs/toolkit';
import SumAndSubstraction from '../src/Apps/SumAndSubstraction/reducers/SumAndSubstraction.reducer';

export default configureStore({
  reducer: {
    counter: SumAndSubstraction,
  },
});
