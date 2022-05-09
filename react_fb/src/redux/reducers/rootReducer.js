import { combineReducers } from "redux";
import userReducer from "./userReducer/userReducer";
import postReducer from "./postReducer/postReducer";
import { firestoreReducer } from "redux-firestore";
import storyReducer from "./storyReducer/storyReducer";
import adminReducer from "./adminReducer/adminReducer";
import groupReducer from "./groupReducer/groupReducer";
import friendReducer from "./friendReducer/friendReducer";
const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  story: storyReducer,
  admin: adminReducer,
  group: groupReducer,
  friend: friendReducer,
});
export default rootReducer;
