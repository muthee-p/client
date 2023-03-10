import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';


function Ecommerce() {
  const [healthTopics, setHealthTopics] = useState(null);
  const [selectedTopicId, setSelectedTopicId] = useState(3);

  useEffect(() => {
    axios.get('http://localhost:3001/trades').then((response) =>{
      
      setHealthTopics(response.data);
    });
  }, []);

  if (!healthTopics) {
    return <div>Loading...</div>;
  }

  const selectedTopic = healthTopics.find(topic => topic.id === selectedTopicId);

  return (
    <div>
      <h1 className='text-4xl'>{selectedTopic.title}</h1>

       <div className= 'text-sm ml-[10%] bg-zinc-600 border rounded-xl border-zinc-500 p-4 w-[70%] mt-8 mb-16'>
      <p className=' text-amber-500 font-mono mb-2 underline hover:no-underline'>
      <Link to='/insuranceform'> Register your business
      </Link></p>
      <h4 className=' mb-2'>Insurance coverage types</h4>
      <li className='list-disc'><span>(SME) -</span>Small to medium business</li>
      <li className='list-disc'><span>(Ltd) -</span>Limited</li>
      <li className='list-disc'><span>(BRE) -</span>The Business Referral Exchange</li>
        
      </div>

      <p className='mt-[1rem] block'>{selectedTopic.paragraph_one}</p>

		<p className='mt-[1rem]'>{selectedTopic.paragraph_two}</p>
		<p className='mt-[1rem]'>{selectedTopic.paragraph_three}</p>
		<p className='mt-[1rem]'>{selectedTopic.paragraph_four}</p>
		<p className='mt-[1rem]'>{selectedTopic.paragraph_five}</p>
		<p className='mt-[1rem]'>{selectedTopic.paragraph_six}</p>
      
    </div>
  );
}

export default Ecommerce;
