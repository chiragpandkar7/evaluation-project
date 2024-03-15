import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useProjects from '../hooks/useProjects';
import { useDispatch } from 'react-redux';
import { setSelectedProjectId } from '../store/slices/projects.slice';

export default function ProjectsDropdown() {
  const { projects, projectIds } = useProjects();
  const dispatch = useDispatch();

  
  const initialSelectedProject = projectIds && projectIds.length > 0 ? projectIds[0] : '';

  const [selectedProject, setSelectedProject] = React.useState(initialSelectedProject);
    
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedProject(event.target.value as string);
    dispatch(setSelectedProjectId(event.target.value as string));
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth: 400 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">My Projects</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedProject}
          label="My Projects"
          onChange={handleChange}
        >
          {projects && projects.length > 0 && projects.map(project => (
            <MenuItem key={project.id} value={project.id}>{project.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
