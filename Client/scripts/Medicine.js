export class Medicine{
    id;
    name;
    imageSrc;
    tags = [];
    constructor(id, name, imageSrc, tags){
        this.id = id;
        this.name = name;
        this.imageSrc = imageSrc;
        this.tags = tags;
    }
}