import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        className="createImg"
        src="https://www.pngfind.com/pngs/m/240-2405208_transparent-nature-background-png-png-download.png"
        alt=""
      />
      <form className="createForm">
        <div className="createFormGroup">
          <label htmlFor="fileInput">
            <i className="createIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="createInput"
            autoFocus={true}
          />
        </div>
        <div className="createFormGroup">
          <textarea
            placeholder="tell your story..."
            type="text"
            className="createInput createText"
          ></textarea>
        </div>
        <button className="createSubmit">Publish</button>
      </form>
    </div>
  );
}
