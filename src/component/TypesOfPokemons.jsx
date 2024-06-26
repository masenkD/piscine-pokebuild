import { useEffect, useState } from "react";

const TypesOfPokemons = () => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/types")
    .then((response) => {
      return response.json(); 
    //   traduction du JSON en Javascript
    })
    .then((data) => {
        return setTypes(data);
    });
}, []);

    return (
        <section>
            <h1>La liste de tous les types de pokémons</h1>
            {types.map((type) => {
                return (
                    <article>
                        <h2>{type.name}</h2>
                    </article>
                );
            })}
        </section>
    );
};
export default TypesOfPokemons;