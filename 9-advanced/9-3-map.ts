type Video={
    title:string;
    author:string;
};
[1,2].map(item=>item*item);
type Optional<T>={
    [P in keyof T]?:T[P]
}
type ReadOnly<T>={
    [P in keyof T]:T[P];
};

type VideoOptional=Optional<Video>;
const videoOp:VideoOptional={
    
}
type Nullable<T>={[P in keyof T]:T[P]|null};
const obj2:Nullable<Video>={
    title:'hi',
    author:null,
};

