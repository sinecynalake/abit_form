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
        all_input_fields.item(i).value = "";
    }
    for (var i = 0; i < text_areas.length; i++){
        text_areas.item(i).value = "";
    }
    for (var i = 0; i < select_items.length; i++){
        select_items.item(i).value = "default";
    }
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
        name.classList.add("required_fill");
    }
    else {
        name.classList.remove("required_fill");
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
    var main_div = select.parentNode;


    var new_div = document.createElement("div");
    new_div.id = "new_speciality_select";


    var newLabel = document.createElement("label");
    newLabel.innerHTML = "Направление:";
    newLabel.htmlFor = "select_napr";
    new_div.appendChild(newLabel);
    main_div.appendChild(new_div);


    var choice = select.value;

    switch (choice){
        case "design":
            var choices = ["Дизайн"];
            var design_select = document.createElement("select");
            design_select.id = "select_napr";
            new_div.appendChild(design_select);

            for (var i = 0; i < choices.length; i++){
                var opt = document.createElement("option");
                opt.value = choices[i];
                opt.text = choices[i];
                design_select.appendChild(opt);
            }
            break;

        case "ineup":
            var choices = ["Менеджмент"];
            var ineup_select = document.createElement("select");
            new_div.appendChild(ineup_select);

            for (var i = 0; i < choices.length; i++){
                var opt = document.createElement("option");
                opt.value = choices[i];
                opt.text = choices[i];
                ineup_select.appendChild(opt);
            }
            break;

        case "its":
            var choices = ["Конструирование и технология электронных средств", "Материаловедение и технологии материалов",
                "Техносферная безопасность", "Управление в технических системах"];
            var its_select = document.createElement("select");
            new_div.appendChild(its_select);

            for (var i = 0; i < choices.length; i++){
                var opt = document.createElement("option");
                opt.value = choices[i];
                opt.text = choices[i];
                its_select.appendChild(opt);
            }
            break;

        case "inyaz":
            var choices = ["Лингвистика"];
            var inyaz_select = document.createElement("select");
            new_div.appendChild(inyaz_select);

            for (var i = 0; i < choices.length; i++){
                var opt = document.createElement("option");
                opt.value = choices[i];
                opt.text = choices[i];
                inyaz_select.appendChild(opt);
            }
            break;

        case "mpitk":
            var choices = ["Инфокоммуникационные технологии и системы связи", "Информатика и вычислительная техника",
            "Информационная безопасность", "Прикладная математика", "Программная инженерия", "Радиотехника"];
            var mpitk_select = document.createElement("select");
            new_div.appendChild(mpitk_select);

            for (var i = 0; i < choices.length; i++){
                var opt = document.createElement("option");
                opt.value = choices[i];
                opt.text = choices[i];
                mpitk_select.appendChild(opt);
            }
            break;

        case "prit":
            var choices = ["Прикладная информатика"];
            var prit_select = document.createElement("select");
            new_div.appendChild(prit_select);

            for (var i = 0; i < choices.length; i++){
                var opt = document.createElement("option");
                opt.value = choices[i];
                opt.text = choices[i];
                prit_select.appendChild(opt);
            }
            break;

        case "ekt":
            var choices = ["Биотехнические системы и технологии", "Электроника и наноэлектроника"];
            var ekt_select = document.createElement("select");
            new_div.appendChild(ekt_select);

            for (var i = 0; i < choices.length; i++){
                var opt = document.createElement("option");
                opt.value = choices[i];
                opt.text = choices[i];
                ekt_select.appendChild(opt);
            }
            break;
    }
    var br = document.createElement("br");
    new_div.appendChild(br);

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

    if (element.type === "CHECKBOX"){
        if (element.checked){
            div.style.display = "none";
        }
        else {
            div.style.display = "block";
        }
    }
}

function showAdditionalInfoField(button) {
    button.onclick = function() {
        var div = button.nextElementSibling;
        if (div.style.display !== 'none') {
            button.value = "Добавить";
            div.style.display = 'none';
        }
        else {
            button.value = "Скрыть";
            div.style.display = 'block';
        }
    };
}