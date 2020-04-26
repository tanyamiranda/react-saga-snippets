import {createSelector} from 'reselect';

export const selectApp = state => state.app;

export const selectAppValue = createSelector (
    [selectApp],
    app => app.value
);

export const selectSagaValue = createSelector (
    [selectApp],
    app => app.sagaValue
);