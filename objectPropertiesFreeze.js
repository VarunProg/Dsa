class Person {
    constructor(id, name) {
        //Define property by simple assignment
        // this.id= id;
        // this.name = name;

        // Define properties one by one (but with writable/enumrable)
        // Object.defineProperty(this, "id",{value:id,writable:false,enumerable:true,configurable:true})
        // Object.defineProperty(this, "name",{value:name,writable:true,enumerable:true,configurable:true})

        // Define multiple properties in one go
        //if writable: false we can't update object
        Object.defineProperties(
            this,
            {
                "id": { value: id, writable: false, enumerable: true, configurable: true },
                "name": { value: name, writable: false, enumerable: true, configurable: true }
            }
        )
    }
}
var eich = new Person(1, "vk")
eich.id = 100; //if writable: false we can't update object
console.log(eich)
