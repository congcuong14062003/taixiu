const thongtin = [
  {
    id: 1,
    src: "./assets/xingau/1.png",
  },
  {
    id: 2,
    src: "./assets/xingau/2.png",
  },
  {
    id: 3,
    src: "./assets/xingau/3.png",
  },
  {
    id: 4,
    src: "./assets/xingau/4.png",
  },
  {
    id: 5,
    src: "./assets/xingau/5.png",
  },
  {
    id: 6,
    src: "./assets/xingau/6.png",
  },
];

var bet = {
  mns: 0,
  st: "",
};

var betSuccess = {
  mns: 0,
  st: "",
};
var XiNgaus = {
  list: [],
};
//
const timeLoading = 25;
const timeWaiting = 15;

const overlay = document.querySelector(".overlay");

const btnTai = document.querySelector(".cuoc-tai");
const btnXiu = document.querySelector(".cuoc-xiu");

const Tai = document.querySelector(".btn-tai");
const Xiu = document.querySelector(".btn-xiu");

const btns = document.querySelectorAll(".btn");
const chips = document.querySelectorAll(".chip");
const tientai = document.querySelector(".tien-tai");
const tienxiu = document.querySelector(".tien-xiu");
const tiennhap = document.querySelector(".nhapsotien");
const AnhXiNgau = document.querySelectorAll(".xingau");
const demnguoc = document.querySelector(".demnguoc");

const btnCuoc = document.querySelector(".btn-cuoc");
const btnAllin = document.querySelector(".btn-allin");
const btnHuy = document.querySelector(".btn-huy");

const vung = document.querySelector(".dong-ho");
const xingau = document.querySelector(".xingau-list");
const xingaugif = document.querySelector(".btn-xingaugif");

const timevung = document.querySelector(".time");

const Hoathoadatcuoc = document.querySelector(".img-hoathoa-datcuoc");
const HoathoaAllIn = document.querySelector(".img-hoathoa-allin");
const HoathoaHuy = document.querySelector(".img-hoathoa-huy");
const HoathoaLan = document.querySelector(".img-hoathoa-lan");
const HoathoaBatDauDat = document.querySelector(".img-hoathoa-batdaudat");
const tiengxingau = document.querySelector(".tienglacxingau");
const tiengtienve = document.querySelector(".tienve");
const tiengting = document.querySelector(".ting");
const tiengdongho = document.querySelector(".clock");

const myMoney = document.querySelector(".tien-cuaban");
const nutAllin = document.querySelector(".btn-allin");
const nutHuy = document.querySelector(".btn-huy");

const music = document.querySelector(".music");


const btnSound = document.querySelector(".sound")

btnSound.onclick = ()=> music.play()

const hoathoadatcuoc = () => {
  Hoathoadatcuoc.style.display = "flex";
  setTimeout(() => {
    Hoathoadatcuoc.style.display = "none";
  }, 2000);
};
const hoathoaallin = () => {
  HoathoaAllIn.style.display = "flex";
  setTimeout(() => {
    HoathoaAllIn.style.display = "none";
  }, 2000);
};
const hoathoalan = () => {
  HoathoaLan.style.display = "flex";
  setTimeout(() => {
    HoathoaLan.style.display = "none";
  }, 2000);
};
const hoathoahuy = () => {
  HoathoaHuy.style.display = "flex";
  setTimeout(() => {
    HoathoaHuy.style.display = "none";
  }, 2000);
};
const hoathoahuybatdaudat = () => {
  HoathoaBatDauDat.style.display = "flex";
  setTimeout(() => {
    HoathoaBatDauDat.style.display = "none";
  }, 2000);
};
hoathoahuybatdaudat();






var mymns = {
  mns: myMoney.attributes.value.value,
};
myMoney.innerHTML = "$5,000,000";

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

//hàm trả về tài và xỉu
const hamtaixiu = (array) => {
  var TongXiNgau = 0;
  for (let i = 0; i < array.length; i++) {
    TongXiNgau += array[i];
  }
  return TongXiNgau >= 4 && TongXiNgau <= 10 ? "xiu" : "tai";
};

btnTai.onclick = () => {
  btnTai.classList.add("pick");
  btnXiu.classList.remove("pick");
  tientai.style.display = "block";
  tienxiu.innerHTML = "";
  tiengting.play();
  bet.st = "tai";
  nutAllin.onclick = () => {
    hoathoaallin();
    bet.mns = parseInt(mymns.mns);
    if (mymns.mns <= 0) {
      bet.mns = 0;
    }
    tientai.innerHTML = `$${bet.mns.toLocaleString("en-US")}`;
  };
  btns.forEach((btn) => {
    btn.classList.remove("disable");
  });

  chips.forEach((chip) => {
    chip.onclick = () => {
      tiengting.play();
      bet.mns = parseInt(chip.attributes.value.value);
      tientai.innerHTML = `$${bet.mns.toLocaleString("en-US")}`;
    };
  });
  tiennhap.addEventListener("input", (e) => {
    tienxiu.innerHTML = "";
    tiennhap.onkeydown = (e) => {
      tientai.innerHTML = "";
      if (e.key === "Enter") {
        tiennhap.placeholder = "Số khác";
        bet.mns = parseInt(e.target.value);
        tientai.innerHTML = `$${bet.mns.toLocaleString("en-US")}`;
        tiennhap.value = "";
      }
    };
  });
};

btnXiu.onclick = () => {
  btnXiu.classList.add("pick");
  btnTai.classList.remove("pick");
  tienxiu.style.display = "block";
  tientai.innerHTML = "";
  tiengting.play();
  bet.st = "xiu";
  nutAllin.onclick = () => {
    hoathoaallin();
    bet.mns = parseInt(mymns.mns);
    if (mymns.mns <= 0) {
      bet.mns = 0;
    }
    tienxiu.innerHTML = `$${bet.mns.toLocaleString("en-US")}`;
  };

  btns.forEach((btn) => {
    btn.classList.remove("disable");
  });
  chips.forEach((chip) => {
    chip.onclick = () => {
      tiengting.play();
      bet.mns = parseInt(chip.attributes.value.value);
      tienxiu.innerHTML = `$${bet.mns.toLocaleString("en-US")}`;
    };
  });
  tiennhap.addEventListener("input", (e) => {
    tientai.innerHTML = "";
    tienxiu.innerHTML = "";
    tiennhap.onkeydown = (e) => {
      if (e.key === "Enter") {
        tiennhap.placeholder = "Số khác";
        bet.mns = parseInt(e.target.value);
        tiennhap.value = "";
        tienxiu.innerHTML = `$${bet.mns.toLocaleString("en-US")}`;
      }
    };
  });
};
tiennhap.onclick = () => {
  tiennhap.placeholder = "";
};
//hàm hiển thị tài xỉu
const hamhienthi = (arr) => {
  if (hamtaixiu(arr) === "xiu") {
    Tai.classList.remove("active");
    Xiu.classList.add("active");
  } else if (hamtaixiu(arr) === "tai") {
    Tai.classList.add("active");
    Xiu.classList.remove("active");
  }
};

const donghodemnguoc = (time_init) => {
  const countdown = setInterval(run, 1000);
  function run() {
    time_init -= 1;
    demnguoc.innerHTML = time_init;
    if (time_init === 0) {
      clearInterval(countdown);
    }
  }
};

const timeDown = (time_init) => {
  const countdown = setInterval(run, 1000);
  function run() {
    time_init -= 1;
    timevung.innerHTML = time_init;
    if (time_init === 0) {
      clearInterval(countdown);
    }
    if (time_init === 1) {
      hamhienthi(XiNgaus.list);
      myMoney.innerHTML = `$${mymns.mns.toLocaleString("en-US")}`;
      betSuccess.mns = 0;
      betSuccess.st = "";
      tienxiu.innerHTML = "";
      tientai.innerHTML = "";
      tiengtienve.play();
    }
  }
};

btnCuoc.onclick = () => {
  betSuccess.mns = bet.mns;
  betSuccess.st = bet.st;
  hoathoadatcuoc();
};
nutHuy.onclick = () => {
  hoathoahuy();
  tienxiu.innerHTML = "";
  tientai.innerHTML = "";
  btnTai.classList.remove("pick");
  btnXiu.classList.remove("pick");
  betSuccess.mns = 0;
  betSuccess.st = "";
  btns.forEach((btn) => {
    btn.classList.add("disable");
  });
};

const handleMns = () => {
  mymns.mns = parseInt(mymns.mns);
  if (betSuccess.st === hamtaixiu(XiNgaus.list)) {
    mymns.mns += betSuccess.mns;
  } else {
    mymns.mns -= betSuccess.mns;
  }
};

const gameLoading = () => {
  hoathoahuybatdaudat();
  Hoathoadatcuoc.style.display = "none";
  vung.style.display = "none";
  donghodemnguoc(timeLoading);
  xingau.style.display = "none";
  overlay.style.display = "none";
  demnguoc.style.display = "block";
  btnTai.classList.remove("pick");
  btnXiu.classList.remove("pick");
  Tai.classList.remove("active");
  Xiu.classList.remove("active");
};

const gameOver = () => {
  demnguoc.innerHTML = "";
  document.querySelector(".btn-xingaugif").src = "./assets/xingau/roll1.gif";
  Tai.classList.remove("active");
  Xiu.classList.remove("active");
  demnguoc.style.display = "none";
  overlay.style.display = "block";
  tiengxingau.play();
  timeDown(timeWaiting);
  setTimeout(() => {
    hoathoalan();
    handleRandCheck();
    tiengxingau.pause();
    vung.style.left = "477px";
    vung.style.top = "112px";
    document.querySelector(".btn-xingaugif").src = "";
    vung.style.display = "block";
    xingau.style.display = "block";
    btns.forEach((btn) => {
      btn.classList.add("disable");
    });
    handleMns();
  }, 3000);
};

var MainContainer = () => {
  var main = () =>
    new Promise((resolve, reject) => {
      gameLoading();
      resolve();
    });
  main().then(() => {
    setTimeout(() => {
      gameOver();
    }, timeLoading * 1000);
  });
};

MainContainer();

setInterval(() => {
  console.log(xingaugif.src);
  MainContainer();
}, (timeLoading + timeWaiting) * 1000);

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
