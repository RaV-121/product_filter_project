import React from 'react'

function Product({item}) {

      function lastNumberFromValue(value) {
      const str = value.toString();
      if (str.includes('.')) {
        return str.split('.')[1];
      } else {
        return '00';
      }
    }

  return (
    <div className="Product">
        <img src={"../img/"+item.picture+".png"} />
        <div className="Details Opis">{item.opis}</div>

        <div className="Details">
          <div className="detailCategory">Pojemność (kg): </div>
          <div className="detail">{item.pojemnosc.wartosc} {item.pojemnosc.jednostka}</div>
        </div>

        <div className="Details">
          <div className="detailCategory">Wymiary (GxSxW): </div>
          <div className="detail">{item.wymiary[0]} x {item.wymiary[1]} x {item.wymiary[2]} cm</div>
        </div>

        <div className="Details">
          <div className="detailCategory ">Funkcje: </div>
          <div className="detail">{item.funkcje.join(', ')}</div>
        </div>

        <div className="Details">
          <div className="detailCategory">Klasa energetyczna </div>
          <div className="detail energyClass">{item.klasa}</div>
        </div>

        <div className="Details">
          <div className="detailCategory">Cena obowiązuje: </div>
          <div className="detail Expiration">{item.cenaWaznosc.join(' - ')}</div>
        </div>

        <div className="Details">
          <div className="price">
            <span class="amount">{Math.trunc(item.cena)}</span>
            <span class="fraction">{lastNumberFromValue(item.cena)}</span>
            <span class="currency">zł</span>
          </div>
        </div>

        <div className="Details">
          <div className="Installmetns">{(item.cena/60).toFixed(2)} zł x 60 rat</div>
        </div>

        <button className="chooseButton">WYBIERZ</button>

    </div>
  )
}

export default Product