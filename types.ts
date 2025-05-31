export type RutaType = {
  id: string;
  destino: string;
  nombre: string;
  tipo: string;
};

export type RootStackParamList = {
  Rutas: undefined;
  DetalleRuta: { ruta: RutaType };
  RutaAbordada: undefined;
};

