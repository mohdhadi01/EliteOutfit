import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import modeReducer from './mode';


const persistConfig = {
    key: 'root',
    storage,
};

// Combine reducers
const rootReducer = combineReducers({
    mode: modeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Custom middleware for handling persistence
const persistenceMiddleware: Middleware =
    ({ getState }) =>
    (next) =>
    (action) => {
        const result = next(action);
        // Save state to localStorage
        localStorage.setItem('reduxState', JSON.stringify(getState()));
        return result;
    };

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(persistenceMiddleware),
    devTools: true,
});

// Begin persisting the store
persistStore(store);

// Whole App State Data Type
export type AppState = ReturnType<typeof store.getState>;

// App Dispatcher Data Type
export type AppDispatch = typeof store.dispatch;

// export the store
export default store;

//exp