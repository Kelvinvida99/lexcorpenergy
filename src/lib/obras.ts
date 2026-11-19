import type { ImageMetadata } from 'astro';
import comA from '../assets/obras/azotea-comercial-2024-01-a.jpg';
import comB from '../assets/obras/azotea-comercial-2024-01-b.jpg';
import comC from '../assets/obras/azotea-comercial-2024-01-c.jpg';
import comD from '../assets/obras/azotea-comercial-2024-01-d.jpg';
import comE from '../assets/obras/azotea-comercial-2024-01-e.jpg';
import comF from '../assets/obras/azotea-comercial-2024-01-f.jpg';
import com2 from '../assets/obras/azotea-comercial-2024-02.jpg';
import vivA from '../assets/obras/vivienda-teja-2023-09-a.jpg';
import vivB from '../assets/obras/vivienda-teja-2023-09-b.jpg';
import sueA from '../assets/obras/suelo-2023-03-a.jpg';
import sueB from '../assets/obras/suelo-2023-03-b.jpg';
import sueC from '../assets/obras/suelo-estructura.jpg';
import techo from '../assets/obras/techo-paneles.jpg';
import techoP from '../assets/obras/techo-pequeno.jpg';
import bat from '../assets/obras/baterias-inversores.jpg';

export type Categoria = 'comercial' | 'residencial' | 'suelo' | 'almacenamiento';

export interface Obra {
  img: ImageMetadata;
  alt: string;
  titulo: string;
  fecha?: string; // tomada del nombre de archivo original de la foto
  cat: Categoria;
}

export const categorias: { id: Categoria; label: string }[] = [
  { id: 'comercial', label: 'Azoteas comerciales' },
  { id: 'residencial', label: 'Viviendas' },
  { id: 'suelo', label: 'Sobre suelo' },
  { id: 'almacenamiento', label: 'Baterías' },
];

export const obras: Obra[] = [
  { img: comA, cat: 'comercial', titulo: 'Azotea comercial', fecha: 'Enero 2024', alt: 'Filas de paneles solares sobre estructura de aluminio en una azotea, con la ciudad de Santo Domingo al fondo.' },
  { img: vivB, cat: 'residencial', titulo: 'Vivienda con techo de teja', fecha: 'Septiembre 2023', alt: 'Casa con techo de teja roja y paneles solares integrados en dos aguas del techo.' },
  { img: sueA, cat: 'suelo', titulo: 'Sistema sobre suelo', fecha: 'Marzo 2023', alt: 'Larga fila de paneles solares sobre estructura metálica en un terreno, con montañas al fondo.' },
  { img: comD, cat: 'comercial', titulo: 'Azotea comercial', fecha: 'Enero 2024', alt: 'Dos filas de paneles solares inclinados en una azotea, vistas desde un extremo.' },
  { img: bat, cat: 'almacenamiento', titulo: 'Baterías e inversores', alt: 'Cuarto técnico con tres inversores azules en la pared y dos bancos de baterías de litio con su cableado.' },
  { img: com2, cat: 'comercial', titulo: 'Azotea comercial', fecha: 'Febrero 2024', alt: 'Paneles solares en una azotea junto a equipos de aire acondicionado, con vista a la ciudad.' },
  { img: vivA, cat: 'residencial', titulo: 'Vivienda con techo de teja', fecha: 'Septiembre 2023', alt: 'Paneles solares en dos techos de teja de una vivienda rodeada de palmeras.' },
  { img: comC, cat: 'comercial', titulo: 'Azotea comercial', fecha: 'Enero 2024', alt: 'Matriz de paneles solares sobre estructura elevada en azotea, con edificios de la ciudad detrás.' },
  { img: sueB, cat: 'suelo', titulo: 'Sistema sobre suelo', fecha: 'Marzo 2023', alt: 'Estructura de paneles solares sobre suelo vista desde abajo, con sus soportes metálicos.' },
  { img: comB, cat: 'comercial', titulo: 'Azotea comercial', fecha: 'Enero 2024', alt: 'Paneles solares montados sobre rieles de aluminio en una azotea de concreto.' },
  { img: sueC, cat: 'suelo', titulo: 'Estructura sobre terreno', alt: 'Arreglo de paneles solares sobre estructura inclinada en un terreno con hierba.' },
  { img: comE, cat: 'comercial', titulo: 'Azotea comercial', fecha: 'Enero 2024', alt: 'Varias filas de paneles solares en una azotea amplia con la ciudad al fondo.' },
  { img: techo, cat: 'comercial', titulo: 'Paneles en techo', alt: 'Paneles solares instalados sobre un techo, vistos desde arriba.' },
  { img: comF, cat: 'comercial', titulo: 'Montaje en azotea', fecha: 'Enero 2024', alt: 'Rieles de aluminio en montaje junto a una fila de paneles ya instalados en una azotea.' },
  { img: techoP, cat: 'residencial', titulo: 'Sistema en techo plano', alt: 'Pequeño arreglo de paneles solares inclinados sobre un techo plano.' },
];

export const portada = { img: comA, alt: obras[0].alt };
