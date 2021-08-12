/* eslint-disable @typescript-eslint/no-unused-vars */

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './root-store';

/* eslint-enable @typescript-eslint/no-unused-vars */

// Use throughout app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (): any => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
