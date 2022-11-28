import {IMovie} from "./models/movie";
import axios from 'axios';
import { IOmdbResponse } from "./models/IOmdbResponse";


axios
  .get<IOmdbResponse>("http://www.omdbapi.com/?apikey=416ed51a&s=star")
  .then((response) => {
    console.log(response.data.Search);
    createHtml(response.data.Search);
  });

function createHtml(movies: IMovie[]): void {
    let container: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    let ml: number = movies.length;
    for(let i:number=0; i<ml; i++) {
      console.log(movies[i].Title);

        let title: HTMLHeadingElement = document.createElement("h3");
        title.innerHTML = movies[i].Title;

        container.appendChild(title);
    }
    document.body.appendChild(container);
}

