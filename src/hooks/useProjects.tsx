import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { getHubs, getIssues, getProjects } from '../apis/apsServices';
import { setHubId, setProjects } from '../store/slices/projects.slice';
import { useEffect } from 'react';
import { setProjectIssues } from '../store/slices/issues.slice';
import { Project } from '../store/types';

const useProjects = () => {
    const { projects, projectIds } = useSelector((state: RootState) => state.project);
    const Token = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    const fetchHubs = async () => {
        try {
            const response = await getHubs(Token.apsToken.access_token);
            const fetchedHubs = response.data.data;
            dispatch(setHubId(fetchedHubs[0].id)) 

        } catch(error) {
            console.log('Error fetching hubs: ', error);
        }
    }

    const fetchProjects = async () => {
        try{
            const response = await getProjects(Token.apsToken.access_token);
            const fetchedProjects: Project[] = response.data.results;
            const fetchedProjectIds: string[] = fetchedProjects.map((project: { id: string; }) => project.id);
            dispatch(setProjects({ projects: fetchedProjects, projectIds: fetchedProjectIds }));

            fetchedProjectIds.forEach(async (projectId) => {
                const response = await getIssues(projectId, Token.apsToken.access_token);
                const fetchedIssues = response.data.results;
                dispatch(setProjectIssues({ projectId: projectId, issues: fetchedIssues }));
            });
        } catch (error) {
            console.log('Error fetching projects: ', error);
        }
    };

    useEffect(() => {
        fetchHubs();
        fetchProjects();
    }, []);

    return {
        projects,
        projectIds
    };    
};

export default useProjects;
