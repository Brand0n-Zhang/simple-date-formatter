export const formateDate = (
    time: Date,
    formate: string = 'Y年Mon月D日'
): string => {
    let Y = time.getFullYear();
    let Mon = time.getMonth() + 1;
    let D = time.getDate();
    let H = time.getHours();
    let Min = time.getMinutes();
    let S = time.getSeconds();

    formate = formate.replace('Y', Y.toString())
    formate = formate.replace('Mon', Mon.toString())
    formate = formate.replace('D', D.toString())
    formate = formate.replace('H', H.toString())
    formate = formate.replace('Min', Min.toString())
    formate = formate.replace('S', S.toString())

    return formate

}