import {gql} from "@apollo/client";

const Character__GetCharacters = gql`
    query getCharacters($name: String) {
        characters(filter: {name: $name}) {
            results {
                id
                name
                status
                gender
                image
            }
        }
    }
`;

export {
    Character__GetCharacters
}