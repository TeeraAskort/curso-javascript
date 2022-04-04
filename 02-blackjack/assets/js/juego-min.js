const miModulo = (() => {
  "use strict";
  let e = [];
  const t = ["C", "D", "H", "S"],
    r = ["A", "J", "Q", "K"];
  let n = [];
  const l = document.querySelector("#btnPedir"),
    a = document.querySelector("#btnDetener"),
    s = document.querySelector("#btnNuevo"),
    o = document.querySelectorAll(".divCartas"),
    d = document.querySelectorAll("small"),
    c = (t = 1) => {
      (e = i()), (n = []);
      for (let e = 0; e < t + 1; e++) n.push(0);
      d.forEach((e) => (e.innerHTML = "0")),
        o.forEach((e) => (e.innerHTML = "")),
        (a.disabled = !1),
        (l.disabled = !1);
    },
    i = () => {
      e = [];
      for (let r = 2; r <= 10; r++) for (let n of t) e.push(r + n);
      for (let n of r) for (let r of t) e.push(n + r);
      return _.shuffle(e);
    },
    u = () => {
      if (0 === e.length) throw "No hay cartas en la baraja";
      return e.pop();
    },
    b = (e, t) => (
      (n[t] += ((e) => {
        const t = e.substring(0, e.length - 1);
        return isNaN(t) ? ("A" === t ? 11 : 10) : 1 * t;
      })(e)),
      (d[t].innerText = n[t]),
      n[t]
    ),
    f = (e, t) => {
      const r = document.createElement("img");
      (r.src = `assets/cartas/${e}.png`),
        r.classList.add("carta"),
        o[t].append(r);
    },
    h = (e) => {
      let t = 0;
      do {
        const e = u();
        (t = b(e, n.length - 1)), f(e, n.length - 1);
      } while (t < e && e <= 21);
      (() => {
        const [e, t] = n;
        e > 21
          ? alert("Perdiste")
          : 21 === e
          ? 21 === t
            ? alert("Empate")
            : alert("Ganaste")
          : t > 21
          ? alert("Ganaste")
          : e < t && alert("Perdiste");
      })();
    };
  return (
    l.addEventListener("click", () => {
      const e = u(),
        t = b(e, 0);
      f(e, 0),
        t > 21
          ? (console.warn("Perdiste"),
            (l.disabled = !0),
            (a.disabled = !0),
            h(t))
          : 21 === t &&
            (console.warn("21, Genial"),
            (l.disabled = !0),
            (a.disabled = !0),
            h(t));
    }),
    a.addEventListener("click", () => {
      (l.disabled = !0), (a.disabled = !0), h(n[0]);
    }),
    s.addEventListener("click", () => {
      c();
    }),
    { nuevoJuego: c }
  );
})();
