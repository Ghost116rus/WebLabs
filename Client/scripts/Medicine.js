export class Medicine{
    id;
    description;
    imageSrc;
    tags = [];
    constructor(id, description, imageSrc, tags){
        this.id = id;
        this.description = description;
        this.imageSrc = imageSrc;
        this.tags = tags;
    }

    static currentId = -1;
}