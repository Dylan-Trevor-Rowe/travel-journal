import utils from './helpers/utils';

const buildDiaryEntry = (locationName, txt) => {
  let domstring = '';
  domstring += `<div class= "input-Div">
<h1>${locationName}:</h1>
<h3>${txt}<h3>
</div>`;
  utils.printToDom('text', domstring);
};


export default { buildDiaryEntry };
