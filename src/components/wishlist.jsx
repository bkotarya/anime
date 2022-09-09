import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import AnimesList from "./AnimesList";
const Wishlist = () => {
    let { data: animes, pending } = useFetch("https://api.jikan.moe/v4/anime");
const [wish,setWish]=useState(null)
    useEffect(() => {
        let w = localStorage.getItem("wish");
        w = JSON.parse(w);
setWish(w)
    }, [])
    return (
        <div>
            {pending && <div id="loader" class="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
             </div>}
            {animes && <AnimesList animes={animes.filter((anime)=>{return wish.includes(anime.mal_id)})
} />}
        </div>
    );
}
export default Wishlist;
// creation of react application and running  and data flow[]