import React, { useEffect, useState } from "react";
import axios from "axios";

function TradePolicies() {
  const [healthTopics, setHealthTopics] = useState(null);
  const [selectedTopicId, setSelectedTopicId] = useState(4);

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

      <p className='mt-[1rem] block'>{selectedTopic.paragraph_one}</p>

		<p className='mt-[1rem]'>{selectedTopic.paragraph_two}</p>
		<p className='mt-[1rem]'>{selectedTopic.paragraph_three}</p>
		<p className='mt-[1rem]'>{selectedTopic.paragraph_four}</p>
		<p className='mt-[1rem]'>{selectedTopic.paragraph_five}</p>
		<p className='mt-[1rem]'>{selectedTopic.paragraph_six}</p>
      
    </div>
  );
}

export default TradePolicies;
