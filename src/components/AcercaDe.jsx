import React from "react";

const AcercaDe = () => {
  return (
    <div style={styles.container}>
      <div style={styles.icono}>🔒</div>

      <h1 style={styles.titulo}>Período de prueba finalizado</h1>

      <p style={styles.texto}>
        El período de prueba de esta aplicación ha concluido.
      </p>

      <p style={styles.texto}>
        Para continuar utilizando todas las funciones, es necesario activar
        una licencia.
      </p>

      <div style={styles.caja}>
        <h3 style={styles.subtitulo}>Solicitar licencia</h3>

        <p>
          Si desea adquirir una licencia o necesita renovar la existente,
          comuníquese con el desarrollador.
        </p>

        <div style={styles.contacto}>
          <p>
            <strong>Desarrollador:</strong> JoyBoy
          </p>
          <p>
            <strong>WhatsApp:</strong> 231 159 1893
          </p>
          <p>
            <strong>Ubicación:</strong> Chignautla, Puebla
          </p>
        </div>
      </div>

      <div style={styles.aviso}>
        Una vez adquirida la licencia, la aplicación será activada para seguir
        utilizándola con normalidad.
      </div>

      <div style={styles.footer}>
        © {new Date().getFullYear()} JoyVolt Corporation. Todos los derechos
        reservados.
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 500,
    margin: "40px auto",
    padding: 30,
    background: "#fff",
    borderRadius: 15,
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },

  icono: {
    fontSize: 60,
    marginBottom: 15,
  },

  titulo: {
    color: "#d32f2f",
    marginBottom: 20,
  },

  texto: {
    fontSize: 17,
    color: "#444",
    marginBottom: 15,
    lineHeight: 1.6,
  },

  caja: {
    marginTop: 25,
    padding: 20,
    background: "#000000",
    borderRadius: 10,
    border: "1px solid #ddd",
    textAlign: "left",
  },

  subtitulo: {
    marginTop: 0,
    color: "#1976d2",
    textAlign: "center",
  },

  contacto: {
    marginTop: 15,
    lineHeight: 1.8,
    fontSize: 16,
  },

  aviso: {
    marginTop: 25,
    padding: 15,
    background: "#fff3cd",
    color: "#856404",
    border: "1px solid #ffeeba",
    borderRadius: 8,
    fontWeight: "bold",
    lineHeight: 1.5,
  },

  footer: {
    marginTop: 30,
    fontSize: 13,
    color: "#777",
    borderTop: "1px solid #ddd",
    paddingTop: 15,
  },
};

export default AcercaDe;