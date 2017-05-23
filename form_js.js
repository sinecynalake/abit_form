function checkAllFields() {
    var required_field_empty_number = 0;
    var required_fields = document.getElementsByClassName("required");

    for (var i = 0; i < required_fields.length; i++){
        if (((required_fields.item(i).tagName === "INPUT") || (required_fields.item(i).tagName === "TEXTAREA"))
            && !(required_fields.item(i).classList.contains("hidden"))){
            if (required_fields.item(i).value.length === 0){
                required_fields.item(i).classList.add("required_fill");
                required_field_empty_number++;
            }
        }
        if (required_fields.item(i).tagName === "SELECT"){
            if (required_fields.item(i).value === "default")
                required_fields.item(i).classList.add("required_fill");
        }
    }

    if (required_field_empty_number === 0)
        alert("Успешно отправлено в приемную комиссию");
    else
        alert("Заполните, пожалуйста, все поля");
}

function eraseFieldValues() {
    var all_input_fields = document.getElementsByTagName("input");
    var text_areas = document.getElementsByTagName("textarea");
    var select_items = document.getElementsByTagName("select");

    for (var i = 0; i < all_input_fields.length; i++){
        if ((all_input_fields.item(i).type !== "button") && (all_input_fields.item(i).type !== "submit")) {
            all_input_fields.item(i).value = "";
        }
    }
    for (var i = 0; i < text_areas.length; i++){
        text_areas.item(i).value = "";
    }
    for (var i = 0; i < select_items.length; i++){
        select_items.item(i).value = "default";
    }

    var required_fields = document.getElementsByClassName("required");
    for (var i=0; i < required_fields.length; i++){
        required_fields.item(i).classList.remove("required_fill");}
}

function if_filled_wrong(field){
    if (field.value.length === 0)
        return true;
    if (field.value.charAt(0) === field.value.charAt(0).toLowerCase())
        return true;

    return false;
}

function checkName(field) {
    if (if_filled_wrong(field)) {
        field.classList.add("required_fill");
    }
    else {
        field.classList.remove("required_fill");
    }
}

function checkNomer(id) {
    var number = document.getElementById(id);

    if(/[0-9]/.test(number.value)){
      number.classList.remove("required_fill");}
    else {
        number.classList.add("required_fill");
    }

}

function specialityChoice(select) {

    var speciality_select;

    if (select.id === "faculty_1"){
        speciality_select = document.getElementById("napr_select_1");
    }
    if (select.id === "faculty_2"){
        speciality_select = document.getElementById("napr_select_2");
    }
    if (select.id === "faculty_3"){
        speciality_select = document.getElementById("napr_select_3");
    }

    function removeValues(){
        var values = select.options;

        for (var i = 0; i < values.length; i++){
            select.removeChild(select.options[i]);
        }
    }

    function makeSelectOptions(choices) {
        for (var i = 0; i < choices.length; i++){
            var opt = document.createElement("option");
            opt.value = opt.text = choices[i];
            speciality_select.appendChild(opt);
        }
    }

    removeValues();
    switch (select.value){
        case "design":
            var choices = ["Дизайн"];
            makeSelectOptions(choices);
            break;

        case "ineup":
            var choices = ["Менеджмент"];
            makeSelectOptions(choices);
            break;

        case "its":
            var choices = ["Конструирование и технология электронных средств", "Материаловедение и технологии материалов",
                    "Техносферная безопасность", "Управление в технических системах"];
            makeSelectOptions(choices);
            break;

        case "inyaz":
            var choices = ["Лингвистика"];
            makeSelectOptions(choices);
            break;

        case "mpitk":
            var choices = ["Инфокоммуникационные технологии и системы связи", "Информатика и вычислительная техника",
            "Информационная безопасность", "Прикладная математика", "Программная инженерия", "Радиотехника"];
            makeSelectOptions(choices);
            break;

        case "prit":
            var choices = ["Прикладная информатика"];
            makeSelectOptions(choices);
            break;

        case "ekt":
            var choices = ["Биотехнические системы и технологии", "Электроника и наноэлектроника"];
            makeSelectOptions(choices);
            break;
    }
}

function createYears() {
    var year_select = document.getElementById("year_of_graduation");
    var date = new Date();

    for (var i = 0; i < 15; i++){
        var t_option = document.createElement("option");
        t_option.value = t_option.innerHTML = date.getFullYear() - i;
        year_select.appendChild(t_option);
    }
}

function showHiddenFields(element) {
    var div = element.nextElementSibling;

    if (element.nodeName === "SELECT"){
        if (element.value === "shows_hidden") {
            div.style.display = "block";
        }
        else{
            div.style.display = "none";
        }
    }

    if (element.nodeName === "FIELDSET"){
        var checkbox = element.childNodes[5];
        if (checkbox.checked){
            div.style.display = "block";
        }
        else {
            div.style.display = "none";
        }
    }

    if (element.nodeName === "INPUT") {
        console.log(element.type);
        if (element.type === "checkbox") {
            if (element.checked) {
                div.style.display = "none";
            }
            else {
                div.style.display = "block";
            }
        }
    }
}

function showAdditionalInfoField(button){
        var div = button.nextElementSibling;
        console.log(div);
        console.log(div.style.display);
    
        if (div.style.display === "none") {
            button.value = "Добавить";
            div.style.display = "block";
        }
        if (div.style.display === "block") {
            button.value = "Скрыть";
            div.style.display = "none";
        }
}

function copyAddress() {
    var div_from_copy = document.getElementsByClassName("copy_address_from");
    var div_paste = document.getElementsByClassName("copy_address_to");

    for (var i = 0; i < div_from_copy.length; i++){
        console.log(div_from_copy.item(i));
    }
}

