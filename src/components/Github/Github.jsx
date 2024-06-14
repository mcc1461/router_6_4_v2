import React, { useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

function Github() {
  const { userid } = useParams();
  const data = useLoaderData();
  const [username, setUsername] = useState(userid || '');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/github/${username}`);
  };

  const userNotFound = userid && !data;

  return (
    <div className="p-4 text-center App">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="p-2 border rounded-lg"
        />
        <button type="submit" className="p-2 ml-2 text-white bg-blue-500 rounded-lg">
          Get User Info
        </button>
      </form>

      {userid && data && (
        <div>
          <div className="py-5 text-3xl text-center text-black bg-orange-500 rounded-lg">
            User: {data.login}
          </div>
          <div className="p-4 m-4 text-3xl text-center text-white bg-gray-600 rounded-lg">
            GitHub followers: {data.followers}
            <img src={data.avatar_url} width={300} alt="Avatar" />
          </div>
        </div>
      )}

      {userNotFound && (
        <div className="text-red-500">
          <NotFound />
        </div>
      )}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async ({ params }) => {
  if (!params.userid) return null; // No user ID, return null

  try {
    const response = await fetch(`https://api.github.com/users/${params.userid}`);
    console.log('Response Status:', response.status);
    if (!response.ok) {
      return null; // Return null to indicate user not found
    }
    const data = await response.json();
    console.log('Fetched Data:', data);
    return data;
  } catch (error) {
    console.error(error);
    return null; // Return null for any other error
  }
};
