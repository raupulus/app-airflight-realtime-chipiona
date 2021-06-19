<template>
  <div id="box-airflight" class="w-full">
      <div class="box-information">
        <div class="box-buttons">
          <div class="btn-map btn-downto-map pointer">
            Ir debajo del Mapa
          </div>
        </div>
      </div>

      <!-- Mapa -->
      <div id="map_container" class="box-map">
        <span id="loader" class="display-hidden box-map-loader">
          <img
            src="resources/airflight/spinny.gif"
            id="spinny"
            class="spinny"
            alt="Cargando..."
          />
          <progress id="loader_progress" class="loader-progress"></progress>
        </span>

        <div id="map_canvas" class="map-canvas"></div>
      </div>

      <!-- Información -->
      <div id="sidebar_container" class="box-information">
        <div id="sidebar_canvas">
          <div id="sudo_buttons" class="box-buttons">
            <div class="btn-map btn-reset-map pointer">
              Reiniciar Zoom
            </div>

            <div class="btn-map btn-upto-map pointer">
              Ir encima del Mapa
            </div>

            <div class="btn-map btn-reload-map pointer">
              Recargar datos
            </div>
          </div>

          <div id="dump1090_infoblock">
            <table style="width: 100%">
              <tr class="infoblock_heading">
                <td class="center">
                  <b id="infoblock_name">Detalles del Vuelo</b>
                </td>

                <td style="text-align: right">
                  <a
                    href="https://api.fryntiz.dev/airflight"
                    id="dump1090_version"
                    target="_blank"
                  ></a>
                </td>
              </tr>

              <tr class="infoblock_body">
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>

              <tr class="infoblock_body dim">
                <td>
                  Selecciona un avión de la tabla inferior para ver sus datos
                </td>
                <td>&nbsp;</td>
              </tr>

              <tr class="infoblock_body">
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>

              <tr class="infoblock_body">
                <td>
                  Aviones (total): <span id="dump1090_total_ac">n/a</span>
                </td>
                <td>
                  Mensajes: <span id="dump1090_message_rate">n/a</span>/sec
                </td>
              </tr>

              <tr class="infoblock_body">
                <td>
                  (con posiciones):
                  <span id="dump1090_total_ac_positions">n/a</span>
                </td>
                <td>
                  Historial:
                  <span id="dump1090_total_history">n/a</span>
                  posiciones
                </td>
              </tr>
            </table>
          </div>
          <!-- dump1090_infoblock -->

          <div id="selected_infoblock" class="display-hidden">
            <table style="width: 100%">
              <tr class="infoblock_heading">
                <td colspan="2">
                  <b>
                    <span
                      id="selected_callsign"
                      class="map-selected-callsign pointer"
                      >n/a
                    </span>
                  </b>

                  <span
                    id="selected_follow"
                    class="map-selected-follow pointer"
                  >
                    &#x21D2;
                  </span>

                  <span id="selected_flag" class="selected-flag">
                    <img
                      class="selected-flag-image"
                      src="about:blank"
                      alt="Flag"
                    />
                  </span>

                  <span
                    id="selected_registration"
                    class="selected-registration"
                  ></span>

                  <span
                    id="selected_icaotype"
                    class="selected-icao-type"
                  ></span>

                  <span id="selected_emergency"></span>

                  <div style="display: inline-block;">
                    <span style="color: green; font-size: small;">
                      &nbsp; Ver otras plataformas:
                    </span>

                    <a id="selected_flightaware_link" href="" target="_blank">
                      [FlightAware]
                    </a>

                    <span id="selected_links">
                      <a id="selected_fr24_link" href="" target="_blank">
                        [FR24]
                      </a>

                      <a id="selected_flightstats_link" href="" target="_blank">
                        [FlightStats]
                      </a>

                      <a id="selected_planefinder_link" href="" target="_blank">
                        [PlaneFinder]
                      </a>
                    </span>
                  </div>
                </td>
              </tr>

              <tr id="infoblock_country" class="infoblock_body">
                <td colspan="2">
                  País del registro: <span id="selected_country">n/a</span>
                </td>
              </tr>

              <tr class="infoblock_body">
                <td style="width: 55%;">
                  Altitud: <span id="selected_altitude"></span>
                </td>
                <td style="width: 45%;">
                  Squawk: <span id="selected_squawk"></span>
                </td>
              </tr>

              <tr class="infoblock_body">
                <td>Velocidad: <span id="selected_speed">n/a</span></td>
                <td>RSSI: <span id="selected_rssi">n/a</span></td>
              </tr>

              <tr class="infoblock_body">
                <td>Track: <span id="selected_track">n/a</span></td>
                <td>Visto hace: <span id="selected_seen">n/a</span></td>
              </tr>

              <tr class="infoblock_body">
                <td colspan="2">
                  Posición: <span id="selected_position">n/a</span>
                </td>
              </tr>

              <tr class="infoblock_body">
                <td colspan="2">
                  Distancia al centro de Chipiona:
                  <span id="selected_sitedist">n/a</span>
                </td>
              </tr>
            </table>
          </div>
          <!-- selected_infoblock -->

          <div id="planes_table" class="box-table-planes">
            <table id="tableinfo" class="table-info">
              <thead>
                <tr>
                  <td id="icao" class="map-tableinfo-title-icao">
                    ICAO
                  </td>

                  <td id="flag" class="map-tableinfo-title-country">
                    <!-- column for flag image -->
                  </td>

                  <td id="flight" class="map-tableinfo-title-flight">
                    Vuelo
                  </td>

                  <td id="squawk" class="map-tableinfo-title-squawk">
                    Squawk
                  </td>

                  <td id="altitude" class="map-tableinfo-title-altitude">
                    Altitud ft
                  </td>

                  <td id="speed" class="map-tableinfo-title-speed">
                    Velocidad kt
                  </td>

                  <td id="distance" class="map-tableinfo-title-distance">
                    Distancia nm
                  </td>

                  <td id="track" class="map-tableinfo-title-track">
                    Trackº
                  </td>

                  <td id="msgs" class="map-tableinfo-title-messages">
                    Msgs
                  </td>

                  <td id="seen" class="map-tableinfo-title-seen">
                    Visto s
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr
                  id="plane_row_template"
                  class="plane_table_row display-hidden"
                >
                  <td>ICAO</td>
                  <td>
                    <img
                      class="plane-table-image"
                      src="about:blank"
                      alt="Flag"
                    />
                  </td>
                  <td>VUELO</td>
                  <td>SQUAWK</td>
                  <td>ALTITUD</td>
                  <td>VELOCIDAD</td>
                  <td>DISTANCIA</td>
                  <td>TRACK</td>
                  <td>MSGS</td>
                  <td>EDAD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- planes_table -->
        </div>
        <!-- sidebar_canvas -->
      </div>
      <!-- sidebar_container -->

      <!-- Bloque de información -->
      <div
        id="SpecialSquawkWarning"
        class="display-hidden special-squawk-warning"
      >
        <b>Squawk 7x00 se informa y se muestra.</b><br />
        lo más probable es que se trate de un error en la recepción o
        decodificación.
        <br />
        Por favor, no llame a las autoridades locales, ya lo saben si es un
        chillido válido.
      </div>

      <div id="update_error" class="display-hidden update-error">
        <b>Problema sincronizando datos.</b><br />
        <span id="update_error_detail"></span><br />
        El mapa mostrado puede estar desactualizado, recarguelo para
        reintentarlo.
      </div>

      <div id="container_splitter"></div>
    </div>
</template>


    
<script lang="ts">

import { onMounted } from 'vue';
import * as $ from 'jquery';

/* eslint-disable */

// eslint-disable-next-line
var ol = require('../airflight/ol3/ol-3.17.1.js');



/* eslint-enable */



export default {
  name: 'Map',
  props: {
    name: String
  },
  setup () {
     onMounted(() => {
       console.log('montado');

     })
   }
  
}
</script>
