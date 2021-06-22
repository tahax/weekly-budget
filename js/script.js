//variables
let takeWeeklyBudgetSaveBtn = document.querySelector('.tak-submit-weekly');
const takGetValue = document.querySelector('.tak-get-value');
const badgetValueInput = document.querySelector('.tak-get-value');
const baghimondeSpan = document.querySelector('.mablaghe-baghimande');
const submitMakharejBtn = document.querySelector('.tak-submit-hazine');
const parentShowResults = document.querySelector('.parent-makharej-show-result');
const valueMakharej = document.querySelector('.tak-get-value-money');
const nameMakharej = document.querySelector('.tak-get-value-name');
let baghiMonde;
let khodeBodje;
const calcMoney = new CalcMoney();
const htmlUi = new HtmlUi();
//event Listeners
eventListeners();

function eventListeners() {

    //ban space to get the value of week
    takGetValue.addEventListener('keydown', function (e){
        calcMoney.checkTheWeeklyValue(e)
    });

    //add event to weekly budget button
    takeWeeklyBudgetSaveBtn.addEventListener('click', function () {
        calcMoney.getWeeklyBadgetMoney()
    });

    valueMakharej.addEventListener('keydown', function (e){
        calcMoney.checkTheWeeklyValue(e)
    });

    submitMakharejBtn.addEventListener('click', function (){
        htmlUi.getMakharejFromInput();
    })


};