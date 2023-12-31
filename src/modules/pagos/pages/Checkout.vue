import Carrito from '@/modules/carrito/components/Carrito';
<template>
    <div class="box">

        <div class="checkout">
            <div class="titulo">
                Asoron
            </div>
            <div class="subtitulo">
                Checkout
            </div>
            <div class="tarjetas-box">
                <p>Seleccionar Tarjetas</p>
                <div class="tarjetas">
                    <div class="borde">
                        <div class="tarjeta">
                            <input type="radio" id="tarjeta1" name="tarjeta" value="tarjeta1">
                            <label for="tarjeta1">Tarjeta 1</label>
                        </div>
                        <div class="tarjeta">
                            <input type="radio" id="tarjeta2" name="tarjeta" value="tarjeta2">
                            <label for="tarjeta2">Tarjeta 2</label>
                        </div>
                        <div class="tarjeta">
                            <input type="radio" id="tarjeta3" name="tarjeta" value="tarjeta3">
                            <label for="tarjeta3">Tarjeta 3</label>
                        </div>
                    </div>
                </div>
                <div class="botones">
                    <button class="button-18 eliminar">Eliminar Tarjeta</button>
                    <button class="button-18">Añadir Tarjeta</button>
                </div>
            </div>
        </div>
        <div class="monto-total">Espacio 2</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    background-color: #fff;
    padding: 80px 135px;
}

.checkout {
    border: 1px solid #000;
    flex-grow: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: flex-start;
}

.monto-total {
    border: 1px solid #000;
    flex-grow: 1;
    height: 100%;

}

.titulo {
    color: #02021D;
    font-family: Brothers;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
}

.subtitulo {
    color: #02021D;
    margin-top: 20px;
}

.tarjetas-box {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: flex-start;
    width: 100%;

    & p {
        font-size: 16px;
        font-style: normal;
        line-height: 16px;
        margin-bottom: 20px;
        margin-left: 0;
    }


}

.tarjetas {
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 20px;
    padding: 24px;
}

.borde {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #E3E5ED;
}

.tarjeta {
    display: flex;
    flex-direction: row;
    justify-content: top;
    align-items: flex-start;
    padding: 24px;
    width: 100%;
    margin: 5px 0;

    & input {
        margin-right: 16px;
        width: 20px;
        height: 20px;
    }
}

.botones {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
}

.button-18 {
    align-items: center;
    background-color: #FDD08D;
    border: 0;
    border-radius: 100px;
    box-sizing: border-box;
    color: #000;
    cursor: pointer;
    display: inline-flex;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 800;
    justify-content: center;
    line-height: 20px;
    max-width: 480px;
    min-height: 40px;
    min-width: 0px;
    overflow: hidden;
    padding: 0px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    touch-action: manipulation;
    transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    margin-right: 20px;

    &:hover,
    :focus {
        background-color: #e6bd7f;
        color: #000;
    }

    &:active {
        background: #c09e6a;
        color: rgb(255, 255, 255, .7);
    }

    &:disabled {
        cursor: not-allowed;
        background: rgba(0, 0, 0, .08);
        color: rgba(0, 0, 0, .3);
    }

    &.eliminar {
        background-color: #fff;
        color: #000;
        margin-right: 0;
    }
}
</style>