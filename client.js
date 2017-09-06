//parent
class candy {
    constructor(flavor) {
        this.flavor = flavor;
    }
}

//child
class seanSpicersGumWad extends candy {
    constructor (flavor, volume) {
        super(flavor);
        this.volume = volume;
        this.isSticky = false;
    }
    chew() {
        this.isSticky = true;
        return 'it\'s sticky now';
    }
}

let cherryGumWad = new seanSpicersGumWad('cherry', 2);

console.log('cherryGumWad chew ');
console.log(cherryGumWad.chew());

//grandchild
class melissaMcCarthysGumWad extends seanSpicersGumWad {
    constructor(flavor, volume) {
        super(flavor, volume);
        this.size = 'really big'
    }

    stickOnDesk() {
        return 'it\'s on the desk now';
    }
}

let mintGumWad = new melissaMcCarthysGumWad('mint', 3);
console.log('stickOnDesk', mintGumWad.stickOnDesk());