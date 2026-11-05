import { ImageResponse } from "next/og";

export const alt = "Allan Torres — Productor de Contenido Visual & Multimedia";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          backgroundColor: "#09090B",
          backgroundImage:
            "linear-gradient(135deg, #09090B 0%, #111114 55%, #18181B 100%)",
          color: "#FAFAFA",
        }}
      >
        {/* Top Header Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "#F59E0B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "24px",
                color: "#09090B",
              }}
            >
              AT
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "20px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "#A1A1AA",
                fontWeight: 600,
              }}
            >
              Allan Torres • Portafolio 2025–2026
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 22px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              fontSize: "15px",
              color: "#10B981",
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "9999px",
                backgroundColor: "#10B981",
              }}
            />
            Disponible para Proyectos
          </div>
        </div>

        {/* Central Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "56px",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#FAFAFA",
            }}
          >
            Productor de Contenido Visual &amp; Multimedia
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "24px",
              color: "#A1A1AA",
              lineHeight: 1.4,
              fontWeight: 400,
            }}
          >
            Diseño de piezas comerciales de alto rendimiento (menús, flyers,
            identidad de marca) y edición de video con entrega ágil para
            negocios y creadores digitales.
          </div>
        </div>

        {/* Bottom Specialties & Stats Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "28px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "8px 18px",
                borderRadius: "8px",
                backgroundColor: "rgba(245, 158, 11, 0.15)",
                color: "#F59E0B",
                border: "1px solid rgba(245, 158, 11, 0.3)",
              }}
            >
              Videos Comerciales
            </div>
            <div
              style={{
                display: "flex",
                padding: "8px 18px",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "#FAFAFA",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              Menús Gastronómicos
            </div>
            <div
              style={{
                display: "flex",
                padding: "8px 18px",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "#FAFAFA",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              Flyers &amp; Promos
            </div>
            <div
              style={{
                display: "flex",
                padding: "8px 18px",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "#FAFAFA",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              Identidad de Marca
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "16px",
              color: "#A1A1AA",
              fontWeight: 600,
            }}
          >
            <div>14 Proyectos</div>
            <div>•</div>
            <div>77 Entregables Reales</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
