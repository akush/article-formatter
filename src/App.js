import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'react-quill/dist/quill.snow.css';
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
  const [metaTags, setMetaTags] = useState({});
  const [article, setArticle] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setArticle(`<div class="content">\n${content}</div>
<div class="metatags" style="visibility: hidden; height: 0 !important; width: 0 !important;">\n<pre>\n${JSON.stringify(metaTags, null, 2)}\n</pre>\n</div>
<div class="faqItems" style="visibility: hidden; height: 0 !important; width: 0 !important;">\n<pre>\n${JSON.stringify(faqItems, null, 2)}\n</pre>\n</div>`)
  }, [content, faqItems, metaTags]);

  const copyHandler = () => {
    console.log("Copied to clipboard");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className='w-full p-8 mx-auto'>
      <h1 style={{ textAlign: "center" }}>Create blog/page content</h1>
      <div className='flex flex-col md:flex-row gap-8 content-start'>
        <div className='w-full md:w-1/2'>
          <MetaTags onMetaTagsChange={setMetaTags} />
          <Editor onContentChange={setContent} />
          <FAQ onFaqChange={setFaqItems} />
        </div>
        <div className='w-full md:w-1/2'>
          <div className='flex justify-between items-center'>
            <h2>Output</h2>
            <CopyToClipboard text={article} onCopy={copyHandler}>
              <button className='bg-green-500 text-white rounded py-1 px-4 h-8'>{copied ? "Copied" : "Copy HTML"}</button>
            </CopyToClipboard>
          </div>
          <pre className='bg-gray-100 rounded p-4'>{article}</pre>
        </div>
      </div>
      {/* <hr className='my-8' />
      <div className='flex justify-center'>
        <h1>Preview</h1>
      </div> */}
    </div>
  );
}

export default App;
