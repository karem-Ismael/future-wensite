// // //  import { composeWithDevTools } from "redux-devtools-extension";
// // // import { createStore, applyMiddleware } from "redux";
// // // import { persistStore, persistReducer } from "redux-persist"; // defaults to localStorage for web
// // // import Thunk from "redux-thunk";

// // // import rootReducer from "./rootReducer";
// // // import session from "redux-persist/lib/storage/session";

// // // const persistConfig = {
// // //   key: "root",
// // //   storage: session,
// // // };

// // // const persistedReducer = persistReducer(persistConfig, rootReducer);

// // // let store = createStore(
// // //   rootReducer,
// // //   composeWithDevTools(applyMiddleware(Thunk))
// // // );
// // // let persistor = persistStore(store);

// // // export function useStore() {
// // //   return { store, persistor };
// // // }

// // import { createStore, applyMiddleware, compose } from 'redux';
// // import Thunk from 'redux-thunk';
// // import rootReducer from './rootReducer';

// // export function configureStore(initialState) {

// //     const store = createStore(
// //         reducers,
// //         initialState,
// //         compose(applyMiddleware(Thunk))
// //     );

   
// //     return store;
// // }

// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { createWrapper } from "next-redux-wrapper";
// import rootReducer from "./rootReducer";

// // initial states here
// const initalState = {};

// // middleware
// const middleware = [thunk];

// // creating store
// export const store = createStore(
//   rootReducer,
//   initalState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// // assigning store to next wrapper
// const makeStore = () => store;

// export const wrapper = createWrapper(makeStore);




// /* eslint-disable import/no-anonymous-default-export */
// import { useMemo } from "react";
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./rootReducer";
// import { persistStore } from "redux-persist";

// let store;

// const initialState = {};

// function initStore(preloadedState = initialState) {
//   return createStore(
//     rootReducer,
//     preloadedState,
//     composeWithDevTools(applyMiddleware())
//   );
// }

// export const initializeStore = (preloadedState) => {
//   let _store = store ?? initStore(preloadedState);

//   // After navigating to a page with an initial Redux state, merge that state
//   // with the current state in the store, and create a new store
//   if (preloadedState && store) {
//     _store = initStore({
//       ...store.getState(),
//       ...preloadedState,
//     });
//     // Reset the current store
//     store = undefined;
//   }

//   // For SSG and SSR always create a new store
//   if (typeof window === "undefined") return _store;
//   // Create the store once in the client
//   if (!store) store = _store;

//   return _store;
// };

// export function useStore(initialState) {
//   const store = useMemo(() => initializeStore(initialState), [initialState]);
//   return store;
// }

import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist"; // defaults to localStorage for web

import rootReducer from "./rootReducer";
import session from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: session,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
let persistor = persistStore(store);

export function useStore() {
  return { store, persistor };
}