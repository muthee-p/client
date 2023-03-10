import React, { useEffect, useState } from "react";
import axios from "axios";
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';

function Emergency() {
  const [healthTopics, setHealthTopics] = useState(null);
  const [selectedTopicId, setSelectedTopicId] = useState(2);

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
   <div className=''>
      <h1 className='text-4xl mb-8 '>{selectedTopic.title}</h1>

      <div className= 'ml-[10%] bg-zinc-600 border rounded-xl border-zinc-500 p-4 w-[70%] '>
      <p className='text-sm font-mono'>In the case of an Emergency <DirectionsRunOutlinedIcon /></p>
        <h1 className='text-5xl text-amber-500 font-bold mt-4'>Call 911</h1>
      </div>


      <p className='mt-8 block'>{selectedTopic.paragraph_one}</p>

    <p className='mt-4'>{selectedTopic.paragraph_two}</p>
    <p className='mt-4'>{selectedTopic.paragraph_three}</p>
    <p className='mt-4'>{selectedTopic.paragraph_four}</p>
    <p className='mt-4'>{selectedTopic.paragraph_five}</p>
    <p className='mt-4'>{selectedTopic.paragraph_six}</p>
      
    </div>
  );
}

export default Emergency;
