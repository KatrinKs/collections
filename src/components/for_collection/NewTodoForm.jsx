const NewCollectionForm = ({ value, updateText, handleAction }) => {
    return (
      <label>
        <input
          placeholer='new collection'
          value={value}
          onChange={(e) => updateText(e.target.value)}
        />
        <button onClick={handleAction}>Add new one</button>
      </label>
    );
  };
  
  export default NewCollectionForm;