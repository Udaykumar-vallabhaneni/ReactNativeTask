/* 
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as mainDataReducer from './mainDataReducer';

export default Object.assign(loginReducer, loadingReducer, mainDataReducer);

