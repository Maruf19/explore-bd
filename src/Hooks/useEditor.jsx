import { useEffect, useState } from "react";

const useEditor = (email) => {
  const [isEditor, setIsEditor] = useState(false);
  const [isEditorLoading, setIsEditorLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(
        `https://explore-bd-server-ahm-rubayed.vercel.app/users/editor/${email}`
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
