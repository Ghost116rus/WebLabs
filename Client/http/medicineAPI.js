

export const getMedicines = async () => {
    return $.getJSON("http://localhost:3000/getAll");
}

export const getTags = async () => {
    return $.getJSON("http://localhost:3000/tags");
}

export const getMedicineById = async(id) => {
    const res = await fetch("http://localhost:3000/getById?"+
        new URLSearchParams({ id: id }).toString())

    return await res.json();
}