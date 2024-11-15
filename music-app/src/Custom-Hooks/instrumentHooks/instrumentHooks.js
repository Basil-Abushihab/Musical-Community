import { useDispatch, useSelector } from "react-redux";
import { makeInstrumentListing } from "../../Redux/Thunks/instrumentThunks/makeInstrumentThunk";
export const useInstrument = (formData) => {
  const dispatch = useDispatch();
  const instrument = useSelector((state) => state.instrument);

  const makeInstrumentListingHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(makeInstrumentListing(formData));
    } catch (e) {
      throw e;
    }
  };

  return { instrument, makeInstrumentListingHandler };
};
