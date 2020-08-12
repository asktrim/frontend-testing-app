import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./index";

//Redux Boilerplate
const finalCreateStore = compose(
  applyMiddleware(),
  process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
)(createStore);

function configureStore(preloadedState) {
  const store = finalCreateStore(rootReducer, preloadedState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./index", () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}

export default configureStore();
