//constructor de clase Prod (productos)
export class Prod {
    constructor(IDp, Descrip, Price, Obs, Stock, Sold,URLimg) {
        (this.IDp = IDp),
            (this.Descrip = Descrip),
            (this.Price = Price),
            (this.Obs = Obs),
            (this.Stock = Stock),
            (this.Sold = Sold),
            (this.URLimg = URLimg);
            
    }
    
   // Inyector en HTML de DIVs con productos
    injectProd(idToInsert) {
        let parent = document.getElementById(idToInsert);
        let div = document.createElement("div");
      
        if (this.Stock!='0') {  div.innerHTML = `
        
        <h3>${this.Descrip}</h3>
        <div>
            <img src="${this.URLimg}" alt="${this.Descrip}"/>
            <p>${this.Price}</p>
            <button class="buybut">Comprar</button>
        </div>
        `;
          // en caso de que el Stock del producto sea 0 se indica que el producto está agotado en vez de mostrar el precio.  
        } else {
            div.innerHTML = `
            
            <h3>${this.Descrip}</h3>
            <div>
                <img src="${this.URLimg}" alt="${this.Descrip}"/>
                <p>PRODUCTO AGOTADO</p>
            </div>
            `;
        }
        parent.appendChild(div);
    }
}