import React, { useEffect, useState } from "react";
import axios from "axios";

function Mental() {
  const [healthTopics, setHealthTopics] = useState(null);
  const [selectedTopicId, setSelectedTopicId] = useState(1);

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
      <p>If you or someone you know is struggling with mental health issues, reach out:</p>
      <p className= 'mt-2 font-mono'>Direct Line- <span className='text-amber-500'>111445</span></p>
      <p className='mt-1 text-amber-500 font-mono mb-2 underline hover:no-underline'>
      <a href='https://www.mentalhealth.gov/'> https://www.mentalhealth.gov/
      </a></p>
      
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

export default Mental;
