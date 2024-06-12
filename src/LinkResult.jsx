// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import {CopyToClipboard} from 'react-copy-to-clipboard'

// const LinkResult = ({InputValue}) => {
    
//     const [ShortenLink, setShortenLink] = useState("")
//     console.log(ShortenLink);
//     const [Copied , setCopied] = useState(false)
//     const[Loading, setLoading] = useState(false)

//     const fetchData = async ()=>{
//       try{
//         setLoading(true)
//         const res = await axios.post(`https://smolurl.com/api/links?url=${InputValue}`)
//         setShortenLink(res.data)
//       } catch(err){

//       }finally{

//       }
//     }

//     useEffect(()=>{
//       if(InputValue.length){
//         fetchData()
//       }
//     }, [InputValue])

//     console.log(InputValue);


//   return (
//     <div className='result'>
//         {/* <p>{ShortenLink}</p> */}

//         <CopyToClipboard
//           text={ShortenLink}
//           onCopy={()=> setCopied(true)}
//         >
//         <button className={Copied ? "Copied" : ""}>Copy to clipboard</button>

//         </CopyToClipboard>

//     </div>
//   )
// }

// export default LinkResult

//2

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { CopyToClipboard } from 'react-copy-to-clipboard';

// const LinkResult = ({ InputValue }) => {
//     const [ShortenLink, setShortenLink] = useState('');
//     const [Copied, setCopied] = useState(false);
//     const [Loading, setLoading] = useState(false);

//     const fetchData = async () => {
//         try {
//             setLoading(true);
//             const res = await axios.post(
//                 'http://localhost:5000/api/url/shorten',
//                 { url: InputValue },
//                 {
//                     headers: {
//                         'Accept': 'application/json',
//                         'Content-Type': 'application/json',
//                     },
//                 }
//             );
//             setShortenLink(res.data.data.shortUrl);
//         } catch (err) {
//             console.error('Error shortening URL:', err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (InputValue.length) {
//             fetchData();
//         }
//     }, [InputValue]);

//     return (
//         <div className='result'>
//             {Loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 ShortenLink && (
//                     <div className='final'>
//                         <p>{ShortenLink}</p>
//                         <CopyToClipboard text={ShortenLink} onCopy={() => setCopied(true)}>
//                             <button className={Copied ? 'Copied' : ''}>Copy to clipboard</button>
//                         </CopyToClipboard>
//                     </div>
//                 )
//             )}
//         </div>
//     );
// };

// export default LinkResult;


//3

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const LinkResult = ({ InputValue }) => {
    const [ShortenLink, setShortenLink] = useState('');
    const [Copied, setCopied] = useState(false);
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState('');

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(''); // Clear previous errors
            const res = await axios.post(
                'https://url-shortener-api-wfjf.onrender.com/api/url/shorten',
                { longUrl: InputValue },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            );
            setShortenLink(res.data.shortUrl);
        } catch (err) {
            console.error('Error shortening URL:', err);
            setError(err.response ? err.response.data : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (InputValue.length) {
            fetchData();
        }
    }, [InputValue]);

    useEffect(() => {
      if (Copied) {
          const timer = setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
          return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
      }
  }, [Copied]);

    return (
        <div className='result'>
            {Loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {Error ? (
                        <p style={{ color: 'red' }}>Error: {Error}</p>
                    ) : (
                        ShortenLink && (
                            <div className='final'>
                                <p>{ShortenLink}</p>
                                <CopyToClipboard text={ShortenLink} onCopy={() => setCopied(true)}>
                                    <button className={Copied ? 'Copied' : ''}>Copy to clipboard</button>
                                </CopyToClipboard>
                            </div>
                        )
                    )}
                </>
            )}
        </div>
    );
};

export default LinkResult;



