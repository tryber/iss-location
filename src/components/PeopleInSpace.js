import React, { useContext, useEffect } from 'react';

import ISSContext from '../context/ISSContext';

const PeopleInSpace = () => {
  const { peopleInSpace, getPeopleInSpace } = useContext(ISSContext);

  useEffect(() => {
    getPeopleInSpace();

    const timer = setInterval(
      getPeopleInSpace,
      5000,
    );

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!peopleInSpace) return null;

  return (
    <div className="people-in-space">
      <span>{`Number of people in space now: ${peopleInSpace.length}`}</span>
      <ul className="people-list">
        {peopleInSpace.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleInSpace;
