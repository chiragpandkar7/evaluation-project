import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { Issue } from '../store/types';
import { DataGrid, GridColDef } from '@mui/x-data-grid'; // Import DataGrid from MUI

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'status', headerName: 'Status', width: 150 },
];

const IssueTable: React.FC = () => {
    const selectedProjectId = useSelector((state: RootState) => state.project.selectedProjectId);

    const issues = useSelector((state: RootState) => state.issue.issues[selectedProjectId] || []);

    const rows = issues.map((issue: Issue) => ({
        id: issue.displayId,
        title: issue.title,
        status: issue.status,
    }));

    return (
        <div style={{ height: 400, width: '100%', flexGrow: 1 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection
                autoHeight />
        </div>
    );
};

export default IssueTable;
