// Redux Related
import { createStore, applyMiddleware, compose, Action } from "redux";
import triviaReducers from "./trivia/redux/reducers/index";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from "react-redux";
import thunk, { ThunkAction } from "redux-thunk";

// The following declaration is used to compose with DevTools only on DESKTOP Web Browsers.
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store
const store = createStore(
  triviaReducers,
  composeEnhancers(applyMiddleware(thunk))
);

// Custom useSelector hook containing types
export type RootState = ReturnType<typeof triviaReducers>;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

// AppThunk for redux thunk actions to find dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  void,
  RootState,
  null,
  Action<string>
>;
export default store;
