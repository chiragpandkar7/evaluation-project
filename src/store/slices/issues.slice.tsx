import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Issue } from "../types";

interface IssueState {
    issues: {
        [projectId: string]: Issue[];
    };
}

const issueSlice = createSlice({
    name: 'issues',
    initialState: { issues: {} } as IssueState,
    reducers: {
        setProjectIssues: (state, action: PayloadAction<{ projectId: string; issues: Issue[] }>) => {
            const { projectId, issues } = action.payload;
            state.issues[projectId] = issues;
        },
    },
});

export const { setProjectIssues } = issueSlice.actions;
export default issueSlice.reducer;
