import { useRef, useEffect, useState } from "react";
import { useObserver } from "../hooks/useObserver";
import "./image.css";
export const Image = ({ image, isLast, nextPage }) => {
    const imageRef = useRef();
    const [imageUrl, setImageUrl] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const entry = useObserver(imageRef, { rootMargin: "600px" });
    const animatedEntry = useObserver(imageRef, { rootMargin: "0px" });

    useEffect(() => {
        if (!entry) return;
        if (isLast && entry.isIntersecting) {
            nextPage();
        }
        if (entry.isIntersecting) {
            setImageUrl(entry.target.dataset.src);
        }
    }, [entry, isLast]);

    useEffect(() => {
        if (animatedEntry?.isIntersecting) {
            setIsVisible(true);
        }
    }, [animatedEntry]);
    const imageClass = `image ${isVisible ? "show" : ""}`;
    return (
        <div style={{ minHeight: 300 }}>
            <img
                className={imageClass}
                ref={imageRef}
                src={imageUrl}
                data-src={`${image.download_url}.jpg`}
                alt={image.author}
                width="500"
            />
        </div>
    );
};
