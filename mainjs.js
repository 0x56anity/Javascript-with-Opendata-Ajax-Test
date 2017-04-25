Date.prototype.shortFormat = function() {
    var t = "";
    // t += ((this.getFullYear()-1911) > 0) ? "中華民國" + (this.getFullYear()-1911) + "年" : "西元" +　this.getFullYear() + "年";
    // t += (this.getMonth()+1) + "月" + this.getDate() + "日"

    t += this.getHours() + ":" + (this.getMinutes()<10 ? "0" + this.getMinutes() : this.getMinutes()) + ":" + this.getSeconds() + "<br />";
    t += this.getFullYear() + "/" + (this.getMonth()+1) + "/" +　this.getDate();

    return  t;
}

function showNewTime() {
    var time = new Date();
    document.getElementById("nowTime").innerHTML = time.shortFormat();
}


/**
 * XML Ajax Http 
 */

function AjaxRequest() {
    if (window.XMLHttpRequest) {
        try {
            this.request = new XMLHttpRequest();
        }
        catch(e) {
            this.request = null;
        }
    }
    else if(window.ActiveXObjest) {
        try {
            this.request = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch(e) {
            this.request = null;
            throw new Error("XMLHttpRequest not supported.\nDetails: " + e);
        }
    }
}

AjaxRequest.prototype.send = function(type, url, handler, postDataType, postData) {
    if (this.request != null) {
        this.request.abort();  // 退出

        try {
            this.request.onreadystatechange = handler;
            this.request.open(type, url, true);
            if(type.toLowerCase() == "get") {
                this.request.send(null);
            }
            else if(type.toLowerCase() == "post"){
                // POST
                throw new Error("POST 的程式還沒寫!!~");
            }
        }
        catch(e) {
            throw new Error("Ajax Error communicating with the Server. (跟伺服器出錯拉~~ \nDetails: " + e);
        }
    }
}

AjaxRequest.prototype.getReadyState = function() {
    return this.request.readyState;
}
AjaxRequest.prototype.getStatus = function() {
    return this.request.status;
}
AjaxRequest.prototype.getResponseText = function() {
    return this.request.responseText;
}
AjaxRequest.prototype.getResponseXML = function() {
    return this.request.responseXML;
}

console.log("%cmainjs.js is loaded.", "color: silver");