import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
function CreateArea(props){
    const emptyNote = {
        title: "",
        content: ""
    }
    const [note, setNote] = useState(emptyNote);

    function handleChange(e){
        const {name, value} = e.target;
        setNote(prevObj => {
            return {
                ...prevObj,
                [name]: value
            };
        });
    }


    return (
        <div>
            <form onSubmit={(e) => {
                props.submitNote(e, note);
                setNote(emptyNote);
                }}>
                <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />
                <textarea name="content" plceholder="Take a note..." rows="3" value={note.content} onChange={handleChange} />
                <button type="submit"><AddIcon/></button>
            </form>
        </div>
    )
}


export default CreateArea;