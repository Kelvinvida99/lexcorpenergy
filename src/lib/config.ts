/**
 * Datos de la empresa. Todo lo que valga `null` está PENDIENTE de confirmar
 * por LexCorp Energy: la web lo muestra como «por confirmar» en lugar de inventarlo.
 */
export const empresa = {
  nombre: 'LexCorp Energy',
  telefono: null as string | null, // ej. '+1 809 000 0000'
  whatsapp: null as string | null, // solo dígitos con código de país, ej. '18090000000'
  correo: null as string | null,
  direccion: null as string | null,
  zonaServicio: null as string | null, // ej. 'Santo Domingo y todo el país'
  instagram: null as string | null,
  facebook: null as string | null,
  linkedin: null as string | null,
  anios: null as string | null, // años de experiencia
  proyectos: null as string | null, // número de proyectos o kWp instalados
  certificaciones: null as string | null,
  marcas: null as string | null, // marcas de equipos con las que trabajan
};

/**
 * Supuestos del estimador. Son valores ORIENTATIVOS y se muestran al visitante.
 * LexCorp debe revisarlos antes de publicar.
 */
export const supuestos = {
  tarifaRDkWh: 11, // RD$ por kWh, tarifa media aproximada en consumos altos
  horasSolPico: 5, // horas de sol pico diarias típicas en República Dominicana
  rendimiento: 0.8, // pérdidas de sistema (inversor, temperatura, cableado)
  panelW: 550, // potencia de un panel moderno
  areaPanelM2: 2.6, // área de un panel incluyendo separación
  facturaMin: 2000,
  facturaMax: 200000,
  facturaPaso: 500,
  facturaInicial: 12000,
};

export const waLink = (texto: string) =>
  empresa.whatsapp
    ? `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(texto)}`
    : null;
