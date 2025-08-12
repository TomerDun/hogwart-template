import { useParams } from "react-router-dom"

export default function DescriptionPage({getCategoryData}) {

    const {category, entity} = useParams();

    const data = getCategoryData(category).filter(ent => ent.name === entity)[0];
    console.log(data);
    

    console.log(category);
    console.log(entity);
    
    return (
        <div>
            <h1>Here is your description:</h1>
            <p style={{color: 'white'}}>
                {data.description}
            </p>
        </div>
    )
}