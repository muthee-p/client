import React, { useEffect, useState } from "react";
import axios from "axios";

function Facilities() {
  const [healthTopics, setHealthTopics] = useState(null);
  const [selectedTopicId, setSelectedTopicId] = useState(3);

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

      <p className='mt-6'>{selectedTopic.paragraph_one}</p>

    <p className='mt-4'>{selectedTopic.paragraph_two}</p>
    <p className='mt-4'>{selectedTopic.paragraph_three}</p>
    <p className='mt-4'>{selectedTopic.paragraph_four}</p>
    <p className='mt-4'>{selectedTopic.paragraph_five}</p>
    <p className='mt-4'>{selectedTopic.paragraph_six}</p>
      
    </div>
  );
}

export default Facilities;
