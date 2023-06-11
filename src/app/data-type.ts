export interface SignUp{
    name:'string',
    password:'string',
    email:'string'
}

export interface login{
    email:string,
    password:string
}

export interface product{
    name:string,
    price:number,
    category:string,
    color:string,
    image:string,
    description:string,
    id:number,
    quantity:undefined|number
}

export interface cart{

    name:string,
    price:number,
    category:string,
    color:string,
    image:string,
    description:string,
    id:number|undefined,
    quantity:undefined|number,
    productId:number,
    userId:number

}

export interface priceSummary{
    price:number,
    discount:number,
    tax:number,
    delivery:number,
    total:number
}


export interface login{
    name:string;
    email:string;
    password:string
}


export interface product{
    name:string,
    price:number,
    category:string,
    color:string,
    description:string,
    image:string,
    title:string
}