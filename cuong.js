










//const btnCUOC = document.querySelector(".btn-cuoc");
// const vongtron = document.querySelector(".btn-vongtron");
// const time = document.querySelector(".time");
// const timeImg = document.querySelector(".btn-time");
// const AnhXiNgau = document.querySelectorAll(".xingau");
// const Chips = document.querySelectorAll(".chip");
// const Allin = document.querySelector(".allin");
// const btnTai = document.querySelector(".btn-tai");
// const btnXiu = document.querySelector(".btn-xiu");
// const mymoney = document.querySelector(".tien-cuaban");

// const tiengwin = document.querySelector(".win");
// const tiengloss = document.querySelector(".loss");
// const nhapsotien = document.querySelector(".nhapsotien");
// const tiendat = document.querySelector(".tien-xiu");
// const overlay = document.querySelector(".overlay");

// function intToString(num) {
//   if (num <= 999999999) {
//     return num;
//   } else {
//     num = num.toString().replace(/[^0-9.]/g, "");
//     let si = [
//       { v: 1e9, s: "B" },
//       { v: 1e12, s: "T" },
//       { v: 1e15, s: "P" },
//       { v: 1e18, s: "E" },
//     ];
//     let index;
//     for (index = si.length - 1; index > 0; index--) {
//       if (num >= si[index].v) {
//         break;
//       }
//     }
//     return (
//       (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
//       si[index].s
//     );
//   }
// }

// //thông tin cá cược
// var bet = {
//   mns: 0,
//   st: "",
// };

// tiendat.innerHTML = parseInt(bet.mns);

// // tiền của bạn
// const mymns = {
//   mns: mymoney.attributes.value.nodeValue,
// };
// mymoney.innerHTML = `$${intToString(parseInt(mymns.mns)).toLocaleString(
//   "en-US"
// )}`;

// //
// var XiNgaus = {
//   list: [],
// };

// const demnguoc = (time_init) => {
//   const countdown = setInterval(retime, 1000);
//   function retime() {
//     time_init -= 1;
//     time.innerHTML = time_init < 10 ? `0${time_init}` : time_init;
//     if (time_init <= 5) {
//       time.style.color = "red";
//       timeImg.style.border = "4px solid red";
//     } else {
//       time.style.color = "white";
//       timeImg.style.border = "4px solid white";
//     }
//     if (time_init === 0) {
//       clearInterval(countdown);

//       return 0;
//     }
//   }
// };
// demnguoc(timeWaiting + timeLoading + 1);

// //hàm trả về tài và xỉu
// const hamtaixiu = (array) => {
//   var TongXiNgau = 0;
//   for (let i = 0; i < array.length; i++) {
//     TongXiNgau += array[i];
//   }
//   return TongXiNgau >= 4 && TongXiNgau <= 10 ? true : false;
// };

// //hàm hiển thị tài xỉu
// const hamhienthi = (arr) => {
//   if (hamtaixiu(arr)) {
//     btnTai.classList.remove("active");
//     btnXiu.classList.add("active");
//   } else {
//     btnTai.classList.add("active");
//     btnXiu.classList.remove("active");
//   }
// };

// //hàm random và check ảnh
const handleRandCheck = () => {
  var XiNgauRand = [
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1),
  ];
  XiNgaus.list = XiNgauRand;
  var j = 0;
  XiNgauRand.forEach((xingau) => {
    for (var i = 0; i < 6; i++) {
      if (xingau === thongtin[i].id) {
        AnhXiNgau[j++].src = thongtin[i].src;
      }
    }
  });
};


const rollXingau = () =>
  setInterval(() => {
    document.querySelector(".btn-xingaugif").src = "";
    document.querySelector(".btn-xingaugif").src = "./assets/xingau/roll1.gif";
  }, 3000);

// const hamcacuoc = () => {
//   console.log(typeof bet.mns);
//   btnTai.addEventListener("click", () => {
//     tiengting.play();
//     bet.st = false;
//     btnTai.classList.add("pick");
//     btnXiu.classList.remove("pick");
//     btnXiu.classList.remove("active");
//     btnTai.classList.remove("active");
//   });
//   btnXiu.addEventListener("click", () => {
//     tiengting.play();
//     bet.st = true;
//     btnXiu.classList.add("pick");
//     btnXiu.classList.remove("active");
//     btnTai.classList.remove("active");
//     btnTai.classList.remove("pick");
//   });
//   Chips.forEach((chip) => {
//     chip.onclick = () => {
//       tiengting.play();
//       bet.mns = parseInt(chip.attributes.value.nodeValue);
//       tiendat.innerHTML = `$${intToString(parseInt(bet.mns)).toLocaleString(
//         "en-US"
//       )}`;
//     };
//   });

//   Allin.addEventListener("click", () => {
//     bet.mns = mymns.mns;
//     if (bet.mns < 0) {
//       bet.mns = 0;
//       alert("Còn cái nịt ấy mà All-in");
//     }
//     tiendat.innerHTML = `$${intToString(parseInt(bet.mns)).toLocaleString(
//       "en-US"
//     )}`;
//   });
//   nhapsotien.addEventListener("input", (e) => {
//     bet.mns = e.target.value;
//     tiendat.innerHTML = `$${intToString(parseInt(bet.mns)).toLocaleString(
//       "en-US"
//     )}`;
//   });
// };
// hamcacuoc();
// const gameLoading = () => {
//   overlay.style.display = "block";
//   tiengdongho.play();
//   tiengxingau.play();
//   handleRandCheck();
//   demnguoc(timeLoading + 1);
//   rollXingau();
//   document.querySelector(".xingau-list").style.display = "none";
//   document.querySelector(".btn-xingaugif").style.display = "block";
//   vongtron.style.display = "block";
//   btnXiu.classList.remove("active");
//   btnTai.classList.remove("active");
// };

// const gameOver = () => {
//   overlay.style.display = "none";
//   Hoathoadatcuoc.style.display = "none";
//   btnTai.classList.remove("pick");
//   btnXiu.classList.remove("pick");
//   setTimeout(() => {
//     Hoathoadatcuoc.style.display = "block";
//   }, 1000);
//   tiengdongho.pause();
//   tiengtienve.play();
//   tiengxingau.pause();
//   // hamcacuoc();
//   mymoney.innerHTML = tiendat.innerHTML = `$${intToString(
//     parseInt(mymns.mns)
//   ).toLocaleString("en-US")}`;
//   demnguoc(timeWaiting + 1);
//   hamhienthi(XiNgaus.list);
//   clearInterval(rollXingau);
//   document.querySelector(".xingau-list").style.display = "flex";
//   document.querySelector(".btn-xingaugif").style.display = "none";
//   vongtron.style.display = "none";
// };

// setInterval(() => {
//   const main = new Promise(async (resolve, reject) => {
//     await gameLoading();
//     mymns.mns = parseInt(mymns.mns);
//     if (hamtaixiu(XiNgaus.list) === bet.st) {
//       mymns.mns += parseInt(bet.mns);
//     } else {
//       mymns.mns -= parseInt(bet.mns);
//     }
//     resolve();
//   });

//   main.then(() => {
//     setTimeout(() => {
//       gameOver();
//     }, (timeWaiting + 1) * 1000);
//   });
// }, (timeLoading + timeWaiting + 2) * 1000);

var vung = document.querySelector(".btn-vung");

var mousePosition;
var offset = [0, 0];
var isDown = false;

vung.addEventListener(
  "mousedown",
  function (e) {
    isDown = true;
    offset = [vung.offsetLeft - e.clientX, vung.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDown = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown) {
      mousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
      vung.style.left = mousePosition.x + offset[0] + "px";
      vung.style.top = mousePosition.y + offset[1] + "px";
    }
  },
  true
);
