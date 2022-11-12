import React, { useState } from 'react'
import StatusBar from './StatusBar';

const UploadImage = () => {

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg']

  const handleEvent = (e) => {
    let selected = e.target.files[0];

    //Check if the user selected anything
    //Also check the type of file uploaded
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an Image file...png/jpeg');
    }
  }

  return (
    <>
      <form>
        <label>
        <input type="file" onChange={handleEvent} />
        <span>+</span>
        </label>
        <div className="output">
          {error && <div className='error'>{error}</div>}
          {file && <div> {file.name} </div>}
          {file && <StatusBar file={file} setFile={setFile} />}
        </div>
      </form>
    </>
  )
}

export default UploadImage