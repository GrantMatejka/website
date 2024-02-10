import { useEffect, useState } from 'react';

export default function JobViewer() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const populateJobs = async () => {
      const whoIsHiringBot = await fetch(
        'https://hacker-news.firebaseio.com/v0/user/whoishiring.json',
        { method: 'GET' }
      ).catch((err) => console.error(err));
      const latestItemId = (await whoIsHiringBot.json()).submitted[0];

      const latestItem = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${latestItemId}.json`,
        { method: 'GET' }
      ).catch((err) => console.error(err));

      // TODO: Handle async data better
      console.log(await latestItem.json());
    };

    populateJobs();
  }, []);

  return <p>WIP</p>;
}
