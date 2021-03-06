const Product = require("./model/product")

class SampleDb{
    constructor() {
        this.products = [
            {
                coverImg:'./assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'Samle TEXT11',
                headingText1: 'Samle TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT11',
                heading2: 'Samle TEXT12',
                headingText2: 'Samle TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT12',
                heading3: 'Samle TEXT13',
                headingText3: 'Samle TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT13'
              },
              {
                coverImg:'./assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'Samle TEXT21',
                headingText1: 'Samle TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT21',
                heading2: 'Samle TEXT22',
                headingText2: 'Samle TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT22',
                heading3: 'Samle TEXT23',
                headingText3: 'Samle TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT23'
              },
              {
                coverImg:'./assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: '',
                heading1: 'Samle TEXT31',
                headingText1: 'Samle TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT31',
                heading2: 'Samle TEXT32',
                headingText2: 'Samle TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT32',
                heading3: 'Samle TEXT33',
                headingText3: 'Samle TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT33'
              },
              {
                coverImg:'./assets/img/phone-cover.jpg',
                name: 'Phone Special',
                price: 1000,
                description: 'too Special!!!',
                heading1: 'Samle TEXT41',
                headingText1: 'Samle TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT41',
                heading2: 'Samle TEXT42',
                headingText2: 'Samle TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT42',
                heading3: 'Samle TEXT43',
                headingText3: 'Samle TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT43'
              }
        ]
    }

    pushProductToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

  async initDb() {
    await this.cleanDB()
    this.pushProductToDb()
  }
  
  async cleanDB() {
    await Product.deleteMany({})
  }
 
}

module.exports = SampleDb