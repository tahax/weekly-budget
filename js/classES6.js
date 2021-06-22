class CalcMoney {

    checkTheWeeklyValue(e) {
        if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105) {
            //do nothing if key cod is this
        } else if (e.keyCode !== 8) {
            e.preventDefault();
        }
    }

    getWeeklyBadgetMoney() {
        if (badgetValueInput.value === '') {
            //if the value is empty
            htmlUi.errorFunc(badgetValueInput);
            htmlUi.displayError('بودجه را وارد کنید!!!');
        } else {
            //show the value if the html tag
            htmlUi.showTheValue(".mablaghe-boje-kol", badgetValueInput);

            //display none the get value of week page
            htmlUi.displayNoneGetWeeklyValue();

            //display the baghimonde
            htmlUi.baghimondeFunc();

            //display success
            htmlUi.displayAccepted('با موفقیت ثبت شد');
        }
    }

}

class HtmlUi {

    displayNoneGetWeeklyValue() {
        //display none the get value of week page
        let divGetWeeklyBadget = document.querySelector('.get-weekly-budget');
        divGetWeeklyBadget.style.display = "none";
    }

    showTheValue(htmlClass, valueOfInput) {
        //show the value if the html tag
        let showWeeklyBadget = document.querySelector(htmlClass);
        showWeeklyBadget.textContent = valueOfInput.value;
        baghiMonde = valueOfInput.value;
        khodeBodje = valueOfInput.value;
    }

    errorFunc(myVar) {
        //if the value is empty
        myVar.style.border = "2px solid red";
    }

    baghimondeFunc(x = 0) {
        let divBaghimonde = document.querySelector('.tak-boje-baghimande');
        baghiMonde -= x;
        if (baghiMonde <= khodeBodje * 0.75 && baghiMonde > khodeBodje * 0.5) {
            divBaghimonde.style.backgroundColor = '#0023a5';
        } else if (baghiMonde <= khodeBodje * 0.5 && baghiMonde > khodeBodje * 0.25) {
            divBaghimonde.style.backgroundColor = 'orange';
        } else if (baghiMonde <= khodeBodje * 0.25 && baghiMonde > 0) {
            divBaghimonde.style.backgroundColor = '#d20000';
        }else if(baghiMonde === 0){
            divBaghimonde.style.backgroundColor = '#313131';
        }
        baghimondeSpan.textContent = baghiMonde;
    }

    getMakharejFromInput() {
        if (valueMakharej.value !== '' && nameMakharej.value !== '') {
            if (valueMakharej.value <= baghiMonde) {
                this.baghimondeFunc(valueMakharej.value);
                let createResultBox = `
                    <div class="makharej-show-result">
                        <span class="esme-kharj tak-iranyekan-bold">${nameMakharej.value}  &nbsp;&nbsp;:&nbsp; &nbsp;</span>
                        <span class="mablaghe-kharj-shode tak-iranyekan-bold"> ${valueMakharej.value} تومان</span>
                    </div>`;
                valueMakharej.style.border = 'none';
                nameMakharej.style.border = 'none';
                parentShowResults.innerHTML += createResultBox;
                valueMakharej.value = '';
                nameMakharej.value = '';
                this.displayAccepted('با موفقیت ثبت شد')

            } else {
                valueMakharej.style.border = '2px solid red'
                this.displayError('هزینه بیشتر از بوجه باقی مانده است')
            }
        } else if (valueMakharej.value === '' && nameMakharej.value !== '') {
            this.displayError('مقدار هزینه را وارد کنید!!!');
            valueMakharej.style.border = '2px solid red';
            nameMakharej.style.border = 'none';
        } else if (valueMakharej.value !== '' && nameMakharej.value === '') {
            this.displayError('نام هزینه را وارد کنید!!!');
            valueMakharej.style.border = 'none';
            nameMakharej.style.border = '2px solid red';
        } else {
            this.displayError('مقادیر را وارد کنید!!!');
            valueMakharej.style.border = '2px solid red';
            nameMakharej.style.border = '2px solid red';
        }
    }

    displayError(err) {
        let body = document.querySelector('body');
        let showAlert = document.createElement("div");
        showAlert.className = 'showalert';
        showAlert.innerHTML = `<div class='alertBox tak-iranyekan-bold'>${err}</div>`;
        body.appendChild(showAlert);
        setTimeout(() => {
            showAlert.classList.add('opacity-come');
        }, 10)
        setTimeout(() => {
            showAlert.classList.add('opacity-out');
            setTimeout(() => {
                showAlert.remove();
            }, 1000)
        }, 2000)
    }

    displayAccepted(acc){
        let body = document.querySelector('body');
        let showAlert = document.createElement("div");
        showAlert.className = 'showalert';
        showAlert.innerHTML = `<div class='accept-box tak-iranyekan-bold'>${acc}</div>`;
        body.appendChild(showAlert);
        setTimeout(() => {
            showAlert.classList.add('opacity-come');
        }, 10)
        setTimeout(() => {
            showAlert.classList.add('opacity-out');
            setTimeout(() => {
                showAlert.remove();
            }, 1000)
        }, 2000)
    }

}