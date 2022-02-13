import "./App.css";
import { useEffect, useState } from "react";
import { fetchImages } from "./utils/fetchImages";
import { Image } from "./component/image";

function App() {
    const [page, setPage] = useState(1);
    const [imagesList, setImagesList] = useState([]);
    const nextPage = () => {
        setPage(page + 1);
    };

    useEffect(() => {
        fetchImages(page).then((images) =>
            setImagesList((prev) => [...prev, ...images])
        );
    }, [page]);

    return (
        <div className="App">
            {imagesList.map((image, index) => (
                <Image
                    key={image.id}
                    image={image}
                    isLast={index === imagesList.length - 1}
                    nextPage={nextPage}
                />
            ))}
        </div>
    );
}

export default App;
