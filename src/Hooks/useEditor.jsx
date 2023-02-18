import { useEffect, useState } from "react";

const useEditor = (email) => {
  const [isEditor, setIsEditor] = useState(false);
  const [isEditorLoading, setIsEditorLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(
        `http://localhost:5000/users/editor/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setIsEditor(data.isEditor);
          setIsEditorLoading(false);
        });
    }
  }, [email]);
  return [isEditor, isEditorLoading];
};

export default useEditor;
