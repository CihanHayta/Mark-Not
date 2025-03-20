import { combineReducers, configureStore } from "@reduxjs/toolkit";
import notesReducer from "./slices/notesSlice";
import tagsReducer from "./slices/tagSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// persist ayarlarını yap
const persistConfig = {
    key: "root",
    storage,
  };

  const rootReducer = combineReducers({
    notes: notesReducer,
    tags: tagsReducer,
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);



  const store = configureStore({
    // store'daki reducer'ları tanımla
    reducer: persistedReducer,
    // persist işleminden geçirilen reducer'ların serializable olmadığını belirt
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
