/* eslint-disable no-plusplus */
import print from "../helpers/utils";
import "./card.scss";
import travelData from "../helpers/data/travelData";

const cityCard = () => {
  let domstring = "";
  const cities = travelData.getCities();
  cities.forEach((e) => {
    domstring += `<div class="card">
    <img class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${e.title}</h5>
      <img src= "${e.imageUrl}">
      <p class="card-text">${e.description}</p>
        <div class="input-group">
        <button type="button" class="btn btn-info">submit</button>
          <textarea name="" id="" class="submit-text" cols="25" rows="8"></textarea>
        </div>
          </div>
        </div>`;
  });


  print.printToDom("card-container", domstring);
};
export default { cityCard };
