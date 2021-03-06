import './main.css';
import React from 'react';
import zomboid from "../src/imagenes/zomboid.png"

const Inicio = () => {
    return(
        <div><main className="contenedor">
        <img src={zomboid} alt=""/>
        <p>Project Zomboid es un entorno abierto infestado de zombis. Hace una pregunta simple: ¿cómo morirás?<br></br>

        En las ciudades de Muldraugh y West Point, los sobrevivientes deben saquear casas, construir defensas y hacer todo lo posible para retrasar día a día su inevitable muerte. No llega ayuda: su supervivencia continua depende de su propia astucia, suerte y habilidad para evadir una horda implacable.</p>
        <h2>Caracteristicas Actuales</h2>
        <ul>
            <li>Hardcore Sandbox Zombie Survival Game con un enfoque en la supervivencia realista.</li>
            <li>Supervivencia multijugador en línea con servidores de ejecución de jugadores persistentes.</li>
            <li>Cooperativa local de pantalla dividida para 4 jugadores</li>
            <li>Cientos de zombis con mecánica de enjambre y sistemas auditivos y visuales en profundidad.</li>
            <li>Sistema de línea de visión completa y mecánica de iluminación, sonido y visibilidad en tiempo real. Escóndete en las sombras, guarda silencio y apaga las luces por la noche, o al menos cuelga sábanas sobre las ventanas.</li>
            <li>Vast and growing map (loosely based on a real world location) for you to explore, loot and set up your fortress. Check out Blindcoder’s map <a href="https://map.projectzomboid.com/">project: https://map.projectzomboid.com/</a></li>
            <li>Vehículos con física completa y mecánicas de juego profundas y realistas.</li>
            <li>Usa herramientas y objetos para fabricar armas, hacer barricadas y cocinar. Incluso puedes construir fuertes a prueba de zombis cortando árboles, aserrando madera y buscando suministros.</li>
            <li>Lidia con la depresión, el aburrimiento, el hambre, la sed y la enfermedad mientras intentas sobrevivir.</li>
            <li>El día se convierte en noche. La electricidad falla. Las hordas migran. Llega el invierno. La naturaleza comienza a hacerse cargo gradualmente.</li>
            <li>Agricultura, pesca, carpintería, cocina, trampas, personalización de personajes, habilidades y ventajas que se desarrollan en función de lo que haces en el juego.</li>
            <li>Zombis adecuados que no corren. (A menos que se lo indique en el menú de la zona de pruebas).</li>
            <li>Una tonelada de asombrosas pistas de música atmosférica del prodigio que es Zach Beever.</li>
            <li>Escenarios de desafíos imaginativos y modo de acción instantánea 'Last Stand', además de Sandbox y Survival regulares.</li>
            <li>Compatibilidad con modding Lua completa, abierta y potente.</li>
            <li>Compatibilidad con Xbox Controller Gamepad en Windows. [Otras almohadillas se pueden configurar manualmente. La compatibilidad con gamepad no está disponible actualmente en Mac]</li>
        </ul>
    </main>
    </div>
    )
}
export default Inicio;