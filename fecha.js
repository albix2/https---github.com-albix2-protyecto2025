
        function actualizarFechaHora() {
            const ahora = new Date();
            const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
            
            const fecha = ahora.toLocaleDateString('es-ES', opcionesFecha);
            const hora = ahora.toLocaleTimeString('es-ES', opcionesHora);
            
            document.getElementById('fecha-hora').textContent = `${fecha} - ${hora}`;
        }

        // Actualiza cada segundo
        setInterval(actualizarFechaHora, 1000);

        // Llamada inicial
        actualizarFechaHora();
