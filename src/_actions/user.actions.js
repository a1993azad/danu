import { userConstants,OPERATOR_REGEX } from '../_constants';
import { generalService } from '../_services';
import localstorageTTL from 'localstorage-ttl';
import { history } from '../_helpers';
import Swal from 'sweetalert2';
import * as _ from "lodash";
import {store} from '../_helpers';
import moment from 'jalali-moment';

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index+1 , this.length);
}

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000
});
const operator={
    "+":function (a,b) {
        if(typeof a!=='number'){
            a=a!=undefined && !isNaN(a)?parseFloat(a):0;
        }
        if(typeof b!=='number'){
            b=b!=undefined && !isNaN(b)?parseFloat(b):0;
        }
        return a+b;
    },
    "-":function (a,b) {

        return a-b;
    },
    "*":function (a,b) {

        return a*b;
    },
    "/":function (a,b) {

        return a/b;
    },
    "^":function (a,b) {
        return b>1?this['*'](a,this['^'](a,b-1)):a;
    }
};
export const userActions = {
    isValid,
    toggleState,
    logout,
    start_request,
    finish_request,
    failure,
    successToast,
    question,
    successAlert,
    API,
    handleChangeSelect,
    handleChangeHook,
    handleChangeInput,
    maskInput,
    handleChangeFile,
    login,
    getMe,
    onlyRTL,
    setToken,
    setStorage,
    setTemp,
    generateSelectLabelValue,
    persianNumber,
    persianMonth,
    groupBy,
    resolve,
    math_map,
    onlyDigit,
};
function isValid(state,type) {
    if(!!state){
        switch (type) {
            case "phone_number":
                return state.indexOf('09')===0 && state.length===11;
            case "national_code":
                return state.length===10
        }
    }
    return false;

}
function generateSelectLabelValue(arr) {
    return Array.isArray(arr)?arr.map(itm=>({label:itm,value:itm})):[];
}
function start_request() { return { type: userConstants.LOADING_SHOW } }
function finish_request() { return { type: userConstants.LOADING_HIDE } }
function question(title,text) {
    return  dispatch=>Swal.fire({
            title,
            text,
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله',
            cancelButtonText: 'خیر'
        });
}
function successAlert(title,text) {
    return Swal.fire({
            title,
            text,
            type: 'success',
            showCancelButton: false,
            confirmButtonColor: '#00c200',
            confirmButtonText: 'تأیید',
        });
}
async function failure(error) {
    try{
        console.error(error);
        if(error){
            let e='';
            if(error.data){
                e=error.data.error || error.data.message || error.data.toString();
            }else{
                e=error;
            }
            if(error.status===500 ){
                toast({
                    type:'error',
                    title:'موقتاً سرور با مشکل مواجه است. لطفاً کمی بعد مجدد تلاش کنید.'
                });
            }else if(error.status===401){
                toast({
                    type:'error',
                    title:'لطفاً وارد سامانه شوید.'
                });
                logout();
            }else{
                toast({
                    type:'error',
                    title:e
                });
            }
        }
    }catch (e) {
        console.error(e)
    }


}
function successToast(msg) {
    return toast({
        type:'success',
        title:msg
    });
}
function API(method,url,params,needLoading=true) {
    return dispatch=>{
        if(needLoading){
            dispatch(start_request());
        }
        // if(url.indexOf('?')==-1){
        //     url+='?&';
        // }else{
        //     url+='&';
        // }
        const result=generalService[method](url,params);
        result.then(res=>{
            if(needLoading){

                dispatch(finish_request());
            }
        }).catch(err=>{
            if(needLoading){
                dispatch(finish_request());
            }
            failure(err.response);
        });
        return result;
    }

}
function resolve(path, obj) {
    return path.split('.').reduce(function(prev, curr) {
        return prev ? prev[curr] : null
    }, obj || this)
}
function handleChangeSelect(value,data,parent,index,callback) {
    if(parent){

        const arr=this.state[parent];
        if(!Array.isArray(arr)){
            arr[data.name]=value;
        }else{
            arr[index][data.name]=value;
        }
            this.setState({ parent: arr});

        return false;
    }
    this.setState({ [data.name]: value },()=>{if(callback)callback(value)});
}
function toggleState(name) {
    this.setState({ [name]: !this.state[name]});
}
function handleChangeHook(value,name,fn) {
    fn({ [name]: value });
}
function handleChangeInput(e,...accept) {

    const { name, value } = e.target;
    if (accept && accept.length && value!==null && value!==undefined){
        if(accept.length===1  ){
            if(accept.indexOf('fa')>=0){
                if(!onlyRTL(value)){
                    failure('لطفاً کیبورد خود را فارسی کنید.');
                    this.setState({ [name]: this.state[name] });
                    return false;
                }
            }else if(accept.indexOf('en')>=0){
                if(!onlyLTR(value)){
                    failure('لطفاً کیبورد خود را انگلیسی کنید.')
                    this.setState({ [name]: this.state[name] });
                    return false;
                }
            }else if(accept.indexOf('number')>=0){
                if(!onlyDigit(value)){
                    failure('شما تنها مجاز به وارد کردن اعداد می باشید. ');
                    this.setState({ [name]: this.state[name] });
                    return false;
                }
            }else{
                const reg= new RegExp(accept[0]);
                if(!reg.test(value)){
                    this.setState({ [name]: this.state[name] });
                    return false;
                }
            }
        }else{
            if(accept.indexOf('fa')>=0 && accept.indexOf('number')>=0){
                if(!onlyRTL(value) && !onlyDigit(value)){
                    failure('شما تنها مجاز به وارد کردن اعداد و حروف فارسی می باشید. ');
                    this.setState({ [name]: this.state[name] });
                    return false;
                }
            }else if(accept.indexOf('en')>=0 && accept.indexOf('number')>=0 ){
                if(!onlyLTR(value) && !onlyDigit(value)){
                    failure('شما تنها مجاز به وارد کردن اعداد و حروف لاتین می باشید. ');
                    this.setState({ [name]: this.state[name] });
                    return false;
                }
            }
        }


    }
    this.setState({ [name]: value });
}
function maskInput(e,name,props,regex=OPERATOR_REGEX) {
    /*mask input state by <span class="props.classNmae" style="props.style">regex</span>*/

    const {className,style}=props;
    const reg=new RegExp(/(<span\b[^>]*>)|(<\/span>)/g);
    const reg2=new RegExp(/(<font\b[^>]*>)|(<\/font>)/g);
    let ADD_SPACE_TO_LAST_WORD=false;
    let html= e.target.value;
    // const isHaveSemicolon=html.slice(-2).indexOf(';')===0;/*FireFox box for add &nbsp;*/
    //
    // if(!isHaveSemicolon && html.charAt(html.length-2)===' '){
    //     console.log('replace')
    //     html=html.replaceAt(html.length-2,'&nbsp;')
    // }
    html= html.replace(/<br>/g,'&nbsp;');

    if(

        html.length>5
        &&
        html.lastIndexOf('&nbsp;')===html.length-6
        &&
        html.charAt(html.lastIndexOf('&nbsp;')-6) != '&'
        &&
        html.charAt(html.lastIndexOf('&nbsp;')-7) != '<'

    ){

        ADD_SPACE_TO_LAST_WORD=true;
    }
    //html= html.replace(/<br>/g,'');

    let lastText=this.state[name] || '';
    lastText=lastText.replace(/<br>/g,'');
    const endAt=lastText.lastIndexOf('>&nbsp;');
    const isSignOnDelete=endAt===lastText.length-7 && lastText.length>html.length;
    if(isSignOnDelete){
        const startAt=html.lastIndexOf('&nbsp;<');
        html=html.substr(0,startAt);
    }
    html=html.replace(reg,'');
    html=html.replace(reg2,'');
    html=html.replace(/&nbsp;/g,'');
    html=html.replace(/<br>/g,'');
    let html2='';
    const splited=html.split(regex);
    const operators=[];
    let html3=html;
    while (html3.search(regex)>=0){
        const i=html3.search(regex);
        let opt=html3.substr(i,1);
        operators.push(opt);
        html3=html3.replaceAt(i,'')
    }
    splited.map((str,i)=>{
        if(str!=''){
            html2+=str;
            if(operators[i]){
                html2+=`&nbsp;<span class="${className}" style="${style || ''}">${operators[i]}</span>&nbsp;`;
            }
        }
    })
    if(ADD_SPACE_TO_LAST_WORD){
        html2+='&nbsp;';
    }
    this.setState({ [name]:html2 })

    /*let lastText=this.state[name] || '';
    lastText=lastText.replace(/<br>/g,'')
    const endAt=lastText.lastIndexOf('>&nbsp;');
    if(endAt===lastText.length-7 && lastText.length>html.length){
        const startAt=html.lastIndexOf('&nbsp;<');
        html=html.substr(0,startAt)
    }
    let html2=html;
    let srcSplited=html.split(reg);
    const {className,style}=props;
    srcSplited.map((str,i)=>{
        if(str!=='&nbsp;'){
            let optIndex=str.search(regex);
            if(optIndex>=0){
                const Index=html.indexOf(str);
                html2=html.replaceAt(Index+optIndex,`&nbsp;<span class="${className}" style="${style || ''}">${str.charAt(optIndex)}</span>&nbsp;`)
            }
        }

    })
    this.setState({ [name]:html2 })*/
   /* let srcHtml=html.replace(/(<span\b[^>]*>)[^<>]*(<\/span>)/i,'');
    if(OPERATOR_REGEX.test(srcHtml)){

    }
    console.log(html)
    const endIndex=html.charAt(html.length-1);
    const {className,style}=props;
    if(OPERATOR_REGEX.test(endIndex)){
        console.log(endIndex)
        html=html.replaceAt(html.length-1,`&nbsp;<span class="${className}" style="${style}">${endIndex}</span>&nbsp;`)
        console.log(html)
    }
    this.setState({ [name]:html });*/
    // let srcHtml=html.replace(/(<span\b[^>]*>)[^<>]*(<\/span>)/i,'');
    // console.log(srcHtml)
    /* srcHtml.map(h=>{
       const htmlSplited=h.split('');

       htmlSplited.map((chr,i)=>{

         if(OPERATOR_REGEX.test(chr) ){
           console.log(chr,i)
           html=html.replaceAt(i,`<span style="color:red">${chr}</span>`)

         }
       })
     })*/

}
function handleChangeFile(name,file){
    this.setState({[name]:file.base64});
}
function logout(noRedirect=false) {


    return dispatch=>{
        dispatch(question("خروج از پرتال","آیا تمایل به خروج از پرتال را دارید؟")).then(result=>{
            if(result.value){
                localStorage.removeItem('globalStorage');
                dispatch({ type: userConstants.LOGOUT });
                if(!noRedirect)
                history.push('/');
            }
        });

    };
}
function getMe() {
   return dispatch=>{
        dispatch(userActions.API('get', '/v1/user/me')).then(res => {
            const globalStorage=localstorageTTL.get('globalStorage');
            localstorageTTL.set('globalStorage',{...globalStorage,...res.data} , 24 * 60 * 60 * 1000);
            dispatch(success(res.data));
        })
    }
    function success(data) {
        return {type:userConstants.ME,data};
    }
}
function setToken(data) {

   return dispatch=>{
       localstorageTTL.set('globalStorage', data, 24 * 60 * 60 * 1000);
       return new Promise((resolve,reject)=>{
           dispatch({type:userConstants.LOGIN_SUCCESS,data});

               dispatch(getMe())

           resolve(data)
       })

   }

}
function setStorage(data,key) {

   return dispatch=>{
       const globalStorage=localstorageTTL.get('globalStorage');
       localstorageTTL.set('globalStorage',{...globalStorage,...data} , 24 * 60 * 60 * 1000);
       return new Promise((resolve,reject)=>{
           if(key){
               dispatch({type:userConstants.ANY ,key,data});
           }else{
               Object.keys(data).map(key=>{
                   dispatch({type:userConstants.ANY,key:key ,data:data[key]});
               })
           }

           resolve(data)
       })

   }

}
function setTemp(data,key) {

   return dispatch=>{

       return new Promise((resolve,reject)=>{
           if(key){
               dispatch({type:userConstants.TEMP ,key,data});
           }else{
               Object.keys(data).map(key=>{
                   dispatch({type:userConstants.TEMP,key:key ,data:data[key]});
               })
           }

           resolve(data)
       })

   }

}
function login(params) {
    return dispatch=>{
      const respons= dispatch(API('post', '/v1/user/signin', params));
        respons.then(res => {

            dispatch(setToken(res.data)).then(()=>{
              // dispatch(getMe(res.data.access_token));
           });

        }).catch(err => {
            if(err.response){
                if (err.response.status == "401") {
                    userActions.failure("نام کاربری یا کلمه عبور اشتباه است.");
                } else {
                    if (err.response.data.message == 'username is not found') {
                        this.setState({login: false});
                        userActions.failure("شماره وارد شده در سامانه یافت نشد لطفاً ابتدا عضو شوید.");
                    }
                }
            }
        });
        return respons;
    }

}
function onlyRTL(s) {
  /*  const ltrChars = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF' + '\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF',
        rtlChars = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC',
        rtlDirCheck = new RegExp('^[^' + ltrChars + ']*[' + rtlChars + ']');*/
  const reg=/^([\u0600-\u06FF]+\s?)+$/;
    return s!==undefined && s!==null && s.toString().length?reg.test(s):true;
}
function onlyLTR(s) {
  /*  const ltrChars = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF' + '\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF',
        rtlChars = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC',
        rtlDirCheck = new RegExp('^[^' + ltrChars + ']*[' + rtlChars + ']');*/
  const reg=new RegExp('^([A-Za-z]+\s?)+$');
    return s!==undefined && s!==null && s.toString().length?reg.test(s):true;
}
function onlyDigit(s) {
    const reg =new RegExp(/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/);
    return s!==undefined && s!==null && s.toString().length?reg.test(s):true;
}
function persianNumber(str,om) {
    var delimiter, digit, i, iThree, numbers, part, parts, result, resultThree, three;
    if (!isFinite(str)) {
        return '';
    }
    if (typeof str !== "string") {
        str = str.toString();
    }
    parts = ['', 'هزار', 'میلیون', 'میلیارد', 'تریلیون', 'کوادریلیون', 'کویینتیلیون', 'سکستیلیون'];
    numbers = {
        0: ['', 'صد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'],
        1: ['', 'ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'],
        2: ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'],
        two: ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده'],
        zero: 'صفر'
    };
    delimiter = ' و ';
    str = str.split('').reverse().join('').replace(/\d{3}(?=\d)/g, "$&,").split('').reverse().join('').split(',').map(function(str) {
        return Array(4 - str.length).join('0') + str;
    });
    result = (function() {
        let results;
        results = [];
        for (iThree in str) {
            three = str[iThree];
            resultThree = (function() {
                let j, len, results1;
                results1 = [];
                for (i = j = 0, len = three.length; j < len; i = ++j) {
                    digit = three[i];
                    if (i === 1 && digit === '1') {
                        results1.push(numbers.two[three[2]]);
                    } else if ((i !== 2 || three[1] !== '1') && numbers[i][digit] !== '') {
                        results1.push(numbers[i][digit]);
                    } else {
                        continue;
                    }
                }
                return results1;
            })();
            resultThree = resultThree.join(delimiter);
            part = resultThree.length > 0 ? ' ' + parts[str.length - iThree - 1] : '';
            results.push(resultThree + part);
        }
        return results;
    })();
    result = result.filter(function(x) {
        return x.trim() !== '';
    });
    result = result.join(delimiter).trim();
    if (result !== '') {
        if(om)
            if(result==='یک'){
                result='اول';
            }else if(result==='سی'){
                result='سی اُم';
            }else if(result.indexOf('سه')!==-1){

                result= result.replace('سه','سوم');
            }else{
                result=result+'م';
            }
        return result;
    } else {
        return numbers.zero;
    }
};
function persianMonth(str) {

    if (!isFinite(str)) {
        return '';
    }
    if (typeof str !== "number") {
        str = parseInt(str);
    }
    var month=[
        'فروردین',
        'اردیبهشت',
        'خرداد',
        'تیر',
        'مرداد',
        'شهریور',
        'مهر',
        'آبان',
        'آذر',
        'دی',
        'بهمن',
        'اسفند'
    ];
    return month[str-1];
}
function groupBy(list, props) {
    if(props.indexOf('.')>=0){
        const props_splited=props.split('.');
        return list.reduce((a, b) => {
            (a[b[props_splited[0]][props_splited[1]]] = a[b[props_splited[0]][props_splited[1]]] || []).push(b);
            return a;
        }, {});
    }else{
        return list.reduce((a, b) => {
            (a[b[props]] = a[b[props]] || []).push(b);
            return a;
        }, {});
    }
}

function math_map (arr) {
    if(arr.length>=3){
        let result=operator[arr[1]](arr[2],arr[0]);
        if(arr.length!==3){
            return math_map( [result].concat(arr.slice(3,arr.length)));
        }else{
            return result;
        }
    }else {
        return arr[0]?arr[0]:0;
    }
}

