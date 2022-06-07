type Video={
    title:string;
    author:string;
};
[1,2].map(item=>item*item);
type Optional<T>={
    [P in keyof T]?:T[P]
}
type VideoOptional=Optional<Video>;
const videoOp:VideoOptional={
    
}

