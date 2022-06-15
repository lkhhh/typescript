type PageInfo={
    title:string;
};

type Page='home'|'about'|'contact';

const nav:Record<Page,PageInfo>={
    home:{title:'HOme'},
    about:{title:'About'},
    contact:{title:'Contect'},
}

type Product='cat'|'dog';
type NewProduct=Capitalize<Product>;//'Cat'|'Dog'