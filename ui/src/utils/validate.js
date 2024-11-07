/**
 * 判断url是否是http或https 
 * @param {string} path
 * @returns {Boolean}
 */
 export function isHttp(url) {
  return url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1
}

/**
 * 判断path是否为外链
 * @param {string} path
 * @returns {Boolean}
 */
 export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}
//身份证验证
export function  idCardValidity(rule, code, callback)  {
  var city = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江 ",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北 ",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏 ",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外 ",
  };
  var tip = "";
  var pass = true;

  if (
    !code ||
    !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(
      code
    )
  ) {
    tip = "身份证号格式错误";
    pass = false;
  } else if (!city[code.substr(0, 2)]) {
    tip = "地址编码错误";
    pass = false;
  } else {
    // 18位身份证需要验证最后一位校验位
    if (code.length === 18) {
      code = code.split("");
      // ∑(ai×Wi)(mod 11)
      // 加权因子
      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      // 校验位
      var parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
      var sum = 0;
      var ai = 0;
      var wi = 0;
      for (var i = 0; i < 17; i++) {
        ai = code[i];
        wi = factor[i];
        sum += ai * wi;
      }
      var last = parity[sum % 11];
      if (parity[sum % 11] != code[17]) {
        tip = "校验位错误";
        pass = false;
      }
    }
  }
  if (!pass) {
    callback(new Error(tip));
  } else {
    callback();
  }
  // if (!pass) alert(tip)
  // return pass
};
/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

export function toChinesNum(num) {
  let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  let unit = ['', '十', '百', '千', '万']
  num = parseInt(num)
  let getWan = (temp) => {
    let strArr = temp.toString().split('').reverse()
    let newNum = ''
    let newArr = []
    strArr.forEach((item, index) => {
      newArr.unshift(item === '0' ? changeNum[item] : changeNum[item] + unit[index])
    })
    let numArr = []
    newArr.forEach((m, n) => {
      if (m !== '零') numArr.push(n)
    })
    if (newArr.length > 1) {
      newArr.forEach((m, n) => {
        if (newArr[newArr.length - 1] === '零') {
          if (n <= numArr[numArr.length - 1]) {
            newNum += m
          }
        } else {
          newNum += m
        }
      })
    } else {
      newNum = newArr[0]
    }
    newNum = newNum.replace(/^一十/g, '十');
    return newNum
  }
  let overWan = Math.floor(num / 10000)
  let noWan = num % 10000
  if (noWan.toString().length < 4) {
    noWan = '0' + noWan
  }
  return overWan ? getWan(overWan) + '万' + getWan(noWan) : getWan(num)
}

export function addDate(date, days) {
  var date = new Date(date);
  date.setDate(date.getDate() + days);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var mm = "'" + month + "'";
  var dd = "'" + day + "'";
  if(mm.length == 3) {
    month = "0" + month;
  }
  if(dd.length == 3) {
    day = "0" + day;
  }
  var time = year + "-" + month + "-" + day
  return time;
}

export function formatDate(params) {
  //  HH:mm:ss
  let defalutParams = {
    date: new Date(),
    formatStr: 'yyyy-MM-dd'
  }
  let date = params
  let formatStr = defalutParams.formatStr;
  // params = { ...defalutParams, ...params };
  // let date = params.date;
  // let formatStr = params.formatStr;
  // 传入日期字符串 - 转成时间戳 - 转成标准时间
  let timeStamp = new Date(date).getTime();
  date = new Date(timeStamp);
  formatStr = formatStr.replace(new RegExp('yyyy'), `${date.getFullYear()}`);
  const month = date.getMonth() + 1;
  formatStr = formatStr.replace(new RegExp('MM'), `${month > 9 ? month : '0' + month}`);
  const day = date.getDate();
  formatStr = formatStr.replace(new RegExp('dd'), `${day > 9 ? day : '0' + day}`);
  const hour = date.getHours();
  formatStr = formatStr.replace(new RegExp('HH'), `${hour > 9 ? hour : '0' + hour}`);
  const min = date.getMinutes();
  formatStr = formatStr.replace(new RegExp('mm'), `${min > 9 ? min : '0' + min}`);
  const sec = date.getSeconds();
  formatStr = formatStr.replace(new RegExp('ss'), `${sec > 9 ? sec : '0' + sec}`);
  return formatStr;
}

export function urlPasseObj(url = '', isUrl) {
  const result = url.split('?')[isUrl ? 1 : 0]
  if (!result) {
    return {}
  }
  const list = result.split('&')
  const obj = {}
  list.map(item => {
    if (item) {
      const arr = item.split('=')
      const value = arr[1]
      obj[arr[0]] = value === undefined ? '' : value
    }
  })
  return obj
}
