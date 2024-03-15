import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../types";

interface ProjectState {
    projects: Project[]; 
    projectIds: string[]; 
    selectedProjectId: string;
    hubId: string;
  }


const projectSlice = createSlice({
    name: 'project',
    initialState: { } as ProjectState,
    reducers: {
      setProjects: (state, action: PayloadAction<{ projects: Project[]; projectIds: string[]; }>) => {
        state.projects = action.payload.projects;
        state.projectIds = action.payload.projectIds;
        
      },
      setSelectedProjectId: (state, action: PayloadAction<string>) => {
        state.selectedProjectId = action.payload;
      },
      setHubId: (state, action: PayloadAction<string>) => {
        state.hubId = action.payload;
      }
    },
  });
  
  export const { setProjects, setSelectedProjectId, setHubId } = projectSlice.actions;
  export default projectSlice.reducer;