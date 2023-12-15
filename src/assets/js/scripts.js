let command_line_txt_data_json = (JSON.parse(`{"createdBy": "Fun117","version": "0.0.1","commandLine_data": [{"directory": "fun117@Fun117-Mac-mini ~ %","command": ""}]}`));
//console.log(command_line_txt_data_json);
let command_input_field = "";

function logAa(){
    command_input_field = document.getElementById('command_input_field').value;
    command_line_txt_data_json.commandLine_data = (JSON.parse(`[`+(JSON.stringify(command_line_txt_data_json.commandLine_data)).slice(1, -1)+`,{"directory": "fun117@Fun117-Mac-mini ~ %","command": "`+command_input_field+`"}]`));

    let commandLine_data_count = (command_line_txt_data_json.commandLine_data.length);
    var commandLine_data_html = "";
    for (let i = 0; i < commandLine_data_count; i++) {
        //console.log(i)
        //console.log((command_line_txt_data_json.commandLine_data[i]))
        var directory = (JSON.stringify(command_line_txt_data_json.commandLine_data[i].directory)).replace(/"/g, "");
        //console.log(directory)
        var command = (JSON.stringify(command_line_txt_data_json.commandLine_data[i].command)).replace(/"/g, "");
        //console.log(command)
        commandLine_data_html = commandLine_data_html+`<div><p>`+directory+` `+command+`</p></div>`;
    };
    //console.log(commandLine_data_html);
    document.getElementById('command_line').innerHTML=(commandLine_data_html);
    //console.log(command_line_txt_data_json);
    scroll('bottom',0)//bottom scroll
};

function scroll(mode,y){
    let elm = document.documentElement;
    let position = "";
    if(mode === 'bottom'){
        position = elm.scrollHeight - elm.clientHeight;
    }else {
        position = elm.scrollHeight - elm.clientHeight;
    };
    window.scroll(y, position);
}

export default logAa;