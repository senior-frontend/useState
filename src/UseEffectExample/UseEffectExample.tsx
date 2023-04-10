import { useState, useEffect } from 'react';

import { RESOURCE_TYPE, resourceTypeColorMap } from './types';

const UseEffectExample = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [resourceType, setResourceType] = useState<RESOURCE_TYPE>(RESOURCE_TYPE.POSTS);
  const [fetchedItemsType, setFetchedItemsType] = useState<RESOURCE_TYPE>(RESOURCE_TYPE.POSTS);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('a');
  });

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    console.log('handleResize в компоненте UseEffectExample');
  };

  useEffect(() => {
    // let active = true;

    const fetchResource = async () => {
      // setTimeout(async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
      const fetchedItems = await response.json();
      // if (active) {
      setItems(fetchedItems);
      setFetchedItemsType(resourceType);
      // }
      // }, Math.round(Math.random() * 6000));
    };

    fetchResource();
    // return () => {
    //   active = false;
    // };
  }, [resourceType]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // };
  }, []);

  return (
    <>
      <div>
        <button
          style={{ color: resourceTypeColorMap.users }}
          onClick={() => setResourceType(RESOURCE_TYPE.USERS)}>
          Users
        </button>
        <button style={{ color: 'green' }} onClick={() => setResourceType(RESOURCE_TYPE.POSTS)}>
          Posts
        </button>
        <button style={{ color: 'blue' }} onClick={() => setResourceType(RESOURCE_TYPE.COMMENTS)}>
          Comments
        </button>
        <div>{windowWidth} width in px</div>
      </div>
      <div style={{ color: resourceTypeColorMap[fetchedItemsType] }}>
        {fetchedItemsType}
        {items.map((item: any) => {
          return <p key={item.id}>{JSON.stringify(item.body || item.name)}</p>;
        })}
      </div>
    </>
  );
};

export default UseEffectExample;
