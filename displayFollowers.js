const container = document.querySelector(".container");

const display = (followers) => {
  const newFollowers = followers
    .map((person) => {
      console.log("Person:", person);

      const { avatar_url: image, login: name, html_url: link } = person;

      return `<article class="card">
 <img src="${image}" alt="${name}"/>
 <h4>"${name}"</h4>
 <a href="${link}" class="btn">View profile</a>
 </article>`;
    })
    .join("");

  console.log(newFollowers);

  container.innerHTML = newFollowers;
  return container;
};

export default display;
