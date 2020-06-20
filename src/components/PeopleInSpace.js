import React, { useContext } from 'react';

import ISSContext from '../context/ISSContext';
import useTimer from '../effects/useTimer';

const PeopleInSpace = () => {
  const { peopleInSpace, getPeopleInSpace } = useContext(ISSContext);

  useTimer(getPeopleInSpace, 5000);

  if (!peopleInSpace) return null;

  return (
    <div className="people-in-space">
      <span>{`Number of people in space now: ${peopleInSpace.length}`}</span>
      <ul className="people-list">
        {peopleInSpace.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleInSpace;
