// components/Editor.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/parser-html';

const Editor = ({ onContentChange }) => {
  const [content, setContent] = useState('');

  // const contentModules = {
  //   toolbar: [
  //     ['bold', 'italic', 'underline', 'strike'],
  //     ['blockquote', 'code-block'],
  //     [{ 'header': 1 }, { 'header': 2 }],
  //     [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  //     [{ 'script': 'sub' }, { 'script': 'super' }],
  //     [{ 'size': ['small', false, 'large', 'huge'] }],
  //     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  //     [{ 'color': [] }, { 'background': [] }],
  //     [{ 'align': [] }],
  //     ['clean']
  //   ],
  // };

  // const formats = [
  //   'bold', 'italic', 'underline', 'strike',
  //   'blockquote', 'code-block',
  //   'header', 'list', 'script',
  //   'indent', 'direction', 'size',
  //   'header', 'color', 'background',
  //   'font', 'align',
  //   'clean'
  // ];

  const prettifyHtml = (html) => {
    const formattedHtml = prettier.format(html, {
      parser: 'html',
      plugins: [parserHtml],
      printWidth: 80,
    });
    return formattedHtml;
  };

  const handleChange = (value) => {
    setContent(value);
    onContentChange?.(prettifyHtml(value));
  };

  return (
    <div className="w-full">
      <label>Content</label>
      <ReactQuill
        // modules={contentModules}
        // formats={formats}
        className="w-full"
        theme="snow"
        value={content}
        onChange={handleChange}
      />
      {/* <div className="mt-4">
        <pre className="bg-gray-100 p-4 rounded">
          {prettifyHtml(content)}
        </pre>
      </div> */}
    </div>
  );
};

export default Editor;
