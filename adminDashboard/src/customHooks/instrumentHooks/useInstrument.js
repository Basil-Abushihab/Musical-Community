import { useDispatch, useSelector } from "react-redux";
import { approveOrRejectInstrument } from "../../redux/thunkFunctions/instrumentThunks/approveOrRejectInstrument";

export const useInstrument = (instrumentID) => {
  const dispatch = useDispatch();
  const instrument = useSelector((state) => state.instrument);

  const handleApprove = () => {
    dispatch(
      approveOrRejectInstrument({
        instrumentID: instrumentID,
        isApproved: true,
      })
    );
  };

  const handleReject = () => {
    dispatch(
      approveOrRejectInstrument({
        instrumentID: instrumentID,
        isApproved: false,
      })
    );
  };
  return { instrument: instrument, handleApprove, handleReject };
};
