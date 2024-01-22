const mongoose = require ('mongoose')


const billSchema = mongoose.Schema(
  {
  customerName:{type:String, required: true},
customerPhoneNumber:{type:String, required: true},
  totalAmount:{type:String, required: true},
  //calculate tax => 2% => (2*totalAmount)/100= 0.9
  tax:{type:String, required: true},
  subTotal:{type:String, required: true},
  paymentMode:{type:String, required: true},
  cartItems:{type:Array, required: true},
},

{timestamps: true}

)

const billModel = mongoose.model("bills",billSchema)

module.exports = billModel