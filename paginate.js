const paginate = (followers) => {
  const itemsPerPage = 9;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage); //  11.111 pages with math.ceil which is rounding up its gonna be 12 pages

  console.log(numberOfPages);

  const followersArr = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;

    return followers.slice(start, start + itemsPerPage);
  });
  return followersArr;
};

export default paginate;
