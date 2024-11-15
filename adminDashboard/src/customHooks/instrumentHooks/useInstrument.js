import { useDispatch, useSelector } from "react-redux";
import { approveOrRejectInstrument } from "../../redux/thunkFunctions/instrumentThunks/approveOrRejectInstrument";

export const useInstrument = (instrumentID, isApproved) => {
  const dispatch = useDispatch();
  const instrument = useSelector((state) => state.instrument);

  const handleApprove = () => {
    dispatch(approveOrRejectInstrument(instrumentID, isApproved));
  };
  return { instrument: instrument, handleApprove };
};
