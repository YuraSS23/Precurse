let rule = "Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.";

switch (rule.length<25) {
    case true:
        console.log("Все таки нет правил без исключения");
        break;
    default:
        switch (rule.length>25) {
            case true:
                console.log("У меня 100 пудов все получится");
                break;
            default:
                console.log("50 на 50");
        }
    }