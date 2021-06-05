class RoomData {
    name: string;

    description: string;

    price: string;

    image: string[];

    constructor({ name, description, price, image }: RoomData) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }
}

export default RoomData;
