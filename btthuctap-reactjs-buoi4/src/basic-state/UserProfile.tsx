import React from 'react';

interface UserProfileProps {
  name: string;
  age: number;
  bio: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, age, bio }) => {
  return (
    <div>
      <p>Hello, I am {name} and I am {age} years old.</p>
      <p>{bio}</p>
    </div>
  );
};

export default UserProfile;