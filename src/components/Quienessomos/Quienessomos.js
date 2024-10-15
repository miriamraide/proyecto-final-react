import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Quienessomos() {
  return (
    <>
      <div>
        <img src="barkery.jpg" class="img-fluid" alt="Responsive image" />
      </div>
      <button class="display-12 text-secondary px-0 bg-warning">
        Quienes Somos
      </button>
      <div class="container-fluid d-inline-flex position-relative mt-1">
        <div class="col-md-4 px-4">
          <p class="display-6 text-secondary text-center font-weight-bold ">
            BARK y sus Amigos
          </p>
          ;
          <img
            src="barkeryysusamigos.jpg"
            class="img-fluid"
            alt="Responsive image"
          />
          <p class="display-8 text-secondary font-weight-bold">
            En la última década, ha surgido un notorio auge en la adopción de
            prácticas sostenibles por parte de diversas marcas, las cuales han
            decidido comprometerse con la fabricación de productos utilizando
            materiales reciclados. Este fenómeno no solo responde a una
            creciente conciencia ambiental por parte de los consumidores, sino
            que también representa una contribución positiva al bienestar del
            planeta. <b>BARKery</b> se ha sumado a esta tendencia, ya sea
            ofreciendo productos alimenticios orgánicos preparados con los más
            frescos ingredients, como también disponiendo de productos no
            alimenticios fabricados con materiales reciclados.
            <div>
              <b>Sumate a la BARKerymania y Reciclá!</b>
            </div>
          </p>
        </div>
        <div class="col-md-4 px-4">
          <p class="display-6 text-secondary text-center font-weight-bold ">
            No te olvides de Reciclar!
          </p>
          ;
          <img
            src="barkeryreciclados.jpg"
            class="img-fluid"
            alt="Responsive image"
          />
        </div>
        <div class="col-md-4 px-4">
          <p class="display-6 text-secondary text-center font-weight-bold ">
            Alimentos sanos y sabrosos!
          </p>
          ;
          <img
            src="barkery-alimentos-organicos.jpg"
            class="img-fluid"
            alt="Responsive image"
          />
          <p class="display-8 text-secondary font-weight-bold">
            El principal desafío al formular y desarrollar productos para el
            mercado en alimentos de mascotas es garantizar una nutrición
            adecuada.Cada especie tiene requerimientos nutricionales
            específicos, y es esencial que los productos se formulen para
            satisfacer estas necesidades. Los nutricionistas formuladores
            trabajan con colaboración con granjeros locales para asegurarse de
            que los productos sean equilibrados y cumplan con todos los
            requisitos nutricionales necesarios. <b>BARKery</b> promueve la
            venta de alimentos sanos y sabrosos para las mascotas, asegurando la
            salud, la longevidad de las mascotas y la satisfacción de los
            tutores.
          </p>
        </div>
      </div>
    </>
  );
}

export default Quienessomos;
