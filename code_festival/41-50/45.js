const d = new Date();

let year = d.getTime();
year = Math.floor(year / (1000 * 3600 * 24 * 365)) + 1970;

/*
천분의 1초 단위(ms)로 반환 
1년을 ms로 표현하려면
    1시간은 60분 하루는 24시간 1년은 365일이라서;;
1000 * 3600 * 24 * 365 

그리고 1970년부터 세니까 + 1970

const d = new Date();

let year = d.getTime();
year = Math.floor(year/(3600*24*365*1000))+1970

console.log(year);
*/
