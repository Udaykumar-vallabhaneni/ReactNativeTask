// export action creators
import * as loginActions from './loginActions';
import * as apiActions from './apiActions';
import * as navigationActions from './navigationActions';

export const ActionCreators = Object.assign({}, loginActions, navigationActions, apiActions);
