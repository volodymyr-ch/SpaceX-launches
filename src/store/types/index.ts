import reducers from 'store/reducers';

export type RootState = ReturnType<typeof reducers>;

export * from './launches.types';
