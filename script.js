let radiologia = [

    {
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCISCA ROJAS",
        rut: "9878782-1",
        prevision: "FONASA"
    },
    {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE"
    },
    {
        hora: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE"
    },
    {
        hora: "15:30",
        especialista: "ANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "FONASA"
    },
    {
        hora: "16:00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA"
    }

];

let dental = [
    {
        hora: "8:30",
        especialista: "ANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE"
    },
    {
        hora: "11:00",
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "9878789-2",
        prevision: "ISAPRE"
    },
    {
        hora: "11:30",
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA"
    },
    {
        hora: "13:00",
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA"
    },
    {
        hora: "13:30",
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA"
    },
    {
        hora: "14:00",
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE"
    }

];

let traumatologia = [
    {
        hora: "8:00",
        especialista: "MARIA PAZ ALTUZARRA",
        paciente: "PAULA SANCHEZ",
        rut: "15554774-5",
        prevision: "FONASA"
    },
    {
        hora: "10:00",
        especialista: "RAUL ARAYA",
        paciente: "ANGÉLICA NAVAS",
        rut: "15444147-9",
        prevision: "ISAPRE"
    },
    {
        hora: "10:30",
        especialista: "MARIA ARRIAGADA",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE"
    },
    {
        hora: "11:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        prevision: "ISAPRE"
    },
    {
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MARRE",
        rut: "16554741-K",
        prevision: "FONASA"
    },
    {
        hora: "12:00",
        especialista: "ARTURO CAVAGNARO",
        paciente: "CECILIA MENDEZ",
        rut: "9747535-8",
        prevision: "ISAPRE"
    },
    {
        hora: "12:30",
        especialista: "ANDRES KANACRI",
        paciente: "MARCIAL SUAZO",
        rut: "11254785-5",
        prevision: "ISAPRE"
    }
];

traumatologia.push(
    {
        hora: "9:00",
        especialista: "RENÉ POBLETE",
        paciente: "ANA GELLONA",
        rut: "13123329-7",
        prevision: "ISAPRE"
    },

    {
        hora: "9:30",
        especialista: "MARIA SOLAR",
        paciente: "RAMIRO ANDRADE",
        rut: "12221451-K",
        prevision: "FONASA"
    },

    {
        hora: "10:00",
        especialista: "RAUL LOYOLA",
        paciente: "CARMEN ISLA",
        rut: "10112348-3",
        prevision: "ISAPRE"
    },

    {
        hora: "10:30",
        especialista: "ANTONIO LARENAS",
        paciente: "PABLO LOAYZA",
        rut: "13453234-1",
        prevision: "ISAPRE"
    },

    {
        hora: "12:00",
        especialista: "MATIAS ARAVENA",
        paciente: "SUSANA POBLETE",
        rut: "14345656-6",
        prevision: "FONASA"
    }
);

console.log(traumatologia);
radiologia.pop();
radiologia.shift();
console.log(radiologia);

// Función para mostrar primera y última atención
function mostrarPrimeraYUltimaAtencion(especialidad, nombreEspecialidad) {
    let primeraAtencion = especialidad[0];
    let ultimaAtencion = especialidad[especialidad.length - 1];

    document.write(`<p><strong>${nombreEspecialidad}</strong></p>`);
    document.write(`<p>Primera atención: ${primeraAtencion.paciente} - ${primeraAtencion.prevision} |
                     Última atención: ${ultimaAtencion.paciente} - ${ultimaAtencion.prevision}</p>`);
}

// Mostrar primera y última atención de cada especialidad
mostrarPrimeraYUltimaAtencion(radiologia, "Radiología");
mostrarPrimeraYUltimaAtencion(traumatologia, "Traumatología");
mostrarPrimeraYUltimaAtencion(dental, "Dental");

// Función para mostrar tabla de atenciones
function mostrarTabla(especialidad, nombreEspecialidad) {

    document.write(`<h3>${nombreEspecialidad}</h3>`);
    document.write('<table border="1" cellspacing="0" cellpadding="5">');
    document.write('<tr>');
    document.write('<th>Hora</th>');
    document.write('<th>Especialista</th>');
    document.write('<th>Paciente</th>');
    document.write('<th>RUT</th>');
    document.write('<th>Previsión</th>');
    document.write('</tr>');

    for (let i = 0; i < especialidad.length; i++) {
        document.write('<tr>');
        document.write(`<td>${especialidad[i].hora}</td>`);
        document.write(`<td>${especialidad[i].especialista}</td>`);
        document.write(`<td>${especialidad[i].paciente}</td>`);
        document.write(`<td>${especialidad[i].rut}</td>`);
        document.write(`<td>${especialidad[i].prevision}</td>`);
        document.write('</tr>');
    }

    document.write('</table><br>');
}


function mostrardental(especialidad, nombreEspecialidad) {

    document.write(`<h3>${nombreEspecialidad}</h3>`);
    for (let i = 0; i < especialidad.length; i++) {
        document.write(`${especialidad[i].hora} - `);
        document.write(`${especialidad[i].especialista} - `);
        document.write(`${especialidad[i].paciente} - `);
        document.write(`${especialidad[i].rut} - `);
        document.write(`${especialidad[i].prevision}`);
        document.write('<br>');
    }
}

function Todoslospacientes(especialidad) {
    const pacientes = especialidad.map(p => p.paciente).join('<br>');
    document.write(`<h3>Todos los pacientes</h3>`);
    document.write(pacientes);
}

function pacientesDentalIsapre(dental) {
    // Filtrar pacientes que tienen previsión ISAPRE
    const pacientesIsapre = dental.filter(paciente => paciente.prevision === "ISAPRE");

    // Mostrar los pacientes filtrados
    document.write(`<h3>Pacientes de Dental con ISAPRE</h3>`);
    pacientesIsapre.forEach(paciente => {
        document.write(`${paciente.paciente} - ${paciente.prevision}`);
        document.write('<br>');
    });
}

function pacientesTraumatologiaFonasa(traumatologia) {
    // Filtrar pacientes que tienen previsión ISAPRE
    const pacientesIsapre = traumatologia.filter(paciente => paciente.prevision === "FONASA");

    // Mostrar los pacientes filtrados
    document.write(`<h3>Pacientes de Traumatología con FONASA</h3>`);
    pacientesIsapre.forEach(paciente => {
        document.write(`${paciente.paciente} - ${paciente.prevision}`);
        document.write('<br>');
    });
}

// Mostrar tablas de cada especialidad
mostrarTabla(radiologia, "Radiología");
mostrarTabla(traumatologia, "Traumatología");
mostrarTabla(dental, "Dental");
mostrardental(dental, "Dental");
Todoslospacientes(dental.concat(traumatologia,radiologia));
pacientesDentalIsapre(dental);
pacientesTraumatologiaFonasa(traumatologia);



