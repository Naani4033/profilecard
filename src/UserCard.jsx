import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
  return (
    <div className="card-container">
      <span className="pro">ONLINE</span>
      <img src={props.profile} className="images" alt="user" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.descr}</p>

      <div className="button">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>

      <div className="skills">
        <h5>Skills</h5>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  profile: PropTypes.string.isRequired,
};

const userData = [
  {
    name: 'Arul Kumaran',
    city: 'Erode',
    descr: 'Full Stack Developer',
    skills: ['HTML', 'CSS', 'JS', 'C', 'JAVA', 'MYSQL'],
    profile: '/public/images/generic-user-icon-9.jpg',  },
  {
    name: 'Divakar',
    city: 'Erode',
    descr: 'Back End Developer',
    skills: ['JS', 'C', 'JAVA', 'MYSQL'],
    profile: '/public/images/generic-user-icon-9.jpg',
  },
  {
    name: 'Naani',
    city: 'Erode',
    descr: 'Front End Developer',
    skills: ['HTML', 'CSS', 'JS', 'PYTHON', 'MYSQL', 'REACT'],
    profile: '/public/images/generic-user-icon-9.jpg',
  },
];

export const UserCard = () => {
  if (!userData || userData.length === 0) {
    return <p>No users available</p>;
  }
  return (
    <>
      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          descr={user.descr}
          profile={user.profile}
          skills={user.skills}
        />
      ))}
    </>
  );
};
