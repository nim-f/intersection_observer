export const fetchImages = async (page) => {
    const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=5`
    );

    return await response.json();
};
