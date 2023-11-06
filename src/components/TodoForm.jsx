import React from "react";
import "../styles/TodoForm.css";

function todoForm({
  title,
  contents,
  handleTitle,
  handleContents,
  handleSubmit,
}) {
  return (
    <form className="form-container">
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="ex) 리액트 공부하기"
            value={title}
            onChange={handleTitle}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">내용</label>
          <input
            type="text"
            id="contents"
            name="contents"
            placeholder="ex) 리액트 기초를 공부해봅시다!"
            value={contents}
            onChange={handleContents}
            required
          />
        </div>
      </div>
      <button type="submit" className="submit-btn" onClick={handleSubmit}>
        추가하기
      </button>
    </form>
  );
}

export default todoForm;
