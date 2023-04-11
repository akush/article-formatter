import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'react-quill/dist/quill.snow.css';
import './App.css';
import MetaTags from './components/MetaTags';
import Editor from './components/Editor';
import FAQ from './components/FAQ';

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


function App() {
  // const [contentType, setContentType] = useState('');
  const [content, setContent] = useState('');
  const [faqItems, setFaqItems] = useState([]);

  const [metaTags, setMetaTags] = useState({
    title: '',
    description: '',
    keywords: '',
    image: ''
  });

  const [article, setArticle] = useState("");

  useEffect(() => {
    setArticle(`<div class="content>\n${content}</div>
<div class="metatags">\n<pre>\n${JSON.stringify(metaTags, null, 2)}\n</pre>\n</div>
<div class="faqItems">\n<pre>\n${JSON.stringify(faqItems, null, 2)}\n</pre>\n</div>`)
  }, [content, faqItems, metaTags]);

  const handleMetaTagsChange = (newMetaTags) => {
    setMetaTags(newMetaTags);
  };

  // const handleChange = (e) => {
  //   const selectedType = e.target.value;
  //   setContentType(selectedType);
  // };

  return (
    <div className='w-full p-8 mx-auto'>
      <h1 style={{ textAlign: "center" }}>Create blog/page content</h1>

      <MetaTags onMetaTagsChange={handleMetaTagsChange} />

      <div className='flex flex-col md:flex-row gap-8 content-start'>
        <div className='w-full md:w-1/2'>
          {/* <div className="flex items-center my-4">
            <label htmlFor="content-type" className="w-1/2">
              Content Type:
            </label>
            <select
              id="content-type"
              className="border rounded w-full h-12 p-2"
              value={contentType}
              onChange={handleChange}
            >
              <option value="blog">Blog</option>
              <option value="page">Page</option>
            </select>
          </div> */}
          <Editor onContentChange={content => setContent(content)} />
          <FAQ onFaqChange={faqItems => setFaqItems(faqItems)} />
        </div>
        <div className='w-full md:w-1/2'>
          <div className='flex justify-between items-center'>
            <h2>Output</h2>

            <CopyToClipboard text={article}>
              <button className='bg-green-500 text-white rounded p-1 h-8'>Copy HTML</button>
            </CopyToClipboard>
          </div>
          <pre className='bg-gray-100 rounded p-4'>{article}</pre>

        </div>

      </div>



    </div>
  );
}

export default App;
