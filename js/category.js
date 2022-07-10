console.log(window.location.search);
const searchLocation = window.location.search;
const searchParam = document.getElementById("categoryTitle");

if (searchLocation !== "") {
  searchParam.textContent = window.location.search.replace("?search=", "");
} else {
  searchParam.textContent = "Choose category";
  const linkToIndex = document.createElement("a");
  linkToIndex.textContent = "Click here";
  linkToIndex.href = "../index.html";
  searchParam.append(linkToIndex);
}
