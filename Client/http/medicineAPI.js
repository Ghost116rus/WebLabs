

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

export const createTag = async(name) => {

    return await (await fetch("http://localhost:3000/createNewTag", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: name})
        }
    )).json();
}

export const removeTag = async (id) => {
    return await (await fetch("http://localhost:3000/deleteTag", {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: id})
        }
    )).json();
}

export const removeMedicine = async (e) => {
    return await (await fetch("http://localhost:3000/deleteMedicine", {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: e.id,
            })
        }
    )).json();
}

export const addNewMedicine = async (e, description, count, isSpecial) => {

    return await (await fetch("http://localhost:3000/createNewMedicine", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: e.name,
                img: e.imageSrc,
                isSpecial: isSpecial,
                description: description,
                count: count,
                tags: e.tags
            })
        }
    )).json();
}

export const addToSpecial = async (e) => {

    return await (await fetch("http://localhost:3000/updateMedicine", {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: e.id,
                name: e.name,
                img: e.imageSrc,
                isSpecial: true,
                tags: e.tags
            })
        }
    )).json();
}
export const deleteFromSpecial = async (e) => {

    return await (await fetch("http://localhost:3000/updateMedicine", {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: e.id,
                name: e.name,
                img: e.imageSrc,
                isSpecial: false,
                tags: e.tags
            })
        }
    )).json();
}
