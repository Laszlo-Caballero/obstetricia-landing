import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

export function tiempoDesde(fechaString: string): string {
  const fecha = new Date(fechaString);

  return formatDistanceToNow(fecha, {
    addSuffix: true,
    locale: es,
  });
}
