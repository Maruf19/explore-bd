import { useEffect, useState } from 'react';

const useEditor = email => {
    const [isEditor, setisEditor] = useState(false);
    const [isEditorLoading, setisEditorLoading] = useState(true)

    useEffect(() => {
        if(email) {
            fetch(`https://explore-bd-server.vercel.app/users/editor/${email}`)
            .then(res => res.json())
            .then(data => {
                setisEditor(data.isEditor);
                setisEditorLoading(false);
            })
        }
    },[email])
    return [isEditor, isEditorLoading]
};

export default useEditor;
