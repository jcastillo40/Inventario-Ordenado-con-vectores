class Producto {
    constructor(codigo, nombre, cantidad, costo) {
        this.codigo = Number(codigo);
        this.nombre = nombre;
        this.cantidad = Number(cantidad);
        this.costo = Number(costo);
    }

    info() {
        return `Código: ${this.codigo} | Nombre: ${this.nombre} | Cantidad: ${this.cantidad} | Costo: $${this.costo}`;
    }

    infoHtml() {
        return `
            <div>
                <p><strong>Código:</strong> ${this.codigo}</p>
                <p><strong>Nombre:</strong> ${this.nombre}</p>
                <p><strong>Cantidad:</strong> ${this.cantidad}</p>
                <p><strong>Costo:</strong> $${this.costo}</p>
            </div>
        `;
    }
}