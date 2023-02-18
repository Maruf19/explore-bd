import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useEditor from '../../Hooks/useEditor';
import Spinner from '../../Spinner/Spinner'

const EditorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isEditor, isEditorLoading] = useEditor(user?.email);
    console.log(isEditor, isEditorLoading)
    const location = useLocation();

    if (loading || isEditorLoading) {
        return <Spinner></Spinner>
    }

    if (user && isEditor) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default EditorRoute;