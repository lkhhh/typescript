{
    type Video={
        id:string;
        title:string;
        url:string;
        data:string;
    }
    type VideoMetadata=Pick<Video,'url'|'data'>;//없는 키도 전달이 가능함

    function getVideo(id:string):Video{
        return{
            id,
            title:'videon',
            url:'https://..',
            data:'byte-data..',
        }
    }
    function getVideoMetadata(id:string):VideoMetadata{
        return{
            id:id,
            title:'title',
        };
    }
}