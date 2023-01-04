export const formateDate = (
    time: Date,
    formate: string = 'Y年Mon月D日'
): string => {
    let Y = time.getFullYear().toString();
    let Mon = (time.getMonth() + 1).toString();
    let D = time.getDate().toString();
    let H = time.getHours().toString();
    let Min = time.getMinutes().toString();
    let S = time.getSeconds().toString();

    Mon = parseInt(Mon) < 10 ? '0' + Mon : Mon
    D = parseInt(D) < 10 ? '0' + D : D
    H = parseInt(H) < 10 ? '0' + H : H
    Min = parseInt(Min) < 10 ? '0' + Min : Min
    S = parseInt(S) < 10 ? '0' + S : S

    formate = formate.replace('Y', Y)
    formate = formate.replace('Mon', Mon)
    formate = formate.replace('D', D)
    formate = formate.replace('H', H)
    formate = formate.replace('Min', Min)
    formate = formate.replace('S', S)

    return formate
}