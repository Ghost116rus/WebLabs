

export const getMedicines = async () => {
    return $.getJSON("http://localhost:3000/getMedicine");
}