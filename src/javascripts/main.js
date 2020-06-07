import "bootstrap";
import "../styles/styles.scss";
import card from "./components/card/card";
import diary from "./components/diaryEntry";

const init = () => {
  card.cityCard();
  $("#card-container").on("click", ".submit", (e) => {
    const myTitle = $(e.target).parent().parent().find(".card-title");
    const myText = $(e.target).parent().find(".submit-text");
    diary.buildDiaryEntry(myTitle.text(), myText.val());
    myText.val('');
  });
};

init();
