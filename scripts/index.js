
class Validator{
    
      isEmail(str){
          let mailFormat=/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
          return mailFormat.test(str);
      }
      isDomain(str){
        let domainFormat=/^((https?|ftp)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)$/i;
        return domainFormat.test(str);
    }
    isDate(str){
        let dataFormat=/\d{2}(.)\d{2}\1\d{4}/;
        return dataFormat.test(str);
    }
    isPhone(str){
        let phoneFormat=/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        return phoneFormat.test(str);
    }
}



class ValidatorStatic{
    static isEmail(str){
        let mailFormat=/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        return mailFormat.test(str);
    }
    static isDomain(str){
        let domainFormat=/^((https?|ftp)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)$/i;
        return domainFormat.test(str);
    }
    static isDate(str){
        let dataFormat=/\d{2}(.)\d{2}\1\d{4}/;
        return dataFormat.test(str);
    }
    static isPhone(str){
        let phoneFormat=/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        return phoneFormat.test(str);
    }
}












//стандартная вызывается вот так
let validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67'));  


//а статическая так
 console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
 console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));
