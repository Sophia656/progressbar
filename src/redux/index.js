import { legacy_createStore as createStore } from 'redux';
import { ProgressBarReducer } from './reducer/ProgressbarReducer';

export const store = createStore(ProgressBarReducer)