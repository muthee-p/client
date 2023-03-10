import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

function Insurance() {
  const [healthTopics, setHealthTopics] = useState(null);
  const [selectedTopicId, setSelectedTopicId] = useState(5);

  useEffect(() => {
    axios.get('http://localhost:3001/health').then((response) =>{
     
      setHealthTopics(response.data);
    });
  }, []);

  if (!healthTopics) {
    return <div>Loading...</div>;
  }

  const selectedTopic = healthTopics.find(topic => topic.id === selectedTopicId);

  return (
    <div>
      <h1 className='text-4xl mb-8'>{selectedTopic.title}</h1>

      <div className= 'text-sm ml-[10%] bg-zinc-600 border rounded-xl border-zinc-500 p-4 w-[70%] mb-16'>
      <p className=' text-amber-500 font-mono mb-2 underline hover:no-underline'>
      <Link to='/insuranceform'> Insurance Application form
      </Link></p>
      <h4 className=' mb-2'>Insurance coverage types</h4>
      <li className='list-disc'><span>(HMO) -</span>health Maintainance Organization you are given a list of doctors within a network</li>
      <li className='list-disc'><span>(PPO) -</span>Preferd Provider Organization  you have a list of pre-approved providers</li>
      <li className='list-disc'><span>(HSA) -</span>A Health Savings Account pay for qualified medical expenses, there’s also no tax on withdrawals</li>
        
      </div>

      <p className='mt-4'>{selectedTopic.paragraph_one}</p>
      <p className='mt-4'>{selectedTopic.paragraph_two}</p>
      <p className='mt-4'>{selectedTopic.paragraph_three}</p>
      <p className='mt-4'>{selectedTopic.paragraph_four}</p>
      <p className='mt-4'>{selectedTopic.paragraph_five}</p>
      <p className='mt-4'>{selectedTopic.paragraph_six}</p>


   

      
    </div>
  );
}

export default Insurance;
