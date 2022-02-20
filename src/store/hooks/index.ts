/* eslint-disable react-hooks/rules-of-hooks */
import { AppDispatch, RootState } from '../store';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
