class ConstructorPattern {
    constructor(name, designation,company) {
        this._name = name;
        this._designation = designation;
        this._company = company;

        this.getDetails = () => {
            return 'This is an example of Constructor Pattern' ;
        }
    }
}

const AmazonDetails = new ConstructorPattern('Jeff Bezos','Chief Executive Officer','Amazon.com, Inc');

console.log(AmazonDetails.getDetails());