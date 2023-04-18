import { useState } from 'react';
import sanityClient, { createClient } from "@sanity/client"

const client = createClient({
    projectId: 'fzlc029d',
    dataset: 'production',
    apiVersion: '2023-04-17', // use current date (YYYY-MM-DD) to target the latest API version
    useCdn: false,
    withCredentials:true,
  });

const Home = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
           const data=await client.create({
                _type: 'post',
                title,
                body,
              });
              console.log(data);
        } catch (error) {
            console.log(error)
        }
    
        setTitle('');
        setBody('');
      };

  return (
    <div><section className="flex flex-col justify-center  h-screen">
    <form className='flex flex-col items-center justify-evenly form' onSubmit={handleSubmit}>
      <label className='label flex flex-col justify-center'>Name:
        <input className='text rounded p-2'
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      {/* <label className='label flex flex-col justify-center'>Category:
        <input className='text rounded p-2'
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label> */}
      <label className='label flex flex-col justify-center'>Description:
        <textarea className='text rounded p-2'
        rows={6}
        cols={22}
          type="text" 
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </label>
      {/* <label className='label flex flex-col justify-center bg-black text-white px-4 py-3 cursor-pointer rounded'>Chose Image
        <input className='d-none'
          type="file" 
          onChange={(e) => setImage(e.target.files[0])}
        />
      </label> */}
      <input type="submit" className='bg-black text-white px-4 py-3 cursor-pointer rounded'/>
    </form>
  </section></div>
  )
}

export default Home