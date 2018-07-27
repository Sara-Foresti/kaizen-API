fetch(`https://api.punkapi.com/v2/beers?abv_gt=5&abv_lt=11&brewed_after=12-2015`)
  .then(response => response.json())
  .then((data) => {
    // console.log(data);
    // Present the image, title, alcoholic percentage and ingredients in a styled layout.
    data.forEach((beer, index) => {
      const beerName = beer["name"];
      // console.log(beerName);
      const beerImage = beer["image_url"];
      // console.log(beerImage);
      const abv = beer["abv"];
      // console.log(abv);
      const ingredients = beer["ingredients"];

      const malts = ingredients["malt"];
      const maltsNames = () => {
        malts.forEach((malt) => {
          const maltName = malt["name"];
          const className = `beer-${index}-malts`;
          const maltsDiv = document.querySelector(`.${className}`);
          maltsDiv.insertAdjacentHTML('beforeend', `<p>${maltName}</p>`);
        });
      };

      const hops = ingredients["hops"];
      const hopsNames = () => {
        hops.forEach((hop) => {
          const hopName = hop["name"];
          const hopClass = `beer-${index}-hops`;
          const hopDiv = document.querySelector(`.${hopClass}`);
          hopDiv.insertAdjacentHTML('beforeend', `<p>${hopName}</p>`);
        });
      };

      const yeast = ingredients["yeast"];
      // console.log(yeast);

      const list = document.querySelector(".beers-list");
      list.insertAdjacentHTML('beforeend',
        `<div class="beer-container">
          <img src="${beerImage}" />
          <div class="beer-description">
            <div class="beer-name">${beerName}</div>
            <div class="beer-abv">${abv}</div>
            <div class="beer-ingredients">
              <div class="malts-hops">
                <h3>Malts</h3>
                <div class="beer-${index}-malts"></div>
                <h3>Hops</h3>
                <div class="beer-${index}-hops"></div>
              </div>
              <h3>Yeast</h3>
              <div class="yeast">${yeast}</div>
            </div>
          </div>
         </div>`
        );
      maltsNames();
      hopsNames();
    });

});
