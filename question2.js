fetch(`https://api.punkapi.com/v2/beers?abv_gt=5&abv_lt=11&brewed_after=12-2015`)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    // Present the image, title, alcoholic percentage and ingredients in a styled layout.
    data.forEach((beer, index) => {
      const beerName = beer["name"];
      const beerImage = beer["image_url"];
      const abv = beer["abv"];
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

      const list = document.querySelector(".beers-list");
      list.insertAdjacentHTML('beforeend',
        `<div class="beer-container">
          <img src="${beerImage}" class="beer-image"/>
          <div class="beer-description text-center">
            <div class="beer-name">${beerName}</div>
            <div class="beer-abv">${abv} ABV</div>
            <div class="beer-ingredients">
                <div class="beer-${index}-malts">
                  <h3>Malts</h3>
                </div>
                <div class="beer-${index}-hops">
                  <h3>Hops</h3>
                </div>
                <div class="yeast">
                  <h3>Yeast</h3>
                  <p>${yeast}</p>
                </div>
            </div>
          </div>
         </div>`
        );
      maltsNames();
      hopsNames();
    });

});
