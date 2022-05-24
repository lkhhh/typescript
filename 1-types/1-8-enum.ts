{
    /**
     * Enum
     */
    //JavaScript
    const MAX_NUM=6;
    const MAX_STUDENTS_PER_CLASS=10;
    const MONDAY =0;
    const TUESDAY=1;
    const WEDNESDAY=2;
    const DAYS_ENUM=Object.freeze({"MONDAY":0,"TUESDAY":1,"WEDNESDAY":2});
    const dayOfToday = DAYS_ENUM.MONDAY;


    //TypeScript
    enum Days{
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }
    console.log(Days.Monday); //아무값이 없는경우 index 반환 0
    let day:Days=Days.Saturday;
    day=Days.Tuesday;
    day=10 //아무런 에러가 없음 enum에선 타입이 정확하게 보장되지않음 

    type DaysOfWeek='Monday'|'Tuesday'|'Wednesday'; //이런식으로 사용이 좋ㅇ므
    
}