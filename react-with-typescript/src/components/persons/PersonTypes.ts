export interface PersonListProps{ 
    names:{
        name:string,
        email:string,
        cellphone?:string
    }[]
}

export interface PersonDetailsProps{    
    name?:string,
    email?:string,
    cellphone?:string   
}