import { configureStore } from "@reduxjs/toolkit";
import SumAndSubstraction from "../Apps/SumAndSubstraction/reducers/SumAndSubstraction.reducer";

export default configureStore({
  reducer: {
    counter: SumAndSubstraction,
  },
});
