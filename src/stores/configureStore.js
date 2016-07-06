import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk'; // thunk middleware returns you a function instead of an action
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/index';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

// import { autoRehydrate } from 'redux-persist';

const socket = io(`http://${window.location.host}`);
const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');
const logger = createLogger();
const router = routerMiddleware(browserHistory);
// sync our store with the browser history, so that we can listen later on to events based on our current route.

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk,
      router,
      logger,
      socketIoMiddleware
    )
  );
}

// warning: https://github.com/reactjs/redux/pull/1294
// const createStoreWithMiddleware = applyMiddleware(thunk, router, logger)(createStore);
// export default function configureStore(initialState) {
//   return createStoreWithMiddleware(rootReducer, initialState);
// }

// We will not use that in this tutorial, but it can
// help you to fetch data on route changes for instance.

// Additionally properties like browser path or query params
// in the URL can be accessed in the store now.
export { configureStore, socket };
// We will not use that in this tutorial, but it can help you to fetch data on route changes for instance.
// Additionally properties like browser path or query params in the URL can be accessed in the store now.
