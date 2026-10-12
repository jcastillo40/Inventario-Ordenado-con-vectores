class Inventario {
    constructor() {
        this.productos = [];
    }

    buscar(codigo) {
        if (codigo === "" || codigo === null || !Number.isFinite(Number(codigo))) {
            return null;
        }

        let cod = Number(codigo);
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].codigo === cod) {
                return this.productos[i];
            }
        }
        return null;
    }

    agregar(producto) {
        if (this.buscar(producto.codigo) !== null) {
            return false;
        }

        let pos = 0;
        while (pos < this.productos.length && this.productos[pos].codigo < producto.codigo) {
            pos++;
        }

        this.productos.push(null);

        for (let i = this.productos.length - 1; i > pos; i--) {
            this.productos[i] = this.productos[i - 1];
        }

        this.productos[pos] = producto;
        return true;
    }

    eliminar(codigo) {
        if (codigo === "" || codigo === null || !Number.isFinite(Number(codigo))) {
            return null;
        }

        let cod = Number(codigo);
        let index = -1;

        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].codigo === cod) {
                index = i;
                break;
            }
        }

        if (index === -1) return null;

        let productoEliminado = this.productos[index];

        for (let i = index; i < this.productos.length - 1; i++) {
            this.productos[i] = this.productos[i + 1];
        }

        this.productos.pop();

        return productoEliminado;
    }

    extraerPrimero() {
        if (this.productos.length === 0) return null;

        let primero = this.productos[0];

        for (let i = 0; i < this.productos.length - 1; i++) {
            this.productos[i] = this.productos[i + 1];
        }

        this.productos.pop();

        return primero;
    }

    extraerUltimo() {
        if (this.productos.length === 0) return null;

        return this.productos.pop();
    }

    listar() {
        if (this.productos.length === 0) {
            return "<p>El inventario está vacío.</p>";
        }

        let resultado = "";
        for (let i = 0; i < this.productos.length; i++) {
            resultado += this.productos[i].infoHtml();
        }
        return resultado;
    }

    listarInverso() {
        if (this.productos.length === 0) {
            return "<p>El inventario está vacío.</p>";
        }

        let resultado = "";
        for (let i = this.productos.length - 1; i >= 0; i--) {
            resultado += this.productos[i].infoHtml();
        }
        return resultado;
    }
}