const rmvall = document.getElementsByClassName("action");
const remove = document.getElementsByClassName("remove");
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const items = document.getElementsByClassName("items")[0];
const total = document.getElementById("total");
const sum = document.getElementById("sum");

function remov(x, y, z) {
  let t = Number(total.innerHTML);
  let price = document.getElementById(y);
  let p = Number(price.innerHTML);
  let s = Number(sum.innerHTML);
  let zz = document.getElementById(z);
  let i = Number(zz.innerHTML);
  s -= i;
  sum.innerHTML = String(s);
  t = t - p;
  total.innerHTML = String(t.toPrecision(4));

  x.remove();
}

function add(x, z, u) {
  let item = document.getElementById(x);
  let price = document.getElementById(z);
  let unit = document.getElementById(u);

  let y = Number(item.innerHTML);
  let f = Number(unit.innerHTML);
  let t = Number(total.innerHTML);
  let s = Number(sum.innerHTML);

  y += 1;
  let v = f * y;
  v = v.toPrecision(4);
  t += f;
  s += 1;
  console.log(v, "price");
  console.log(y, "qua");
  console.log(f, "unit");
  item.innerHTML = String(y);
  price.innerHTML = String(v);
  total.innerHTML = String(t.toPrecision(4));
  sum.innerHTML = String(s);
}

function sub(x, z, u) {
  let item = document.getElementById(x);
  let price = document.getElementById(z);
  let unit = document.getElementById(u);
  let t = Number(total.innerHTML);
  let s = Number(sum.innerHTML);
  let y = Number(item.innerHTML);
  let f = Number(unit.innerHTML);
  if (y > 1) {
    y -= 1;
    t -= f;
    s -= 1;
  }

  let v = f * y;

  v = v.toPrecision(4);
  item.innerHTML = String(y);
  price.innerHTML = String(v);
  total.innerHTML = String(t.toPrecision(4));
  sum.innerHTML = String(s);
}

function like(x) {
let icon = document.getElementById(x);
icon.onclick = function(){
  icon.classList.toggle('active');
}}

