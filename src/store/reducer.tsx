import projectReducer from "./slices/projects.slice";
import issueReducer from "./slices/issues.slice";
import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth.slice";

export interface RootState {
  project: ReturnType<typeof projectReducer>;
  issue: ReturnType<typeof issueReducer>;
  auth: ReturnType<typeof authReducer>
}

const rootReducer = combineReducers({
  project: projectReducer,
  issue: issueReducer,
  auth: authReducer,
});

export default rootReducer;
