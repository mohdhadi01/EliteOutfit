import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, AppState } from '..';

import { useCallback } from 'react';
import { MODE, setMode } from '.';


export const useSetMode = () => {
    const dispatch = useDispatch<AppDispatch>();
    return useCallback(
        (mode: MODE) => {
            dispatch(setMode({ mode }));
        },
        [dispatch]
    );
};

export const useMode = () => {
    return useSelector((state: AppState) => state?.mode?.mode);
};
