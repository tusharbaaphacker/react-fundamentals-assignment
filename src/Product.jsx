import { useState } from "react";

const [product , userproduct] = useState("")
const [price , userprice] = useState("")
const [description , userdescription] = useState("")
const [image , userimage] = useState("")
const [quantity , userquantity] = useState("")
const [category , usercategory] = useState("")


function Addproduct(){
    userproduct(product)
    userprice(price)
    userdescription(description)
    userimage(image)
    userquantity(quantity)
    usercategory(category)
}

export default Addproduct