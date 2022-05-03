import React from "react";

function Note(props) {
  const [showTitle, setShowTitle] = React.useState(true);
  const [showContent, setShowContent] = React.useState(true);

  function deleteNote(event) {
    props.deleteNote(props.id);
    event.preventDefault();
  }

  return (
    <div className="note">
      <h1
        onClick={() => {
          setShowTitle((prevState) => !prevState);
        }}
      >
        {props.title.length > 15 && showTitle
          ? props.title.substring(0, 15) + "..."
          : props.title}
      </h1>
      <p
        onClick={() => {
          setShowContent((prevState) => !prevState);
        }}
      >
        {props.content.length > 25 && showContent
          ? props.content.substring(0, 25) + "..."
          : props.content}
      </p>
      <button onClick={deleteNote}>Delete</button>
    </div>
  );
}

export default Note;
