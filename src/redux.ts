// Redux Related
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  Action
} from "redux";
import triviaReducers from "./trivia/redux/reducers/index";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from "react-redux";
import thunk, { ThunkAction } from "redux-thunk";

// The following declaration is used to compose with DevTools only on DESKTOP Web Browsers.
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  triviaReducers,
  composeEnhancers(applyMiddleware(thunk))
);
export type RootState = ReturnType<typeof triviaReducers>;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export type AppThunk<ReturnType = void> = ThunkAction<
  void,
  RootState,
  null,
  Action<string>
>;
export default store;
