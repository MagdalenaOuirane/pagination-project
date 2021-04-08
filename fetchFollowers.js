const URL = "https://api.github.com/users/john-smilga/followers?per_page=100";

const fetchFollowers = async () => {
  try {
    const data = await fetch(URL);
    console.log("Data:", data);

    const response = await data.json();
    console.log("Response:", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default fetchFollowers;
