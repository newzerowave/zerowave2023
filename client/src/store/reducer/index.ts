import { Reducer, combineReducers } from 'redux';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
// useSelector로 상태 조회 시 필요한 타입 정의
export type RootState = ReturnType<typeof rootReducer>;
