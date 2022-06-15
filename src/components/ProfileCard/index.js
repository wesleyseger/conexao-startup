import React from 'react';
import './styles.css';

import profileImg from '../../assets/profile.png';

export default function ProfileCard({ profile }) {
  return (
    <div className="profile-card">
      <img src={profileImg} alt="Profile" />
      <h5>{profile.name}, {profile.age}</h5>
      <small>@{profile.username}</small>
      <b>{profile.city}</b>
    </div>
  )
}