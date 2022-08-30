import { RESET_STATE } from '../Reducers/resetReducer';

export default function resetStateAction(payload) {
  return {
    type: RESET_STATE,
    payload,
  };
}
